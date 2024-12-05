import React from 'react';
import { Brain, Wrench, Lightbulb } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const features = [
    {
      Icon: Brain,
      title: 'Learn',
      description: 'Access carefully curated learning resources from the best educators.'
    },
    {
      Icon: Wrench,
      title: 'Tools',
      description: 'Get started with the essential development tools used by professionals.'
    },
    {
      Icon: Lightbulb,
      title: 'Practice',
      description: 'Apply your knowledge with practical exercises and projects.'
    }
  ];

  return (
    <section className="grid md:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
};