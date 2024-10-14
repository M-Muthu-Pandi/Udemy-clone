import imgone from '../Assets/images/c1.jpg';
import imgtwo from '../Assets/images/c2.jpg';
import imgthree from '../Assets/images/c3.jpg';
import imgfour from '../Assets/images/c4.jpg';

const Recommended = () => {
    return (
        <section class="recommented">
            <h1>Recommented for you</h1>
            <p>Pick the best fit</p>
            <div class="recommented__container">
                <div class="course-card">
                    <img src={imgone} alt="One" />
                    <h3>2024 Python Data Visualisation Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9 <span class="course-card__rating">★★★★☆</span> <span class="course-card__views">(998)</span></p>
                    <p>699 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={imgtwo} alt="Two" />
                    <h3>Web Development Bootcamp 2024</h3>
                    <p>Nick Thomas</p>
                    <p>4.3 <span class="course-card__rating">★★★★☆</span> <span class="course-card__views">(1,468)</span>
                    </p>
                    <p>449 <del>1499</del></p>
                </div>
                <div class="course-card">
                    <img src={imgthree} alt="Three" />
                    <h3>Basic to Advance Programming with EMC</h3>
                    <p>Tabitha Jim</p>
                    <p>3.9 <span class="course-card__rating">★★★☆☆</span> <span class="course-card__views">(1,528)</span>
                    </p>
                    <p>549 <del>1699</del></p>
                </div>
                <div class="course-card">
                    <img src={imgfour} alt="Four" />
                    <h3>Master UI/UX Designing with Figma</h3>
                    <p>Boyd James</p>
                    <p>4.2 <span class="course-card__rating">★★★★☆</span> <span class="course-card__views">(5,321)</span>
                    </p>
                    <p>499 <del>1599</del></p>
                </div>
            </div>
        </section>
    )
}

export default Recommended;