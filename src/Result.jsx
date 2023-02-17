import React from "react";

const Result = ({ rate }) => {
    return (
        <div className="flex flex-col gap-2 p-7 items-center overflow-hidden">
            <img src="illustration-thank-you.svg" alt="" />
            <p className="mt-4 bg-[#323c47] p-4 pt-1 pb-1 rounded-full  font-thin text-[#fb7413] ">
                {`You Selected ${rate} out of 5`}
            </p>
            <h3 className="font-bold text-[25px] mt-4 text-slate-700 dark:text-white">
                Thank You!
            </h3>
            <p className="text-center font-light text-[15px] text-slate-400 mb-0">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
            </p>
        </div>
    );
};

export default Result;
