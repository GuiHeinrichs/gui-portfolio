import { GridItemInterface } from '@/app/config/site-config'
import Icon from '../icon'
import Button from '../button'
import React from 'react'
import Link from 'next/link'

function SocialBox({item}: {item: GridItemInterface}) {
  return (
    <Link href={item.buttonLink ?? ""}>
      {/* Header */}
      <div className="flex items-center justify-between">
        {/* Icon */}
        <div>
          <Icon type={item.icon ?? ""} color={item.color}/>
        </div>
        {/* Button */}
        {item.layout === "2x2" && (
        <Button 
            text={item.buttonTitle ?? ""} 
            secondaryText={item.buttonSecondaryTitle} 
            color={item.color}
          />
        )}
      </div>
      {/* Content Container */}
      <div className="mt-2">
        {/* Title */}
        <div className="text-lg font-semibold">{item.title}</div>
        {/* Username */}
        <div className="text-sm text-neutral-500">{item.username}</div>
        {/* Description */}
        {item.description && (
          <div className="text-sm text-neutral-500 line-clamp-3 mt-1">
            {item.description}
          </div>
        )
        }
      </div>
      {/* button */}
      <div className="mt-2">
        {item.layout === "1x2" && (
          <Button 
            text={item.buttonTitle ?? ""} 
            secondaryText={item.buttonSecondaryTitle} 
            color={item.color}
          />
        )}
      </div>
    </Link>
  )
}

export default SocialBox;