import { useContext } from 'react'
import { MyContext } from '../Context'



const Confirm = () => {
    const confirmContext = useContext(MyContext);

    console.log('Confirm component has been triggered ');

    const handleSubmit = (e) => {

        confirmContext.goToFunction(2);
        // confirmContext.handleQuestions(value);
    }

    const handleBack = (e) => {
        confirmContext.handleQuestions('');

        confirmContext.goToFunction(0);
        // confirmContext.handleQuestions(value);
    }
    return (

        <div class="form-group">
            <p> <strong>
                <h1 >
                    {confirmContext.state.myQuestion}

                </h1>
            </strong>
            </p>

            <div className="animate__animated animate__rubberBand animate__delay-3s">

                <input type="text" name="Name1" id="Name1"
                    class="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" class="text-muted">Help text</small>

                <button type="button  "

                    onClick={handleSubmit} class="btn btn-outline-primary">
                    Next to Result
                    </button>

                <button type="button " 
                    onClick={handleBack} class="btn btn-outline-primary">
                Back to initial
                    </button>
            </div>
        </div >



    )
}

export default Confirm;