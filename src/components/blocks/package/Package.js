import s from './Package.module.scss';
import first from './../../../assets/img/package/first.svg';
import first1 from './../../../assets/img/package/first.svg';
import face from './../../../assets/img/package/face.svg';
import fly from './../../../assets/img/package/fly.svg';
import fly1 from './../../../assets/img/package/fly1.svg';
import kiss from './../../../assets/img/package/fly1.svg';
import kiss2 from './../../../assets/img/package/kiss2.svg';
import kiss3 from './../../../assets/img/package/kiss3.svg';


function Package() {
    return (

        <div>
            <h2 className={s.packageTitle}>Фотографии пакета</h2>
            <div className={s.packageImgBlock}>
                <img className={s.packageImg} src={first} alt="" />
                <img className={s.packageImg} src={first1} alt="" />
                <img className={s.packageImg} src={face} alt="" />
                <img className={s.packageImg} src={fly} alt="" />
                <img className={s.packageImg} src={fly1} alt="" />
                <img className={s.packageImg} src={kiss} alt="" />
                <img className={s.packageImg} src={kiss2} alt="" />
                <img className={s.packageImg} src={kiss3} alt="" />
            </div>
            <span className={s.packageImgFoto}>Показать все фото</span>
        </div>

    );
}

export default Package;