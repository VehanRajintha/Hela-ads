"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import Placeholder from '../components/Placeholder';
import './dashboard.css';

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Set active tab from URL parameter
  useEffect(() => {
    if (tabParam && ['overview', 'my-ads', 'post-ad', 'saved', 'settings'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // Redirect if user is not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Update URL when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/dashboard?tab=${tab}`, { scroll: false });
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#121212' 
      }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <div className="logo-container">
          <Placeholder width={40} height={40} />
          <h2 className="logo-text">Hela-Lanka Ads</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => router.push('/')}
            className="home-button"
          >
            Home
          </button>
          <div style={{ position: 'relative' }}>
            <button 
              className="user-menu-button"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <div className="user-avatar">
                {user.photoURL ? (
                  <Image 
                    src={user.photoURL} 
                    alt={user.displayName || 'User'} 
                    width={32} 
                    height={32}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                ) : (
                  user.displayName?.charAt(0) || 'U'
                )}
              </div>
              <span className="hidden sm:inline">{user.displayName}</span>
            </button>
            <div className={`user-dropdown ${isUserMenuOpen ? 'active' : ''}`}>
              <div className="user-dropdown-header">
                <p className="user-dropdown-name">{user.displayName}</p>
                <p className="user-dropdown-email">{user.email}</p>
              </div>
              <button 
                onClick={handleSignOut}
                className="signout-button"
              >
                <span>↪</span> Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Layout */}
      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className={`dashboard-sidebar ${isMenuOpen ? 'active' : ''}`}>
          {/* Close button for mobile */}
          <button 
            className="sidebar-close"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          <div className="sidebar-header">
            <h2 className="sidebar-title">Dashboard</h2>
          </div>
          <nav className="sidebar-nav">
            <button 
              onClick={() => handleTabChange('overview')}
              className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
            >
              <span>📊</span>
              <span>Overview</span>
            </button>
            <button 
              onClick={() => handleTabChange('my-ads')}
              className={`nav-button ${activeTab === 'my-ads' ? 'active' : ''}`}
            >
              <span>📝</span>
              <span>My Ads</span>
            </button>
            <button 
              onClick={() => handleTabChange('post-ad')}
              className={`nav-button ${activeTab === 'post-ad' ? 'active' : ''}`}
            >
              <span>➕</span>
              <span>Post New Ad</span>
            </button>
            <button 
              onClick={() => handleTabChange('saved')}
              className={`nav-button ${activeTab === 'saved' ? 'active' : ''}`}
            >
              <span>❤️</span>
              <span>Saved Ads</span>
            </button>
            <button 
              onClick={() => handleTabChange('settings')}
              className={`nav-button ${activeTab === 'settings' ? 'active' : ''}`}
            >
              <span>⚙️</span>
              <span>Settings</span>
            </button>
          </nav>

          <div className="sidebar-footer">
            <button 
              onClick={handleSignOut}
              className="signout-button"
            >
              <span>↪</span> Sign Out
            </button>
          </div>
        </aside>

        {/* Sidebar Overlay */}
        <div 
          className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Dashboard Content */}
          {activeTab === 'overview' && (
            <div>
              <h1 className="page-title">Welcome, {user.displayName}!</h1>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-header">
                    <h3 className="stat-title">Active Ads</h3>
                    <span className="stat-icon">📝</span>
                  </div>
                  <p className="stat-value">0</p>
                  <p className="stat-description">No active ads yet</p>
                </div>
                
                <div className="stat-card">
                  <div className="stat-header">
                    <h3 className="stat-title">Total Views</h3>
                    <span className="stat-icon">👁️</span>
                  </div>
                  <p className="stat-value">0</p>
                  <p className="stat-description">No views yet</p>
                </div>
                
                <div className="stat-card">
                  <div className="stat-header">
                    <h3 className="stat-title">Saved Ads</h3>
                    <span className="stat-icon">❤️</span>
                  </div>
                  <p className="stat-value">0</p>
                  <p className="stat-description">No saved ads yet</p>
                </div>
              </div>
              
              <div className="activity-card">
                <h2 className="activity-title">Recent Activity</h2>
                <div className="empty-state">
                  <div className="empty-icon">
                    <span>📊</span>
                  </div>
                  <p className="empty-text">No recent activity</p>
                  <button 
                    onClick={() => handleTabChange('post-ad')}
                    className="action-button"
                  >
                    Post Your First Ad
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'my-ads' && (
            <div>
              <h1 className="page-title">My Ads</h1>
              <div className="activity-card">
                <div className="empty-state">
                  <div className="empty-icon">
                    <span>📝</span>
                  </div>
                  <p className="empty-text">You haven't posted any ads yet</p>
                  <button 
                    onClick={() => handleTabChange('post-ad')}
                    className="action-button"
                  >
                    Post Your First Ad
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'post-ad' && (
            <div>
              <h1 className="page-title">Post New Ad</h1>
              <div className="activity-card">
                <form>
                  <div className="form-group">
                    <label className="form-label">Ad Title</label>
                    <input 
                      type="text" 
                      className="form-input"
                      placeholder="Enter a catchy title for your ad"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea 
                      className="form-input form-textarea"
                      placeholder="Describe your ad in detail"
                    ></textarea>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select className="form-select">
                      <option value="">Select a category</option>
                      <option value="personal">Personal</option>
                      <option value="spa">Spa</option>
                      <option value="rent">Rent</option>
                      <option value="sale">Sale</option>
                      <option value="marriage">Marriage Proposal</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input 
                      type="text" 
                      className="form-input"
                      placeholder="Enter your location"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Contact Number</label>
                    <input 
                      type="text" 
                      className="form-input"
                      placeholder="Enter your contact number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Upload Images</label>
                    <div className="upload-area">
                      <div className="upload-icon">📷</div>
                      <p className="upload-text">Drag and drop images here or click to browse</p>
                      <button 
                        type="button"
                        className="upload-button"
                      >
                        Browse Files
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="action-button"
                    style={{ width: '100%', marginTop: '24px' }}
                  >
                    Post Ad
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'saved' && (
            <div>
              <h1 className="page-title">Saved Ads</h1>
              <div className="activity-card">
                <div className="empty-state">
                  <div className="empty-icon">
                    <span>❤️</span>
                  </div>
                  <p className="empty-text">You haven't saved any ads yet</p>
                  <button 
                    onClick={() => router.push('/')}
                    className="action-button"
                  >
                    Browse Ads
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h1 className="page-title">Account Settings</h1>
              <div className="settings-card">
                <div className="user-profile">
                  <div className="profile-avatar">
                    {user.photoURL ? (
                      <Image 
                        src={user.photoURL} 
                        alt={user.displayName || 'User'} 
                        width={96} 
                        height={96}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    ) : (
                      user.displayName?.charAt(0) || 'U'
                    )}
                  </div>
                  <div className="profile-info">
                    <h2 className="profile-name">{user.displayName}</h2>
                    <p className="profile-email">{user.email}</p>
                    <p className="profile-meta">Account created with Google</p>
                  </div>
                </div>
                
                <div className="settings-section">
                  <h3 className="settings-title">Notification Settings</h3>
                  <div className="settings-option">
                    <label className="settings-label">
                      <input type="checkbox" className="settings-checkbox" />
                      <span>Email notifications for new messages</span>
                    </label>
                  </div>
                  <div className="settings-option">
                    <label className="settings-label">
                      <input type="checkbox" className="settings-checkbox" />
                      <span>Email notifications for ad expiry</span>
                    </label>
                  </div>
                </div>
                
                <div className="settings-section">
                  <h3 className="settings-title">Privacy Settings</h3>
                  <div className="settings-option">
                    <label className="settings-label">
                      <input type="checkbox" className="settings-checkbox" />
                      <span>Show my contact information in ads</span>
                    </label>
                  </div>
                  <div className="settings-option">
                    <label className="settings-label">
                      <input type="checkbox" className="settings-checkbox" />
                      <span>Allow others to message me</span>
                    </label>
                  </div>
                </div>
                
                <div className="danger-zone">
                  <button 
                    onClick={handleSignOut}
                    className="danger-button"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 