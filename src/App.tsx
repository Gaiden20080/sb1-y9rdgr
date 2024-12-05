import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ResourceSection } from './components/ResourceSection';
import { JokeSection } from './components/JokeSection';
import { Footer } from './components/Footer';
import { dadJokes } from './data/jokes';

function App() {
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  const nextJoke = () => {
    setCurrentJokeIndex((prev) => (prev + 1) % dadJokes.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Hero />
        <Features />
        <ResourceSection />
        <JokeSection 
          currentJokeIndex={currentJokeIndex}
          onNextJoke={nextJoke}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;