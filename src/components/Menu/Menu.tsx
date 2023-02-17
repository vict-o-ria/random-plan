import { Link } from "react-router-dom"

export const Menu = () => {
    return (
      <div>
        <Link to="/">Random Task</Link>
        <Link to="/list">Task List</Link>
      </div>
    );
}