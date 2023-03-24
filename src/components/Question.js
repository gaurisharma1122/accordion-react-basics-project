import { useState } from "react";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";

const Question=({ id, title, info })=>{

    const [showInfo, setShowInfo]= useState(false);

    return(
        <section className="question">
            <div className={ showInfo ? "question-title dark-background" : "question-title" }>
                <h3>{title}</h3>
                <button onClick={()=>setShowInfo(!showInfo)}>
                    { showInfo? <GrSubtractCircle/> : <GrAddCircle/> }
                </button>
            </div>
            <div className={showInfo ? "question-info" : "question-info hide"}>
                <p>{info}</p>
            </div>
        </section>
    );
};
export default Question;