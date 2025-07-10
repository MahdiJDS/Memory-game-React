import React from "react";

export default function SingleCard({ card, handleChoice, flipped , disabled }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div
            className="group w-40 h-40 [perspective:1000px]"
            onClick={handleClick}
        >
            <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
                <img
                    src={card.src}
                    alt="front"
                    className="absolute w-full h-full rounded-lg shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]"
                />

                <img
                    src="img/cover.png"
                    alt="back"
                    className="absolute w-full h-full rounded-lg shadow-md [backface-visibility:hidden] "
                />
            </div>
        </div>
    );
}
