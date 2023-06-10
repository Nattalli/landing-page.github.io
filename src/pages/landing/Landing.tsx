import './Landing.scss';
import FirstImage from '../../assets/img/image.jpg';
import SecondImage from '../../assets/img/QR_code.png'
import FirstPresent from '../../assets/img/prezent-1.png'
import SecondPresent from '../../assets/img/prezent-2.png'
import ThirdPresent from '../../assets/img/prezent-3.png'
import FourthPresent from '../../assets/img/prezent-4.png'
import FifthPresent from '../../assets/img/prezent-5.png'
import FifthImage from '../../assets/img/fifth-image.png'
import FirstPartner from '../../assets/img/partner-1.png'
import SecondPartner from '../../assets/img/partner-2.png'
import ThirdPartner from '../../assets/img/partner-3.png'
import FourthPartner from '../../assets/img/partner-4.png'
import FifthPartner from '../../assets/img/partner-5.png'
import SixthPartner from '../../assets/img/partner-6.png'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import { icon } from 'leaflet';


import {
    aboutCompetitionFirstPart,
    aboutCompetitionSecondPart,
    aboutCompetitionThirdPart,
    aboutSashaFifthPart,
    aboutSashaFirstPart,
    aboutSashaFourthPart,
    aboutSashaSecondPart,
    aboutSashaThirdPart,
    aboutSashaTitle,
    aboutUs,
    aboutUsSecondPart,
    formTitle,
    mapText,
    participationInTheCompetitionFirstStep,
    participationInTheCompetitionSecondStep,
    participationInTheCompetitionThirdStep,
    textForm,
    textFormSecond,
    textFormThird
} from "./landingTextConstants";

function SetMapView() {
  const map = useMap();
  map.setView([48.3794, 31.1656], 6);
  map.setMinZoom(5);
  map.setMaxZoom(10);
  return null;
}


const markers: { position: LatLngTuple; title: string }[] = [
  { position: [49.8419, 24.0315], title: "Львів" },
  { position: [50.4501, 30.5234], title: "Київ" },
  { position: [46.4825, 30.7233], title: "Одеса" },
  { position: [46.4825, 30.7233], title: "Чернігів" },
  { position: [51.0378, 31.8881], title: "Ніжин" },
  { position: [50.0716, 31.4502], title: "Переяслав-Хмельницький" },
  { position: [49.4444, 32.0598], title: "Черкаси" },
  { position: [50.3919, 30.3683], title: "Вишневе" },
  { position: [50.5533, 30.2135], title: "Буча" },
  { position: [48.9226, 24.7111], title: "Івано-Франківськ" },
  { position: [48.1509, 25.3800], title: "Мигово" },
  { position: [49.5535, 25.5948], title: "Тернопіль" },
  { position: [50.2547, 28.6587], title: "Житомир" },
  { position: [50.9532, 28.6458], title: "Коростень" },
  { position: [46.9750, 31.9946], title: "Миколаїв" },
  { position: [49.7968, 30.1311], title: "Біла Церква" },
  { position: [48.7494, 30.2214], title: "Умань" },
  { position: [49.3664, 29.6584], title: "Тетіїв" },
  { position: [49.5883, 34.5514], title: "Полтава" },
  { position: [49.9935, 36.2304], title: "Харків" },
  { position: [50.9077, 34.7981], title: "Суми" },
  { position: [46.0663, 30.4528], title: "Затока" },
  { position: [50.7472, 25.3254], title: "Луцьк" },
  { position: [50.9157, 25.2652], title: "Рожище" },
  { position: [49.9762, 27.2264], title: "Гриців" },
  { position: [49.2331, 28.4682], title: "Вінниця" },
  { position: [50.6199, 26.2516], title: "Рівне" },
];

const customMarkerIcon = icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


export default function Landing() {

    const isDesktop = window.innerWidth > 768;

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const sentToGoogleSheet = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzaS8w2NKVSdX5Oux1d7hl2dtfEaY_Km-wj2Uv_TP9AlCKRj_GRhcV-BCRSFiv71VPi/exec';

    const form = document.getElementById('google-sheet-form') as HTMLFormElement;

    form?.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form as HTMLFormElement) })
        .then(response => {
            console.log('Success!', response);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
        });
    });
    };

    const scrollCards = (direction: string, toMove: number) => {
        let container;
        let scrollAmount;
        if (toMove === 1) {
          container = document.querySelector('.cards-second');
          scrollAmount = 313;
        } else {
          container = document.querySelector('.cards');
          scrollAmount = 302;
        }

      let newScrollPosition;
      if (direction === 'left') {
        // @ts-ignore
          newScrollPosition = container.scrollLeft - scrollAmount;
      } else {
        // @ts-ignore
          newScrollPosition = container.scrollLeft + scrollAmount;
      }

      // @ts-ignore
        container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    };

    // @ts-ignore
    // @ts-ignore
    return (
      <div>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

          <div className="block-first">
              <p className="block-first-text-article">
                  {aboutUs}
              </p>
              <p className="block-first-text-main">
                  {aboutUsSecondPart}
              </p>
              <p>
                  <button>
                      <p
                          className="button-text"
                          onClick={() => handleClick("for-students")}
                      >
                          Я школярка або школяр
                      </p>
                  </button>
                  <button>
                      <p
                          className="button-text"
                          onClick={() => handleClick("for-teachers")}
                      >
                          Я вчителька або вчитель
                      </p>
                  </button>
              </p>
              <p className="text-after-button">
                  <p>та хочу взяти участь у конкурсі</p>
                  <p className="text-after-button-second">та хочу залучити учнівство до конкурсу</p>
              </p>
          </div>

          <div className="block-second" id="about-competition">
              <div className="first-block">
                  <h2>Про конкурс</h2>
                  <p className="text-inside-first-block">
                      {aboutCompetitionFirstPart}
                  </p>
                  <p className="text-inside-first-block">
                      {aboutCompetitionSecondPart}
                  </p>
                  <p className="text-inside-first-block">
                      {aboutCompetitionThirdPart}
                  </p>
              </div>
              <div className="second-block">
                  <img className="img-first" src={FirstImage}  alt="Block image"/>
              </div>
          </div>

          <div className="block-third" id="for-students">
              <p className="block-first-text-article third-block-main-text">
                  ЯК УЗЯТИ УЧАСТЬ В УРОЦІ-ОПИТУВАННІ ПРО ПРАВА ДІВЧАТ ТА ВИГРАТИ ПОДАРУНОК?
              </p>

              {isDesktop ? (

              <div className="row">
                  <div className="column">
                      <div className="box-first">
                          <div className="row">
                              <div className="column">
                                  <div className="box">
                                      <div className="row">
                                      <p className="numbers">1.</p>
                                      <a href="https://t.me/SashaLookingForAnswers_bot" target="_blank" rel="noreferrer">
                                        <p className="steps steps-first">
                                            {participationInTheCompetitionFirstStep}
                                        </p>
                                      </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="column">
                                  <div className="box">
                                      <img className="img-second" src={SecondImage} alt="QR code"/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="box">
                          <div className="row">
                              <div className="column">
                                  <div className="box">
                                      <div className="row">
                                          <p className="numbers">2.</p>
                                          <p className="steps steps-second">
                                              {participationInTheCompetitionSecondStep}
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="box">
                          <div className="row">
                              <div className="column">
                                  <div className="box">
                                      <div className="row">
                                          <p className="numbers">3.</p>
                                          <p className="steps steps-third">{participationInTheCompetitionThirdStep}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              ) :
              <div>
                  <div className="numbers">1.</div>
                  <a href="https://t.me/SashaLookingForAnswers_bot" target="_blank" rel="noreferrer">
                      <p className="steps steps-first">
                          {participationInTheCompetitionFirstStep}
                      </p>
                  </a>
                  <div className="box">
                      <img className="img-second" src={SecondImage} alt="QR code"/>
                  </div>

                  <div className="numbers">2.</div>
                  <p className="steps steps-second">
                      {participationInTheCompetitionSecondStep}
                  </p>

                  <div className="numbers">3.</div>
                  <div className="box">
                      <p className="steps steps-third">{participationInTheCompetitionThirdStep}</p>
                  </div>

              </div>

              }
          </div>

          <div className="block-fourth">
              <p className="fourth-block-text">
                  УЧАСНИЦІ ТА УЧАСНИКИ УРОКУ- ОПИТУВАННЯ ЗМОЖУТЬ ВИГРАТИ:
              </p>
            <div className="cards-container">
              <button className="arrow-left-second" onClick={() => scrollCards('left', 2)}>&lt;</button>              <div className="cards">
                  <div className="card">
                      <img src={FirstPresent} alt="Зображення 1" className="card-image"/>
                          <p className="card-text">Набір шкарпеток від українського бренду&nbsp;
                              <a href="https://dodosocks.com/slava_zsu/" target="_blank" rel="noreferrer">
                                  DODO socks
                              </a>
                          </p>
                  </div>
                  <div className="card">
                      <img src={SecondPresent} alt="Зображення 2" className="card-image"/>
                          <p className="card-text">Книги від видавництва&nbsp;
                              <a href="https://www.creativewomenpublishing.com.ua/" target="_blank" rel="noreferrer">
                                  Creative woman publishing
                              </a>
                          </p>
                  </div>
                  <div className="card">
                      <img src={ThirdPresent} alt="Зображення 3" className="card-image"/>
                          <p className="card-text">Листівку або значок від українського ілюстратора&nbsp;
                              <a href="https://www.instagram.com/unicornandwine/" target="_blank" rel="noreferrer" className="text-together">
                                  Олександра Грехова
                              </a>
                          </p>
                  </div>
                  <div className="card">
                      <img src={FourthPresent} alt="Зображення 4" className="card-image"/>
                          <p className="card-text">Сумку від українського бренду&nbsp;
                              <a href="https://www.instagram.com/horondi/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                                  HORONDI
                              </a>
                          </p>
                  </div>
                  <div className="card last-card">
                      <img src={FifthPresent} alt="Зображення 5" className="card-image"/>
                          <p className="card-text">Твіллі від українського бренду&nbsp;
                              <a href="https://www.instagram.com/oliz_brand/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                                  OLIZ
                              </a>
                          </p>
                  </div>
                  <div className="cards-inside"></div>
              </div>
              <button className="arrow-right-second" onClick={() => scrollCards('right', 2)}>&gt;</button>
            </div>

              {isDesktop?
                  (<div className="circle-div">
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                  </div>)
                  :
                  (<div className="circle-div">
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                  </div>)
              }
          </div>

          <div>
              <p className="main-text">
                  Чат-бот «Саша шукає відповіді» стартує  <strong>ЩОРОКУ 8 БЕРЕЗНЯ.</strong> Саша чекає на тебе!
              </p>
          </div>

          {isDesktop ? (

              <div className="block-fifth">
                  <div className="fifth-block">
                      <img className="img-fifth" src={FifthImage}  alt="Block image"/>
                  </div>
                  <div className="fifth-block">
                      <p className="new-text">{aboutSashaTitle}</p>
                      <p className="text-inside-fifth-block">
                          {aboutSashaFirstPart}
                      </p>
                      <p className="text-inside-fifth-block">
                          {aboutSashaSecondPart}
                      </p>
                      <p className="text-inside-fifth-block">
                          {aboutSashaThirdPart}
                      </p>
                      <p className="text-inside-fifth-block">
                          {aboutSashaFourthPart}
                      </p>
                      <p className="text-inside-fifth-block">
                          {aboutSashaFifthPart}
                      </p>
                  </div>
              </div>

          ) : (

              <div className="block-fifth">
                  <div className="fifth-block fifth-block-text">
                      <p className="text-inside-fifth-block first-article">
                          {aboutSashaTitle}
                      </p>
                      <p className="text-inside-fifth-block">
                          {aboutSashaFirstPart}
                      </p>
                      <p className="text-inside-fifth-block">
                          {aboutSashaSecondPart}
                      </p>
                      <p className="text-inside-fifth-block">
                          {aboutSashaThirdPart}
                      </p>
                      <p className="text-inside-fifth-block">
                          {aboutSashaFourthPart}
                      </p>
                       <p className="text-inside-fifth-block">
                          {aboutSashaFifthPart}
                      </p>
                  </div>
                  <div className="fifth-block">
                      <img className="img-fifth" src={FifthImage}  alt="Block image"/>
                  </div>
              </div>
          )}


          <div className="block-sixth" id="for-teachers">
              <div>
                  <p className="fourth-block-text sixth-block"><strong>Ви вчителька або вчитель,</strong> і хочете провести у своєму класі
урок про права та можливості дівчат та хлопців у сучасному світі?</p>
              </div>
              <div className="lesson-plan-body">
                  <p className="certificate-text">
                      <p className="certificate-text certificate-text-title">{textForm}</p>
                      <p className="certificate-text next-lines">{textFormSecond}</p>
                      <p className="certificate-text next-lines">{textFormThird}</p>
                  </p>

                  <form className="lesson-plan-form" id="google-sheet-form">
                      <label htmlFor="name" className="form-text form-text-first">Ваше ім’я та прізвище</label>
                      <input type="text" id="name" name="Ім'я та прізвище" required/>

                      <label htmlFor="school" className="form-text">Яку школу ви представляєте?</label>
                      <input type="text" id="school" name="Яку школу представляє" required/>

                      <label htmlFor="address" className="form-text">Вкажіть, будь ласка, назву та адресу школи</label>
                      <input type="text" id="address" name="Назва і адреса школи" required/>

                      <label htmlFor="email" className="form-text">Вкажіть вашу електронну адресу, щоб ми надіслали вам план уроку</label>
                      <input type="email" id="email" name="Електронна адреса" required/>

                      <button type="submit" onClick={sentToGoogleSheet}>Відправити</button>
                  </form>
              </div>
          </div>

          <div className="block-seventh" id="map">
              <div className="seventh-first-block">
                  <h2 className="mapArticle">Карта інноваторів та інноваторок</h2>
                  <p className="text-inside-first-block text-inside-seventh-block">
                      {mapText}
                  </p>
              </div>
              <div className="seventh-second-block">
                  <MapContainer
                      className="img-seventh"
                      style={{ height: '100%', width: '100%', borderRadius: '40px' }}
                    >
                      <SetMapView />
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {markers.map((marker, index) => (
                        <Marker
                            icon={customMarkerIcon}
                            key={`marker-${index}`}
                            position={marker.position}>
                          <Popup>{marker.title}</Popup>
                        </Marker>

                      ))}
                    </MapContainer>
                  </div>
              </div>

          <div className="block-eight">
              <p className="fourth-block-text sixth-block">
                  ПАРТНЕРИ КОНКУРСУ У 2023 РОЦІ:
              </p>
              <div className="cards-second-container">
    <button className="arrow-left" onClick={() => scrollCards('left', 1)}>&lt;</button>
              <div className="cards-second">
                  <div className="card-second">
                      <a className=".a-customized" href="https://www.instagram.com/horondi/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                          <img src={FirstPartner} alt="Зображення 1" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second">
                      <a className=".a-customized" href="https://dodosocks.com/slava_zsu/" target="_blank" rel="noreferrer">
                          <img src={SecondPartner} alt="Зображення 2" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second">
                      <a className=".a-customized" href="https://www.creativewomenpublishing.com.ua/" target="_blank" rel="noreferrer">
                          <img src={ThirdPartner} alt="Зображення 3" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second">
                      <a href="https://www.dari-mc.com/" target="_blank" rel="noreferrer" className="text-together">
                          <img src={FourthPartner} alt="Зображення 4" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second">
                      <a href="https://www.instagram.com/unicornandwine/" target="_blank" rel="noreferrer" className="text-together">
                          <img src={FifthPartner} alt="Зображення 5" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second last-card-second">
                      <a className=".a-customized" href="https://www.instagram.com/oliz_brand/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                          <img src={SixthPartner} alt="Зображення 6" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="cards-inside-second"></div>
              </div>
<button className="arrow-right" onClick={() => scrollCards('right', 1)}>&gt;</button>
  </div>
              {isDesktop?
                  null
                  :
                  (<div className="circle-div">
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                      <span className="circle"></span>
                  </div>)
              }
          </div>

      </div>
  );
}
