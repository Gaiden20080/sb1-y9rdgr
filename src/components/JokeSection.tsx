import React from 'react';
import { JokeCard } from './JokeCard';
import { dadJokes } from '../data/jokes';

interface JokeSectionProps {
  currentJokeIndex: number;
  onNextJoke: () => void;
}

export const JokeSection: React.FC<JokeSectionProps> = ({ 
  currentJokeIndex, 
  onNextJoke 
}) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Need a Break?</h2>
      <div className="max-w-2xl mx-auto">
        <JokeCard joke={dadJokes[currentJokeIndex]} />
        <button
          onClick={onNextJoke}
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mx-auto block"
        >
          Next Joke
        </button>
      </div>
    </section>
  );
};