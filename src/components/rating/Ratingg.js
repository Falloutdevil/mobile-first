import s from './Ratingg.module.scss'
import Rating from '@material-ui/lab/Rating';
import imgCup from './../../assets/img/rating/imgCup.svg';


function Ratingg() {

    return (
        <div className={s.ratingg}>
            <img src={imgCup} alt="" />
            <div className={s.wrapperTextRating}>
                <span>Более 50 отзывов с оценкой</span>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} className={s.stars} />
            </div>
        </div>
    );
}

export default Ratingg;
