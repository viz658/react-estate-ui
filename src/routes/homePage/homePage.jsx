import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptas deserunt debitis doloremque ullam expedita. Aliquid, delectus hic? Facilis assumenda ipsam aliquid! Voluptate maiores eos nisi eum aperiam, rem quasi.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                          <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                          <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                          <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src='/bg.png' alt="" />
            </div>
        </div>
    )
}

export default HomePage