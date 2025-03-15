"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Placeholder from "../../components/Placeholder";
import { adData, Ad } from "../../data/ads";

export default function AdDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [ad, setAd] = useState<Ad | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // In a real app, you would fetch the ad data from an API
    const adId = Number(params.id);
    const foundAd = adData.find(ad => ad.id === adId);
    
    if (foundAd) {
      setAd(foundAd);
      setLoading(false);
    } else {
      // If ad not found, redirect to home page
      router.push('/');
    }
  }, [params.id, router]);

  const handlePrevImage = () => {
    if (!ad || !ad.images || ad.images.length === 0) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? ad.images!.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    if (!ad || !ad.images || ad.images.length === 0) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === ad.images!.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-lg">Loading ad details...</p>
        </div>
      </div>
    );
  }

  if (!ad) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ad Not Found</h2>
          <p className="mb-6">The ad you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={handleGoBack}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header with back button */}
      <header className="header">
        <button 
          className="back-btn flex items-center text-white"
          onClick={handleGoBack}
        >
          <span className="mr-2">←</span> Back
        </button>
        <div className="logo-container">
          <Placeholder width={40} height={40} />
          <h2>Hela-Lanka Ads</h2>
        </div>
      </header>

      <div className="max-w-4xl mx-auto ad-detail-container py-8">
        {/* Ad Type Badge */}
        <div className="mb-4">
          <span className="ad-label inline-block">{ad.type}</span>
        </div>

        {/* Ad Title */}
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-middle)] to-[var(--gradient-end)] bg-clip-text text-transparent">{ad.title}</h1>

        {/* Image Gallery */}
        <div className="image-gallery relative mb-8 rounded-xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border-color)]">
          <div className="aspect-video relative">
            {ad.images && ad.images.length > 0 ? (
              <div className="w-full h-full relative animate-fadeIn image-shine-container">
                <Image 
                  src={ad.images[currentImageIndex]} 
                  alt={ad.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  unoptimized
                  className="transition-all duration-300 hover:scale-105 ad-image"
                />
              </div>
            ) : (
              <div className="w-full h-full animate-fadeIn image-shine-container">
                <Placeholder width="100%" height="100%" className="w-full h-full" />
              </div>
            )}
          </div>
          
          {ad.images && ad.images.length > 1 && (
            <>
              <button 
                onClick={handlePrevImage}
                className="gallery-nav-btn prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                ←
              </button>
              <button 
                onClick={handleNextImage}
                className="gallery-nav-btn next absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                →
              </button>
              <div className="gallery-dots absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {ad.images.map((_, index) => (
                  <button 
                    key={index}
                    className={`gallery-dot w-3 h-3 rounded-full ${index === currentImageIndex ? 'active bg-white' : 'bg-white/50'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Ad Details */}
        <div className="ad-detail-section bg-[var(--card-bg)] rounded-xl p-6 mb-6 border border-[var(--border-color)] shadow-lg">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">{ad.fullDescription}</p>
          </div>

          <div className="ad-detail-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Details</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Location:</span>
                  <span className="text-[var(--foreground)] opacity-90">{ad.location}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Posted:</span>
                  <span className="text-[var(--foreground)] opacity-90">{ad.time}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Views:</span>
                  <span className="text-[var(--foreground)] opacity-90">{ad.views}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Likes:</span>
                  <span className="text-[var(--foreground)] opacity-90">{ad.likes}</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-[var(--foreground)] opacity-90">{ad.contact}</span>
                </div>
                <button className="contact-button call-button w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                  Call Now
                </button>
                <button className="contact-button whatsapp-button w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Ads */}
        <div className="mt-12">
          <h2 className="similar-ads-title text-2xl font-bold mb-8">Similar Ads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {adData.filter(relatedAd => relatedAd.id !== ad?.id).slice(0, 2).map(relatedAd => (
              <div 
                key={relatedAd.id} 
                className="similar-ad-card ad-card cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                onClick={() => router.push(`/ad/${relatedAd.id}`)}
              >
                <span className="ad-label">{relatedAd.type}</span>
                <div className="ad-content">
                  {relatedAd.images && relatedAd.images.length > 0 ? (
                    <div className="relative w-[120px] h-[120px] rounded-md overflow-hidden animate-fadeIn image-shine-container">
                      <Image 
                        src={relatedAd.images[0]} 
                        alt={relatedAd.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        unoptimized
                        className="transition-all duration-300 hover:scale-105 ad-image"
                      />
                    </div>
                  ) : (
                    <div className="animate-fadeIn image-shine-container">
                      <Placeholder width={120} height={120} />
                    </div>
                  )}
                  <div className="ad-details">
                    <div className="ad-title">{relatedAd.title}</div>
                    <div className="ad-description">{relatedAd.description}</div>
                    <div className="ad-meta">
                      <div className="likes">👍 {relatedAd.likes} Likes</div>
                      <div className="views">{relatedAd.views} Views</div>
                      <div className="time">{relatedAd.time}</div>
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