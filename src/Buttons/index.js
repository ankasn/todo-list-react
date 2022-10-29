import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="header__buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="header__button">
                    {hideDoneTasks ? "Pokaż " : "Ukryj "}
                    ukończone
                </button>
                <button
                    className="header__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div >
);

export default Buttons;