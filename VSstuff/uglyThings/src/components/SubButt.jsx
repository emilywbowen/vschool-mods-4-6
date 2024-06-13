import React, { createContext, useState } from 'react';


export default function SubButt() {
    return (
        <>
            <button
            className="subButt"
            onClick={getMemeImage}
            >
                Tithe your Ugly Contribution!
            </button>

            <button
            className="subButt"
            onClick={saveIt}
            >
            {isEditing ? 'Save Changes' : 'Save Meme'}
            </button>
    </>
    )
}