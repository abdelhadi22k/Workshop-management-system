import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { ActivityInfo } from './components/ActivityInfo';
import { CurrentWorkflow } from './components/CurrentWorkflow';
import { ProblemStatement } from './components/ProblemStatement';
import { Solutions } from './components/Solutions';
import { TechSpecs } from './components/TechSpecs';
import { Timeline } from './components/Timeline';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';
import { ProgressBar } from './components/ProgressBar';
import { Header } from './components/Header';

function App() {
  const [user, setUser] = useState<string | null>(null);
  const [likedFeatures, setLikedFeatures] = useState<string[]>([]);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('acos_user');
    const savedLikes = JSON.parse(localStorage.getItem('acos_likes') || '[]');
    
    if (savedUser) {
      setUser(savedUser);
    }
    setLikedFeatures(savedLikes);
  }, []);

  const handleLogin = (name: string) => {
    setUser(name);
    localStorage.setItem('acos_user', name);
  };

  const handleLogout = () => {
    setUser(null);
    setLikedFeatures([]); // Clear local state
    localStorage.removeItem('acos_user');
    // Note: We keep 'acos_likes' in localStorage so they persist if they log back in? 
    // For this simple demo, we can just leave them or clear them. Let's leave them in LS but clear UI.
  };

  const toggleLike = (feature: string) => {
    let newLikes;
    if (likedFeatures.includes(feature)) {
        newLikes = likedFeatures.filter(f => f !== feature);
    } else {
        newLikes = [...likedFeatures, feature];
    }
    setLikedFeatures(newLikes);
    localStorage.setItem('acos_likes', JSON.stringify(newLikes));
  };

  return (
    <main className="relative min-h-screen bg-[#1a1f36] print:bg-white overflow-x-hidden">
      <ProgressBar />
      <Header 
        user={user} 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
        likesCount={likedFeatures.length} 
      />
      
      <Hero />
      <Overview />
      <ActivityInfo />
      <CurrentWorkflow />
      <ProblemStatement />
      <Solutions user={user} likedFeatures={likedFeatures} toggleLike={toggleLike} />
      <TechSpecs />
      <Timeline />
      <Benefits />
      <Footer />
    </main>
  );
}

export default App;