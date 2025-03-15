"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Placeholder from "./components/Placeholder";

const adData = [
  {
    id: 1,
    title: "Service for girls and aunties",
    description: "I am a educated boy from colombo Doing service around colombo Age 25 Call or WhatsApp for more info Connect with me...",
    likes: 1,
    views: 430,
    time: "2m ago",
    type: "VIP Ad"
  },
  {
    id: 2,
    title: "👸Girls and Aunty's 👸 Home and...",
    description: "💝Girls only Secret relationship & Full service💝 (no boys gay service) looking for a good relationship with girlfriend. Hi I'm...",
    likes: 0,
    views: 224,
    time: "2m ago",
    type: "VIP Ad"
  },
  {
    id: 3,
    title: "❤ Maharagama, Pannipitiya FULL...",
    description: "❤ Maharagama, Pannipitiya FULL SERVICE 4500/= 👸% My real picture 👸 I'm Nilushi 👸 27 years 👸 Hot & Young Girl 👸 🌹...",
    likes: 0,
    views: 22,
    time: "6m ago",
    type: "Super Ad"
  },
  {
    id: 4,
    title: "Genuine Hot Hot cam show 💘 💝",
    description: "👑 Hi©GENTLEMAN☺ 🌹 6 mins 1000/= fingering full body open show Im young student my name is Mathu age is 22 years...",
    likes: 50,
    views: "57.0K",
    time: "16m ago",
    type: "Cash Track Guaranteed"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <button className="mobile-menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="logo-container">
          <Placeholder width={40} height={40} />
          <h2>Hela-Lanka Ads</h2>
        </div>
        <div className="header-buttons">
          <button className="refresh-btn">Refresh</button>
          <button className="post-ad-btn">Post Ad</button>
        </div>
      </header>

      {/* Sidebar overlay */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Main content */}
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Left sidebar */}
        <div className={`left-sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <button 
            className="sidebar-close"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
          <div className="publish-card">
            <h3>How to publish Ads?</h3>
            <p>අයිතමක් දැන්වීම කෙසේද?</p>
          </div>

          <div className="search-container">
            <form className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="Search Ads ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">Search</button>
            </form>
          </div>

          <div className="sidebar-menu">
            <button className="menu-button agents-btn">Agents ⚜</button>
            <button className="menu-button fake-ads-btn">Fake Ads ⚠</button>
            <button className="menu-button saved-ads-btn">My Saved Ads ❤</button>
            <button className="menu-button blog-btn">Blog 📰</button>
            <button className="menu-button dashboard-btn">Dashboard 🏠</button>
            <button className="menu-button logout-btn">Logout ↪</button>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul className="link-list">
              <li className="link-item"><a href="#">Girls Personal</a></li>
              <li className="link-item"><a href="#">Live Cam</a></li>
              <li className="link-item"><a href="#">Spa</a></li>
              <li className="link-item"><a href="#">Boys Personal</a></li>
              <li className="link-item"><a href="#">Shemale</a></li>
              <li className="link-item"><a href="#">Rent</a></li>
              <li className="link-item"><a href="#">Sale</a></li>
              <li className="link-item"><a href="#">Marriage Proposal</a></li>
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="main-content">
          <div className="header-section">
            <div className="tab-buttons">
              <button className="tablink">See New Ads</button>
              <button className="tablink">Agents</button>
              <button className="tablink">Fake Ads</button>
            </div>
            <h1>Lanka Ads | Hela Ads</h1>
            <p>Discover Hela Lanka in Lanka Ads & Hela Ads : Your personal hub for SL Ads, Personal Ads, Lanka Ad, Lanka Add & Spa Ads</p>
            <a href="https://ok-lanka.com" className="text-[#4CAF50] hover:underline">Go to OK-Lanka.com</a>

            <div className="subscription-btns">
              <button className="sub-btn green-sub">🔔 Subscribe</button>
              <button className="sub-btn blue-sub">✈ Subscribe</button>
            </div>
          </div>

          <div className="ad-grid">
            {adData.map((ad) => (
              <div key={ad.id} className="ad-card">
                <span className={`ad-label ${ad.type === "NBA Ad" ? "nba-label" : ""}`}>
                  {ad.type}
                </span>
                <div className="ad-content">
                  <Placeholder width={120} height={120} />
                  <div className="ad-details">
                    <div className="ad-title">{ad.title}</div>
                    <div className="ad-description">{ad.description}</div>
                    <div className="ad-meta">
                      <div className="likes">👍 {ad.likes} Likes</div>
                      <div className="views">{ad.views} Views</div>
                      <div className="time">{ad.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
