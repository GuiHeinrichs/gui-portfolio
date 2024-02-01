import { GridItemInterface } from '@/app/config/site-config';
import Link from 'next/link';
import React from 'react'
import Icon from '../icon';
import { Star } from 'lucide-react';

function ProjectBox({item}: {item: GridItemInterface}) {
  return (
    <Link className="flex items-center gap-3" key={item.buttonLink} href={item.buttonLink ?? ""}>
      {/* Icon */}
      <Icon type={ item.icon ?? "" } color={ item.color }/>
      {/* Title */}
      <div className="w-full text-base @md:text-lg font-semibold">{item.title}</div>
        {/* Stars */}
      <span className="flex items-center gap-1">
        <div className="mt-[1px]">{ item.stars }</div>
        <Star size="16" fill="currentColor"/>
      </span>
    </Link>
  )
}

export default ProjectBox;