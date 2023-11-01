import React, { useState, useEffect } from "react";
import ExamViews from "../paginations/exam-view";
import Data from '../../data/views.json'
import '../App.css'

    function AllCameras() {
        const [view, setView] = useState(Data);    

        return (
        <>
        <div>
        <div className='my-4'>
            <h3 className='text-center text-primary capitalize'>institution name</h3>
        </div>
        <div className='h-[3px] bg-primary w-full mb-10'></div>

            <ExamViews data= {view} />
        </div>
        </>);
    }

export default AllCameras;
