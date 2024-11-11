import './Home.css';
import { useState } from 'react';

function Home() {
    // const [language, setLanguage] = useState(null);
    const [current, setCurrent] = useState("lang");
    // const [data, setData] = useState({});
    
    function handleLanguageSelection(event) {
        const selectedLanguage = event.currentTarget.dataset.lang;
        // setData(prevData => ({ ...prevData, language: selectedLanguage }));
        setCurrent("location");
    }

    function handleLocationSelection(event) {
        const selectedLocation = event.target.value;
        // setData(prevData => ({ ...prevData, location: selectedLocation }));
        setCurrent("crop");
    }

    return (
        <div className="Home">
            {current === "lang" && (
                <div className="container">
                    <h1>Choose Your Language</h1>
                    <button data-lang="en" className="lang-en" onClick={handleLanguageSelection}>English</button>
                    <button data-lang="tam" className="lang-tam" onClick={handleLanguageSelection}>தமிழ்</button>
                    <button data-lang="mal" className="lang-mal" onClick={handleLanguageSelection}>മലയാളം</button>
                </div>
            )}

            {current === "location" && (
                <div className="container">
                    <h1>Choose Your Location</h1>
                    <p><i>Inside Kollam District</i></p>
                    <select name="district" id="district" onChange={handleLocationSelection}>
                        <option value="">Select a location</option>
                        <option value="amritapuri">Amritapuri</option>
                        <option value="karunagapally">Karungapally</option>
                        <option value="kayamkulam">Kayamkulam</option>
                    </select>
                </div>
            )}

            {current === "crop" && (
                <div className="container" id="crop">
                    <h1>Crop Details</h1>
                    <button className="crop-paddy">
                        <img src="https://st3.depositphotos.com/18431654/36355/i/450/depositphotos_363554606-stock-photo-rice-field-green-rice-sprouts.jpg" alt="Paddy" />
                        Paddy
                    </button>
                    <button className="crop-coconut">
                        <img src="https://www.palmco.com/wp-content/uploads/High-Plateau-Coconut-Palm-1186-1.jpg" alt="Coconut" />
                        Coconut
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home;
