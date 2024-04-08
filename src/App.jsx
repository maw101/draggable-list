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
        addItem(e.target.elements.itemName.value);
        e.target.reset();
      }}>
        <input name="itemName" placeholder="Enter item name" />
        <button type="submit">Add Item</button>
      </form>
      
      <ReorderableList data={
          items.map(item => ({
              id: item.id,
              text: item.text,
          }))
      } handleChange={handleOrderChange} removalHandler={removeItem} />
    </>
  )
}

export default App
