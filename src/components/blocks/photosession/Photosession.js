import s from './Photosession.module.scss';
import video from './../../../assets/video/videoplayback.webm';
import time from './../../../assets/img/photosession/time.svg';
import camera from './../../../assets/img/photosession/camera.svg';
import pointMap from './../../../assets/img/photosession/pointMap.svg';
import chat from './../../../assets/img/photosession/chat.svg';
import previewPhotosessionVideo from './../../../assets/img/photosession/previewPhotosessionVideo.svg';


function Photosession() {
    return (
        <div className={s.photosession}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Фотосессия в вертолете</h2>
                <video width="290px" height="197px" src={video} poster={previewPhotosessionVideo}> </video>
                <p className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш
                    замечательный фотограф
                    запечатлит лучшие моменты!</p>
            </div>
            <div className={s.plan}>
                <div className={s.planItem}>
                    <img className={s.planImgTime} src={time} alt="" /><span className={s.planTextTime}>3 часа съемки</span>
                </div>
                <div className={s.planItem}>
                    <img className={s.planImgCamera} src={camera} alt="" /><span className={s.planTextCamera}>Более 50 фотографий</span>
                </div>
                <div className={s.planItem}>
                    <img className={s.planImgPointMap} src={pointMap} alt="" /><span className={s.planTextPointMap}>Москва</span>
                </div>
                <div className={s.planItem}>
                    <img className={s.planImgChat} src={chat} alt="" /><span className={s.planTextChat}>Готовы ответить на любые вопросы</span>
                </div>
            </div>
        </div>

    );
}

export default Photosession;