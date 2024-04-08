import { useState } from 'react'
import './App.css'

import ReorderableList from './components/draggable/ReorderableList'
import { reorder } from './components/draggable/reorder'

function App() {
  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    setItems([...items, { id: crypto.randomUUID(), text: itemName }])
  }

  const handleOrderChange = (startIndex, endIndex) => {
      const newItemsData = reorder(items, startIndex, endIndex)
      setItems(newItemsData)
  }

  const removeItem = (itemId) => {
      const filtered = items.filter(item => item.id !== itemId)
      setItems(filtered)
  }

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        const itemName = e.target.elements.itemName.value.trim();
        if (itemName) {
          addItem(itemName);
          e.target.reset();
        }
      }} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input name="itemName" placeholder="Enter item name" style={{ padding: '0.5rem' }} autoComplete="off" />
        <button type="submit" style={{ padding: '0.5rem' }}>Add Item</button>
      </form>

      
      <ReorderableList data={
          items.map(item => ({
              id: item.id,
              text: item.text,
          }))
      } handleChange={handleOrderChange} removalHandler={removeItem} />

      <p>Items state: [{items.map(item => item.text).join(', ')}]</p>
    </>
  )
}

export default App
