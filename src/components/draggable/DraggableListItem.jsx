import React from 'react'
import { Draggable } from "@hello-pangea/dnd"

const DraggableListItem = ({ id, index, text, removalHandler }) => {
    const getItemStyle = (
        isDragging,
        draggableStyle
    ) => ({
        ...draggableStyle,
        ...(isDragging && {
            background: "#ededed",
        })
    })

    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                >
                    <span>{text}</span>
                    {removalHandler && (
                        <button onClick={() => removalHandler(id)}>Remove</button>
                    )}
                </div>
            )}
        </Draggable>
    )
}

export default DraggableListItem