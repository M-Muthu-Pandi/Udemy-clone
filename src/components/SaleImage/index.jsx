import saleImage from '../Assets/images/Sale Image.png';

const SaleImage = () => {
    return (
        <section class="sale-image">
            <img src={saleImage} alt="Sale" />
            <div class="sale-image__offer">
                <h2>Udemy Flash Sale! 24 hours to save.</h2>
                <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn.</p>
            </div>
        </section>
    )
}

export default SaleImage;