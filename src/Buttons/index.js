import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="header__buttons">
            <button className="header__button">
                {hideDoneTasks ? "Pokaż " : "Ukryj "}
                ukończone
            </button>
            <button className="header__button"
                disabled={tasks.every(({ done }) => done )}
                >
                Ukończ wszystkie
            </button>
        </div > 
    )
);

export default Buttons;