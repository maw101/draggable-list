import React from 'react'
import { Draggable } from "@hello-pangea/dnd"

const DraggableListItem = ({ id, index, text, removalHandler }) => {
    const getItemStyle = (
        isDragging,
        draggableStyle
    ) => ({
        ...draggableStyle,
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
        padding: "5px",
        display: "flex",
        gap: "0.75rem",
        alignItems: 'center',
        justifyContent: 'center',
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