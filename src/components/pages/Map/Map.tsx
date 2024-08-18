import scss from './Map.module.scss'
const Map = () => {
  return (
    <section className={scss.Map}>
      <div className="container">
        <div className={scss.content}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5264.1592097338935!2d72.24795245605875!3d42.517312727276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a15c88ee84daaf%3A0x1b9ed9d1282b78f7!2z0JHQtdGA0LzQtdGCINCz0YDQsNC90LQg0YXQvtC70Ls!5e0!3m2!1sru!2skg!4v1723986990437!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Map