"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import Placeholder from '../components/Placeholder';

export default function LoginPage() {
  const { user, signInWithGoogle, loading } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Redirect if user is already logged in
  useEffect(() => {
    if (user && !loading) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder for future email/password authentication
    setError('Email/password login will be implemented in a future update.');
  };

  return (
    <>
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {loading ? (
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#121212' 
        }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            borderTop: '3px solid #a855f7',
            borderRight: '3px solid transparent',
            animation: 'spin 1s linear infinite' 
          }}></div>
        </div>
      ) : (
        <div style={{ 
          minHeight: '100vh', 
          backgroundColor: '#121212', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {/* Logo */}
          <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
            <Placeholder width={48} height={48} />
          </div>

          {/* Login Card */}
          <div style={{ 
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#1a1a1a',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* Header */}
            <div style={{ padding: '24px 20px', textAlign: 'center' }}>
              <h1 style={{ 
                fontSize: '28px', 
                fontWeight: 'bold', 
                marginBottom: '12px',
                background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Welcome Back
              </h1>
              <p style={{ color: '#aaa', fontSize: '14px' }}>
                Sign in to access your account and post ads
              </p>
            </div>

            {error && (
              <div style={{ 
                margin: '0 20px 16px', 
                padding: '10px', 
                backgroundColor: 'rgba(220, 38, 38, 0.1)', 
                color: '#f87171',
                borderRadius: '8px',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleEmailLogin} style={{ padding: '0 20px 20px' }}>
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <label style={{ display: 'flex', alignItems: 'center', color: '#aaa', fontSize: '14px' }}>
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    style={{ marginRight: '8px' }}
                  />
                  Remember me
                </label>
                <a 
                  href="#" 
                  style={{ 
                    color: '#8b5cf6', 
                    fontSize: '14px',
                    textDecoration: 'none'
                  }}
                >
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div style={{ 
              padding: '0 20px 20px',
              position: 'relative',
              textAlign: 'center'
            }}>
              <div style={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
                position: 'absolute',
                top: '50%',
                left: '20px',
                right: '20px'
              }}></div>
              <span style={{ 
                position: 'relative',
                backgroundColor: '#1a1a1a',
                padding: '0 10px',
                color: '#aaa',
                fontSize: '14px'
              }}>
                Or continue with
              </span>
            </div>

            {/* Google Login Button */}
            <div style={{ padding: '0 20px 20px' }}>
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                style={{ 
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1
                }}>
                  <div style={{ marginRight: '12px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <span style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>
                    {isLoading ? 'Signing in...' : 'Sign in with Google'}
                  </span>
                </div>
              </button>
            </div>

            {/* Footer */}
            <div style={{ padding: '0 20px 24px', textAlign: 'center' }}>
              <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '12px' }}>
                Don't have an account? <a href="#" style={{ color: '#8b5cf6', textDecoration: 'none' }}>Sign up</a>
              </p>
              <p style={{ color: '#aaa', fontSize: '12px' }}>
                By signing in, you agree to our <a href="#" style={{ color: '#8b5cf6', textDecoration: 'none' }}>Terms of Service</a> and <a href="#" style={{ color: '#8b5cf6', textDecoration: 'none' }}>Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 