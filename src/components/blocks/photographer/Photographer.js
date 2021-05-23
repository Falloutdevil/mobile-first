import s from './Photographer.module.scss';
import likeImg from './../../../assets/img/photographer/likeImg.svg';
import avatarPhotographer from './../../../assets/img/photographer/avatarPhotographer.svg';


function Photographer() {
    return (
        <div>
            <div className={s.photographerDataInner}>
                <button className={s.buttonLike}><img src={likeImg} alt="" /></button>
                <img className={s.avatarImg} src={avatarPhotographer} alt="" />
                <span className={s.photographerName}>Марина Иванова</span>
                <span className={s.photographerProfession}>Фотограф</span>
                <a className={s.photographerInfo} href="#">Показать больше информации о фотографе</a>
                <span className={s.photographerSubTitle}>Об организаторе:</span>
                <p className={s.photographerText}>Всем привет! Я фотограф Мария! И по мимо
                    фотосъемки я так же являюсь
                    членом группы экспертов туристической отрасли, которые хорошо разбираются
                    в маркетинге, операциях
                    и услугах обслуживания клиентов, специализирующихся
                    на совместном использовании
                    и частных турах.

                    <p className={s.photographerTextTwo}>Сначала мы (я и моя команда) изучаем интересы клиентов, а затем
                        придумываем подходящее решение,
                        которое соответствует бюджету и планам клиента.
                        Мы никогда не зависим
                        от субпоставщиков
                        и не свяжемся…</p>
                    <a className={s.photographerLinkOne} href="#">Читать еще</a>
                </p>
                <span className={s.photographerSubTitleTwo}>Что я предоставлю:</span>
                <p className={s.photographerTextThree}>Встречу вас на машине после длительного перелёта.
                    Качественный подбор места
                    и локации для вашей съемки.
                    При необходимости всегда возможно прерваться
                    на обед/ужин.
                    <p>Более 50 фотографий на выходе
                        с обработкой и замечательные впечатления о Дубае!</p>
                    <a className={s.photographerLinkTwo} href="#">Читать еще</a>
                </p>
            </div>
        </div>
    );
}

export default Photographer;