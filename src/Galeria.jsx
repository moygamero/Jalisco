import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'

function Galeria() {

  return (
    <>

      <div className="grid galeria_img">
{/* grid-cols-2 md:grid-cols-4 gap-1 */}
        <div>
        <img src={img1} alt="imagen comida" />
        <img src={img3} alt="imagen comida" />
        </div>

        <div>
        <img src={img4} alt="imagen comida" />
        <img src={img2} alt="imagen comida" />
        </div>

        <div>
        <img src={img3} alt="imagen comida" />
        <img src={img1} alt="imagen comida" />
        </div>

        <div>
        <img src={img2} alt="imagen comida" />
        <img src={img4} alt="imagen comida" />
        </div>
      </div>

    </>
  )
}

export default Galeria
