import { useContext } from 'react';
import { useState, useRef } from 'react';
import { MyContext } from '../Context';
import { ToastContainer, toast } from 'react-toastify';


const Initial = () => {
    const myInitialContext = useContext(MyContext)

    const [showNext, setshowNext] = useState(false);
    const [showError, setshowError] = useState(false);

    const textInput = useRef();

    const handleChange = (e) => {

        if (textInput.current.value.length > 10) {
            setshowNext(true);
        }
        else {
            setshowNext(false);
        }

    }

    const handleSubmit = (e) => {

        const value = textInput.current.value;

        // if (value.length > 30) {
        //     setshowError(true);
        //     toast.error("There was error , more than 30 Char  !", {
        //         position: toast.POSITION_TOP_LEFT
        //     });
        // } else setshowError(false);

        if (value.length > 30) {
            toast.error("There was error , more than 30 Char  !", {
                position: toast.POSITION_TOP_LEFT
            });
        } else   toast.success("This is correct input !", {
            position: toast.POSITION_TOP_LEFT
        });



        myInitialContext.goToFunction(1);
        myInitialContext.handleQuestions(value);
    }



    return (

        <div>

            <div className="animate__animated animate__fadeInLeft">
                <h1 className="display-1"> Ask a good  Question  </h1>
            </div>

            <input
                ref={textInput}
                onChange={handleChange}
                type="text" name="Name" id="Name" className="form-control"
                placeholder="Enter the Q" aria-describedby="helpId" />
            <small id="helpId" className="text-muted">Help text</small>

            {showNext && <button
                type="button animate__animated animate__rubberBand"
                onClick={handleSubmit}
                class="btn btn-outline-primary mb-5 ">Enter </button>
            }
            {/* {showError
                &&
                <div className="alert alert-danger alert-dismissible fade show">
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
              </div>
            } */}



        </div>
    );
}

export default Initial;