import { Link } from "react-router-dom/cjs/react-router-dom";

export const NoMatch = () => {
    return (
        <>
            <h1>404 not found</h1>
            <button className="btn btn-primary" style={{ 'margin-top': '50px' }}>
                <Link to="/"
                    style={{ 'color': "white", 'text-decoration': 'none' }}>
                    Return home page
                </Link>
            </button>
        </>
    )
}