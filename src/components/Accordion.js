import { questions } from "../data";
import Question from "./Question";

const Accordion=()=>{
    return(
        <section className="accordion">
            <div className="title">
                <h1>Questions related to login</h1>
            </div>
            <div className="questions">
                {
                    questions.map((item)=>{
                        return(
                            <Question key={item.id}
                                id={item.id}
                               title={item.title}
                               info={item.info} />
                        )
                    })
                }
            </div>
        </section>
    );
};
export default Accordion;