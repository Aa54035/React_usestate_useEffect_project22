import { useEffect, useContext } from 'react';
import { MyContext } from '../Context';


const Result = () => {

    const myContext = useContext(MyContext);

    useEffect(() => { myContext.handleNextAnswer() }, []
    );

         
    const handlSubmit = (e) => {
        myContext.reset();

        myContext.goToFunction(0);
    }

             
    const handlNewSubmit = (e) => {
        myContext.handleNextAnswer() 
        }
    console.log('Results was called ');
    

    return (
        <div>
            <h1 class="display-1">  </h1>

            <div class="form-group">
                <label for="resulte1" className="display-1">
                    My Answer is </label>
                <input type="text" class="form-control" name="resulte1" value={myContext.state.result}
                    id="resulte1" aria-describedby="helpId" placeholder="" />
                <small id="helpId" class="form-text text-muted">results here</small>

                <div className="animate__animated animate__fadeInLeft">
                    <button type="button"
                     class="btn btn-outline-primary" onClick={handlSubmit}>Start over</button>
                    <button type="button"
                     class="btn btn-outline-primary" onClick={handlNewSubmit}>Decide again pls...</button>

                </div>
            </div>


        </div>
    )
}

export default Result;