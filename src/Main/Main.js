import React from 'react'
import './Main.scss'

const main = () => {
    return(
        <div>
            <div className="w3-container w3-teal">
                <h1>My Page</h1>
            </div>
            < img src = "https://www.w3schools.com/w3css/img_car.jpg"
            alt = "Car" / >
            <div className="w3-container">
                <h2>Sidebar Navigation Example</h2>
                <p>The sidebar with is set with "style="width:25%".</p>
                <p>The left margin of the page content is set to the same value.</p>
            </div>
        </div>
    );
}

export default main;