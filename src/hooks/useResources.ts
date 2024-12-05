import { useState, useEffect } from 'react';
import { Resource } from '../types';
import { learningResources } from '../data/resources';

export const useResources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setResources(learningResources);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load resources');
      setIsLoading(false);
    }
  }, []);

  return { resources, isLoading, error };
};