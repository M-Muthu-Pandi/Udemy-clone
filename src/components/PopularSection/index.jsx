import imgone from '../Assets/images/c1.jpg';
import imgtwo from '../Assets/images/c2.jpg';
import imgthree from '../Assets/images/c3.jpg';
import imgfour from '../Assets/images/c4.jpg';
import imgfive from '../Assets/images/c5.jpg';
import imgsix from '../Assets/images/c6.jpg';
import imgseven from '../Assets/images/c7.jpg';
import imgeight from '../Assets/images/c8.jpeg';

const PopularSection = ()=> {
    return (
        <section class="popular">
        <h1>Most Popular</h1>
        <p>Pick the best fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={imgone} alt="course 1" />
                <h3>2024 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 <span class="course-card__rating">★★★★☆</span> <span class="course-card__views">(998)</span>
                </p>
                <p>699 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={imgtwo} alt="course 2" />
                <h3>Web Development Bootcamp 2024</h3>
                <p>Nick Thomas</p>
                <p>4.3 <span class="course-card__rating">★★★★☆</span> <span class="course-card__views">(1,468)</span>
                </p>
                <p>449 <del>1499</del></p>
            </div>
            <div class="course-card">
                <img src={imgthree} alt="course 3" />
                <h3>Basic to Advance Programming</h3>
                <p>Tabitha Jim</p>
                <p>3.9 <span class="course-card__rating">★★★☆☆</span> <span class="course-card__views">(1,528)</span>
                </p>
                <p>549 <del>1699</del></p>
            </div>
            <div class="course-card">
                <img src={imgfour} alt="course 4" />
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Boyd James</p>
                <p>4.2 <span class="course-card__rating">★★★★☆</span> <span class="course-card__views">(5,321)</span>
                </p>
                <p>499 <del>1599</del></p>
            </div>
            <div class="course-card">
                <img src={imgfive} alt="course 5" />
                <h3>Web Development Full Course</h3>
                <p>Victor Franklin</p>
                <p>3.8 <span class="course-card__rating">★★★☆☆</span> <span class="course-card__views">(1,468)</span>
                </p>
                <p>599 <del>1599</del></p>
            </div>
            <div class="course-card">
                <img src={imgsix} alt="course 6" />
                <h3>Master UI/UX Designing</h3>
                <p>Col Steele</p>
                <p>4.4 <span class="course-card__rating">★★★★☆</span> <span class="course-card__views">(5,321)</span>
                </p>
                <p>649 <del>1699</del></p>
            </div>
            <div class="course-card">
                <img src={imgseven} alt="course 7" />
                <h3>2024 Python Data Visualisation</h3>
                <p>Ethan James</p>
                <p>4.1 <span class="course-card__rating">★★★★☆</span> <span class="course-card__views">(998)</span>
                </p>
                <p>599 <del>1799</del></p>
            </div>
            <div class="course-card">
                <img src={imgeight} alt="course 8" />
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Agnel John</p>
                <p>4.6 <span class="course-card__rating">★★★☆☆</span> <span class="course-card__views">(1,528)</span>
                </p>
                <p>469 <del>1399</del></p>
            </div>
        </div>
    </section>
    )
}

export default PopularSection;