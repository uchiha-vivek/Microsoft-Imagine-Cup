import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../config/firebase";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    photoURL: "", // To store the profile image URL
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const auth = getAuth();
  const storage = getStorage();

  // Fetch user profile
  const fetchProfile = async () => {
    if (!userId) return;
    try {
      setLoading(true);
      const docRef = doc(db, "profiles", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      } else {
        console.log("No such document!");
        const user = auth.currentUser;
        setProfile((prev) => ({
          ...prev,
          email: user.email, // Populate email from Google Login
        }));
      }
    } catch (error) {
      console.error("Error fetching profile:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Save user profile
  const saveProfile = async () => {
    if (!userId) return;
    try {
      setLoading(true);
      const docRef = doc(db, "profiles", userId);
      await setDoc(docRef, profile, { merge: true });
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const storageRef = ref(storage, `profileImages/${userId}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setProfile((prev) => ({ ...prev, photoURL: downloadURL }));
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  // Check authentication and set userId
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("User is not authenticated");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  // Fetch profile on userId change
  useEffect(() => {
    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-lg p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src={profile.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-4"
            />
          )}
          {isEditing ? (
            <input
              type="text"
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
              className="mt-4 text-xl font-bold text-gray-800 border-b-2 focus:outline-none"
              placeholder="Enter your name"
            />
          ) : (
            <h1 className="text-2xl font-bold text-gray-800 mt-4">
              {profile.name || "John Doe"}
            </h1>
          )}
          <p className="text-gray-600">{profile.email}</p>
        </div>

        {/* Bio Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800">Bio</h2>
          {isEditing ? (
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring"
              placeholder="Add a bio..."
            />
          ) : (
            <p className="mt-2 text-gray-600">{profile.bio || "Add a bio..."}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end">
          {isEditing ? (
            <>
              <button
                onClick={saveProfile}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-4"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
