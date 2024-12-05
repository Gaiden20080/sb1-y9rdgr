import React from 'react';
import { ExternalLink, Video, BookOpen, Wrench } from 'lucide-react';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'article':
        return <BookOpen className="w-5 h-5" />;
      case 'tool':
        return <Wrench className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          {getIcon()}
          <h3 className="text-lg font-semibold">{resource.title}</h3>
        </div>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <p className="mt-2 text-gray-600">{resource.description}</p>
      <div className="mt-4">
        <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
          {resource.category}
        </span>
      </div>
    </div>
  );
};