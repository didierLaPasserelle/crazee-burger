import { Link } from "react-router-dom";

export default function NavbarRightSide({ username }) {
  return (
    <div className="right-side">
                right
        <h1>Hello {username}</h1>
        <Link to="/">
            <button>Déconnexion</button>
        </Link>
    </div>  )
}
