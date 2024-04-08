import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd"
import React from "react"
import DraggableListItem from "./DraggableListItem"

export interface ReorderableListItem {
    id: string,
    text: string,
}

interface ReorderableListProps {
    data: ReorderableListItem[],
    handleChange: (startIndex: number, endIndex: number) => void,
    removalHandler?: (id: string) => void,
}

const ReorderableList = ({ data, handleChange, removalHandler }: ReorderableListProps) => {
    const onDragStart = () => {
        if (window.navigator.vibrate) {
            window.navigator.vibrate(100)
        }
    }

    const onDragEnd = (result: DropResult) => {
        // Dropped outside the droppable area.
        if (!result.destination) {
            return
        }

        if (result.destination.index === result.source.index) {
            return
        }

        handleChange(result.source.index, result.destination.index)
    }

    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, _) => (
                    <div ref={provided.innerRef} style={{ display: 'grid', gap: '5px' }}>
                        {data.map((item, index) => (
                            <DraggableListItem id={item.id} index={index} key={`draggable-${index}`} text={item.text} removalHandler={removalHandler} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default ReorderableList
