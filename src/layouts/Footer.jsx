import { communicationInfos } from '../../db/footer-communication-infos'
import { hotMenu } from '../../db/footer-hot-menu-items'
import { instagramPhotos } from '../../db/footer-instagram-photos'
import CommunicationInfo from '../components/CommunicationInfo'

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div>
          <img src="./images/iteration-2-aseets/footer/logo-footer.svg" />
          <div className="iconlu-bolum">
            {communicationInfos.map((info) => (
              <CommunicationInfo key={info._id} img={info.img} text={info.text} />
            ))}
          </div>
        </div>
        <div className="menuler">
          <h4>Hot Menu</h4>
          {hotMenu.map((el) => (
            <p key={el._id}>{el.item}</p>
          ))}
        </div>
        <div className="insta">
          <h4>Instagram</h4>
          <div className="insta-photos">
            {instagramPhotos.map((photo) => {
              return <img key={photo._id} src={`./images/iteration-2-aseets/footer/insta/li-${photo.img}.png`} />
            })}
          </div>
        </div>
      </section>
      <div className="copyright">
        <p>© 2024 Alper Mutlu Akcan</p>
        <img src="./images/iteration-2-aseets/footer/icons8-twitter.svg" alt="twitter icon" />
      </div>
    </>
  )
}
