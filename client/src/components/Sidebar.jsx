import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsPersonFill,
  BsClockHistory,
  BsJournalBookmarkFill,
  BsChatDotsFill,
  BsLifePreserver,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
         
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPersonFill className="icon" /> Profile
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsClockHistory className="icon" /> Sessions
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsJournalBookmarkFill className="icon" /> Mood Journal
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsChatDotsFill className="icon" /> Discussion Forum
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsLifePreserver className="icon" /> Help Desk
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
