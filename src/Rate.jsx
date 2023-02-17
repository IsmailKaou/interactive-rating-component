import React, { useState } from "react";

const Rate = ({ done, setDone, rate, setRate, rates }) => {
    const handleRateClick = (e, rate) => {
        e.preventDefault();
        setRate(rate);
        console.log(rate);
    };
    return (
        <section className="flex flex-col gap-3 p-7 items-center overflow-hidden">
            <div className="flex flex-col gap-3">
                <div className="bg-[#323c47] w-[50px] h-[50px] flex items-center justify-center rounded-full">
                    <img className="w-[30px] " src="icon-star.svg" alt="" />
                </div>

                <h1 className="font-bold text-[25px] text-slate-700 dark:text-white ">
                    How did we do?
                </h1>
                <p className="font-light text-[15px] text-slate-400">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <ul className="list-none flex items-center gap-3 pt-4">
                {rates.map((rate) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                        onClick={(e) => handleRateClick(e, rate)}
                        href=""
                        className="cursor-pointer bg-transparent text-slate-700 dark:text-white border-slate-700 border-[2px]  w-[45px] h-[45px] flex items-center justify-center rounded-full hover:text-white hover:bg-[#323c47] dark:hover:bg-[#959eac] dark:bg-[#323c47] dark:border-none transition-all duration-[0.4s] ease-in-out focus:bg-[#fb7413] focus:text-slate-700   "
                    >
                        <li key={rate}>{rate}</li>
                    </a>
                ))}
            </ul>
            <button
                onClick={() => setDone(true)}
                className="mt-5 text-[#fb7413] uppercase tracking-widest text-sm  w-full p-3 font-semibold  border-[#323c47] border-2 rounded-full 
                hover:bg-slate-700 dark:hover:bg-white transition-all duration-[0.4s] ease-in-out "
            >
                Submit
            </button>
        </section>
    );
};

export default Rate;
