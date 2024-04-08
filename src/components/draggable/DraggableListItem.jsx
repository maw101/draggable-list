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
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>&#9776;</span>
                        {text}
                    </span>
                    {removalHandler && (
                        <span style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={() => removalHandler(id)}>X</span>
                    )}
                </div>
            )}
        </Draggable>
    )
}

export default DraggableListItem