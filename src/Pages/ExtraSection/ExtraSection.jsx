// import React from 'react';
import image from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"
const ExtraSection = () => {
    return (
        <section className="py-6 dark:bg-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image} />
                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image2} />
                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image3} />
                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image4} />
            </div>
        </div>
    </section>
    );
};

export default ExtraSection;