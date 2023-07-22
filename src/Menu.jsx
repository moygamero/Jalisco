import './index.css'

function Menu() {
    const btn1 = {
        background: '#67bfb1',
        color: '#004857',
        fontWeight: 'bold'
    }

    const backgroundStyle = {
        backgroundImage: 'url("./src/assets/5.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      };

    return (
        <>
            <div className='contenedor_menu flex flex-col items-center justify-center'>
                <h1>Menus</h1>
                <div>
                    <div className="flex  justify-center items-center">
                        <button style={btn1} className="py-2 px-4 btn-hover rounded-full m-2">MENU</button>
                        <button style={btn1} className="py-2 px-4  btn-hover rounded-full m-2">LUNCH</button>
                        <button style={btn1} className="py-2 px-4  btn-hover rounded-full m-2">KID’S</button>
                    </div>
                </div>
            </div>

            <div  className='margarita flex flex-col items-center justify-end'>
                <div>
                    <div className="flex  justify-center items-center">
                        <button style={btn1} className="py-2 px-4 btn-hover rounded-full m-2">DRINKS</button>
                    </div>
                </div>
                <p>Viva Jalisco Restaurant in Bothell is renowned for crafting the most exquisite Margaritas in town. With their blended flavors and top-quality ingredients, their Margaritas are truly a taste of perfection.</p>
            </div>
        </>
    )
}

export default Menu
