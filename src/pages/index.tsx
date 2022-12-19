import clsx from 'clsx'
import { useState } from 'react'

import type { NextPage } from 'next'

import ITEMS from '@/assets/items.json'
import { DynamicVirtualList } from '@/components/list/DynamicVirtualList'
import { NormalList } from '@/components/list/NormalList'
import type { Item } from '@/components/list/type'
import { VirtualList } from '@/components/list/VirtualList'

const Top: NextPage = () => {
  const [select, setSelect] =
    useState<'normal' | 'virtual' | 'dynamic-virtual'>('virtual')

  return (
    <div className={clsx('tw-p-8')}>
      <div className={clsx('tw-flex', 'tw-gap-4')}>
        <label>
          <input
            name={'select'}
            type={'radio'}
            value={'virtual'}
            checked={select === 'virtual'}
            onChange={() => setSelect('virtual')}
          />
          Virtual
        </label>
        <label>
          <input
            name={'select'}
            type={'radio'}
            value={'dynamic-virtual'}
            checked={select === 'dynamic-virtual'}
            onChange={() => setSelect('dynamic-virtual')}
          />
          Dynamic Virtual
        </label>
        <label>
          <input
            name={'select'}
            type={'radio'}
            value={'normal'}
            checked={select === 'normal'}
            onChange={() => setSelect('normal')}
          />
          Normal
        </label>
      </div>
      <div>
        {select === 'normal' && <NormalList items={ITEMS as Item[]} />}
        {select === 'virtual' && <VirtualList items={ITEMS as Item[]} />}
        {select === 'dynamic-virtual' && (
          <DynamicVirtualList items={ITEMS as Item[]} />
        )}
      </div>
    </div>
  )
}

export default Top
