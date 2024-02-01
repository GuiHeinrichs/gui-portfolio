import { GridItemInterface } from '@/app/config/site-config'
import React from 'react'

function BioBox({item}: {item: GridItemInterface}) {
  return (
    <div>
      {/* Content Container */}
      <div>
        {/* Title */}
        <div className="text-base @md:text-xl">{ item.title }</div>
        {/* Username */}
        <a href={item.buttonLink} className="text-sm text-neutral-500 hover:text-neutral-400">{ item.username }</a>
        {/* Description */}
        {item.description && (
          <div className="text-md text-neutral-500 line-clamp-4 @lg:line-clamp-none mt-1">
            { item.description }
          </div>
        )
        }
      </div>
    </div>
  )
}

export default BioBox;