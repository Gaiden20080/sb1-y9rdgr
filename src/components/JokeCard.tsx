import React, { useState } from 'react';
import { DadJoke } from '../types';

interface JokeCardProps {
  joke: DadJoke;
}

export const JokeCard: React.FC<JokeCardProps> = ({ joke }) => {
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg shadow-md">
      <p className="text-lg font-medium text-gray-800">{joke.setup}</p>
      <button
        onClick={() => setShowPunchline(!showPunchline)}
        className="mt-4 text-purple-600 hover:text-purple-800 font-medium"
      >
        {showPunchline ? "Hide punchline" : "Show punchline"}
      </button>
      {showPunchline && (
        <p className="mt-2 text-lg font-bold text-purple-800">{joke.punchline}</p>
      )}
    </div>
  );
};