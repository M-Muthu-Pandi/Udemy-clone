const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="navbar__s1">
                <h1>Udemy</h1>
            </div>
            <div class="navbar__s2">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search anything for here, Tech, Business, Art ..." />
            </div>
            <div class="navbar__s3">
                <p>Trending Courses</p>
                <div class="mylearning">
                    <p>My Learning</p>
                    <div class="mylearning__popup">
                        <p>You did not purchase anything yet.</p>
                    </div>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-bell"></i>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="navbar__s4">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar;