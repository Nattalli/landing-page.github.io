import './Landing.scss';
import FirstImage from '../../assets/img/image.png';
import SecondImage from '../../assets/img/QR_code.png'
import FirstPresent from '../../assets/img/prezent-1.png'
import SecondPresent from '../../assets/img/prezent-2.png'
import ThirdPresent from '../../assets/img/prezent-3.png'
import FourthPresent from '../../assets/img/prezent-4.png'
import FifthPresent from '../../assets/img/prezent-5.png'
import SIXTHPresent from '../../assets/img/prezent-6.png'
import FifthImage from '../../assets/img/fifth-image.png'
import SeventhImage from '../../assets/img/seventh-image.png'
import FirstPartner from '../../assets/img/partner-1.png'
import SecondPartner from '../../assets/img/partner-2.png'
import ThirdPartner from '../../assets/img/partner-3.png'
import FourthPartner from '../../assets/img/partner-4.png'
import FifthPartner from '../../assets/img/partner-5.png'
import SixthPartner from '../../assets/img/partner-6.png'

import {
    aboutCompetitionFirstPart,
    aboutCompetitionSecondPart,
    aboutCompetitionThirdPart, aboutSashaFirstPart, aboutSashaFourthPart, aboutSashaSecondPart, aboutSashaThirdPart,
    aboutUs,
    aboutUsSecondPart,
    formTitle, mapText,
    participationInTheCompetitionFirstStep,
    participationInTheCompetitionSecondStep,
    participationInTheCompetitionThirdStep,
    textForm
} from "./landingTextConstants";


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
    const message = document.getElementById('message');

    form?.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form as HTMLFormElement) })
        .then(response => {
            console.log('Success!', response);
            form.reset();

            if (message) {
                message.innerHTML = "Form submitted successfully!";
                message.style.display = "block";
                setTimeout(() => {
                    message.style.display = "none";
                }, 3000);
            }
        })
        .catch(error => {
            if (message) {
                message.innerHTML = "Error submitting the form.";
                message.style.display = "block";
                setTimeout(() => {
                    message.style.display = "none";
                }, 3000);
            }
        });
    });
    };

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
                          Я школярка або школяр,
                      </p>
                  </button>
                  <button>
                      <p
                          className="button-text"
                          onClick={() => handleClick("for-teachers")}
                      >
                          Я вчителька або вчитель,
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
                  Як взяти участь у конкурсі Та виграти подарунок?
              </p>

              {isDesktop ? (

              <div className="row">
                  <div className="column">
                      <div className="box-first">
                          <div className="row">
                              <div className="column">
                                  <div className="box">
                                      <p className="numbers">1.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="column">
                                  <div className="box">
                                      <a href="https://t.me/SashaLookingForAnswers_bot" target="_blank" rel="noreferrer">
                                        <p className="steps steps-first">
                                            {participationInTheCompetitionFirstStep}
                                        </p>
                                      </a>
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
                                      <p className="numbers">2.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="column">
                                  <div className="box">
                                      <p className="steps steps-second">
                                          {participationInTheCompetitionSecondStep}
                                      </p>
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
                                      <p className="numbers">3.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="column">
                                  <div className="box">
                                      <p className="steps steps-third">{participationInTheCompetitionThirdStep}</p>
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
                  Учасники та учасниці конкурсу можуть виграти:
              </p>
              <div className="cards">
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
                  <div className="card">
                      <img src={FifthPresent} alt="Зображення 5" className="card-image"/>
                          <p className="card-text">Твіллі від українського бренду&nbsp;
                              <a href="https://www.instagram.com/oliz_brand/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                                  OLIZ
                              </a>
                          </p>
                  </div>
                  <div className="card last-card">
                      <img src={SIXTHPresent} alt="Зображення 6" className="card-image"/>
                          <p className="card-text">Сертифікат на&nbsp;
                              <a href="https://takflix.com/uk" target="_blank" rel="noreferrer">
                                  Takflix
                              </a>
                          </p>
                  </div>
                  <div className="cards-inside"></div>
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
                  Чат-бот «Саша шукає відповіді» стартує <strong className="text-together">21 березня о 8:30.</strong> Саша чекає на тебе!
              </p>
          </div>

          {isDesktop ? (

              <div className="block-fifth">
                  <div className="fifth-block">
                      <img className="img-fifth" src={FifthImage}  alt="Block image"/>
                  </div>
                  <div className="fifth-block">
                      <p className="text-inside-fifth-block first-article">
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
                  </div>
              </div>

          ) : (

              <div className="block-fifth">
                  <div className="fifth-block fifth-block-text">
                      <p className="text-inside-fifth-block first-article">
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
                  </div>
                  <div className="fifth-block">
                      <img className="img-fifth" src={FifthImage}  alt="Block image"/>
                  </div>
              </div>
          )}


          <div className="block-sixth" id="for-teachers">
              <div>
                  <p className="fourth-block-text sixth-block">{formTitle}</p>
              </div>
              <div className="lesson-plan-body">
                  <p className="certificate-text">{textForm}</p>
                  <form className="lesson-plan-form" id="google-sheet-form">
                      <label htmlFor="name" className="form-text form-text-first">Ваше ім’я та прізвище</label>
                      <input type="text" id="name" name="Ім'я та прізвище" required/>

                      <label htmlFor="school" className="form-text">Яку школу ви представляєте?</label>
                      <input type="text" id="school" name="Яку школу представляє" required/>

                      <label htmlFor="address" className="form-text">Вкажіть, будь ласка, назву та адресу школи</label>
                      <input type="text" id="address" name="Назва і адреса школи" required/>

                      <label htmlFor="email" className="form-text">Вкажіть вашу електронну адресу, щоб ми надіслали вам план уроку</label>
                      <input type="email" id="email" name="Електронна адреса" required/>
                      <div id="message" className="display: none;"></div>

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
                  <img className="img-seventh" src={SeventhImage}  alt="Block image"/>
              </div>
          </div>

          <div className="block-eight">
              <p className="fourth-block-text sixth-block">
                  Партнери конкурсу у 2023 році:
              </p>
              <div className="cards-second">
                  <div className="cards-inside-second"></div>
                  <div className="card-second">
                      <a href="https://www.instagram.com/horondi/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                          <img src={FirstPartner} alt="Зображення 1" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second">
                      <a href="https://dodosocks.com/slava_zsu/" target="_blank" rel="noreferrer">
                          <img src={SecondPartner} alt="Зображення 2" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second">
                      <a href="https://www.creativewomenpublishing.com.ua/" target="_blank" rel="noreferrer">
                          <img src={ThirdPartner} alt="Зображення 3" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second">
                      <a href="https://takflix.com/uk" target="_blank" rel="noreferrer">
                          <img src={FourthPartner} alt="Зображення 4" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second">
                      <a href="https://www.instagram.com/unicornandwine/" target="_blank" rel="noreferrer" className="text-together">
                          <img src={FifthPartner} alt="Зображення 5" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="card-second last-card-second">
                      <a href="https://www.instagram.com/oliz_brand/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                          <img src={SixthPartner} alt="Зображення 6" className="card-image-second"/>
                      </a>
                  </div>
                  <div className="cards-inside-second"></div>
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
