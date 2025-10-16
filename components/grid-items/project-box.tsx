import { GridItemInterface } from '@/app/config/site-config';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Star, ExternalLink, Github } from 'lucide-react';

function ProjectBox({item}: {item: GridItemInterface}) {
  return (
    <div className="flex flex-col justify-end w-full h-full overflow-hidden relative">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-900/5 to-neutral-900/90" />
      
      {/* Project Image as Background */}
      <Image
        className="object-cover"
        fill
        src={item.projectImage ?? "/project-images/placeholder.jpg"}
        alt={item.title}
        quality={90}
        priority={false}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/project-images/placeholder.jpg';
        }}
      />
      
      {/* Content container */}
      <div className="relative z-20 p-8">
        {/* Title */}
        <div className="pb-2">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-3xl font-semibold text-white">{item.title}</h2>
            {item.inDevelopment && (
              <span className="px-2 py-1 text-xs font-medium bg-orange-500/90 text-white rounded-full">
                Em desenvolvimento
              </span>
            )}
          </div>
          {item.stars !== undefined && (
            <div className="flex items-center gap-1 text-white/80 mb-4">
              <span className="text-sm">{item.stars}</span>
              <Star size="14" fill="currentColor" />
            </div>
          )}
        </div>
        
        {/* Description */}
        {item.projectDescription && (
          <div className="pb-4">
            <p className="text-sm text-white/90 leading-relaxed">
              {item.projectDescription}
            </p>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex gap-3">
          {item.buttonLink && item.buttonLink !== "#" && (
            <Link
              href={item.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-light bg-white hover:bg-white/80 text-neutral-900 rounded-lg transition-all duration-200"
            >
              <ExternalLink size={12} />
              Ver Projeto
            </Link>
          )}
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-light bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-all duration-200"
          >
            <Github size={12} />
            Código
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox;