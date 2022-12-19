import { Item } from '../type'

export const NormalList = ({ items }: { items: Item[] }) => {
  return (
    <div
      style={{
        height: `400px`,
        overflow: 'auto',
      }}
    >
      {items.map((item) => (
        <div key={item.id}>{JSON.stringify(item)}</div>
      ))}
    </div>
  )
}
