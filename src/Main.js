import React from "react";

import Card from "./Card";

export default function Main(){
    return(
        <main>
        <section class="landing-page">
            <div class="content">
                <h1>Learning that gets you</h1>
                <p>Skills for your present (and your future). Get started with us.</p>
            </div>
            <div class="represent-img">
                <img src="./images/homepage/home.svg" alt=""/>
            </div>
        </section>

        <section class="popular-courses">
            <h2>Popular Courses</h2>
            <div class="courses-container">
                <Card 
                    name="The complete 2022 Fullstack Web Developer Course"
                    owner="rockey"
                    ratings="4,352"
                    price={200}
                />
                <Card
                    name="The complete 2022 FrontEnd Web Developer Course"
                    owner="Arjun"
                    ratings="4,500"
                    price={4000}
                />
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>

        <section class="top-categories">
            <h2>Top Categories</h2>
            <div class="categories-container">
                <a href="#" class="card-container">
                    <div class="img-wrapper">
                        <img src="./images/homepage/development.svg" alt=""/>
                    </div>
                    <span>Developement</span>
                </a>

                <a href="#" class="card-container">
                    <div class="img-wrapper">
                        <img src="./images/homepage/design.svg" alt=""/>
                    </div>
                    <span>Design</span>
                </a>
                <a href="#" class="card-container">
                    <div class="img-wrapper">
                        <img src="./images/homepage/business.svg" alt=""/>
                    </div>
                    <span>Business</span>
                </a>
                <a href="#" class="card-container">
                    <div class="img-wrapper">
                        <img src="./images/homepage/marketing.svg" alt=""/>
                    </div>
                    <span>Marketing</span>
                </a>
                <a href="#" class="card-container">
                    <div class="img-wrapper">
                        <img src="./images/homepage/music.svg" alt=""/>
                    </div>
                    <span>Music</span>
                </a>
                <a href="#" class="card-container">
                    <div class="img-wrapper">
                        <img src="./images/homepage/photography.svg" alt=""/>
                    </div>
                    <span>Photography</span>
                </a>
                <a href="#" class="card-container">
                    <div class="img-wrapper">
                        <img src="./images/homepage/presonal-development.svg" alt=""/>
                    </div>
                    <span>Presonal Development</span>
                </a>
                <a href="#" class="card-container">
                    <div class="img-wrapper">
                        <img src="./images/homepage/software.svg" alt=""/>
                    </div>
                    <span>IT and Software</span>
                </a>
            </div>
        </section>
    </main>
    )
}
