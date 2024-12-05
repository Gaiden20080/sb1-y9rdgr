import React from 'react';
import { ResourceCard } from './ResourceCard';
import { useResources } from '../hooks/useResources';
import { Loader } from 'lucide-react';

export const ResourceSection = () => {
  const { resources, isLoading, error } = useResources();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Learning Resources</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>
    </section>
  );
};