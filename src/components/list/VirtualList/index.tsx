import { useVirtualizer } from '@tanstack/react-virtual'
import { useRef } from 'react'

import { Item } from '../type'

export const VirtualList = ({ items }: { items: Item[] }) => {
  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 240,
  })

  return (
    <div
      ref={parentRef}
      style={{
        height: `400px`,
        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((item) => (
          <div
            key={item.key}
            ref={rowVirtualizer.measureElement}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${item.size}px`,
              transform: `translateY(${item.start}px)`,
            }}
          >
            {JSON.stringify(items[item.index])}
          </div>
        ))}
      </div>
    </div>
  )
}
