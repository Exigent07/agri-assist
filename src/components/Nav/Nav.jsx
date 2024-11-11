import './Nav.css';

function Nav({ loggedIn, info }) {
    if (info) {
        return (
            <div className="Nav">
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Assist</li>
                    <li>History</li>
                </ul>
                <div className="nav-logo">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="nav-actions">
                    <select id="lang">
                        <option value="en">English</option>
                        <option value="tam">தமிழ்</option>
                        <option value="mal">മലയാളം</option>
                    </select>
                    <button className="nav-login">Login</button>
                    <button className="nav-register">Register</button>
                </div>
            </div>
        )
    }
}

export default Nav;