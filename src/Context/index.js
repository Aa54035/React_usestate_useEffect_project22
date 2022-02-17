import React, { Component } from 'react';

const MyContext = React.createContext();
const list = ['yes why not ', 'certinaly i am ', 'cool down man', 'no question please', 'byby', 'siayonar ', 'motherfukker'];

class MyProvider extends Component {

    state = {
        screen: 0,
        myQuestion: '',
        result: ''

    }

    handleReset = () => {


        this.setState({
            screen: 0,
            myQuestion: '',
            result: ''
        })


    }
    handleGoToFunction = (value) => {

        this.setState({ screen: value });

    }

    handleQuestions = (value) => {
        this.setState({ myQuestion: value });
    }

    getRandomAnswer = () => {
        return list[Math.floor(Math.random() * list.length)];
    }

    handleNextAnswer = () => {
        let ans = this.getRandomAnswer();

        if(this.state.result !=='')
        {
            while (ans === this.state.result)
            ans = this.getRandomAnswer();
        }

        this.setState({ result: ans });


    }


    //     // So whateverdata i am using here will be sent to main index.js
    //     using
    //     Whole class will act as Provider
    //     <MyProvider>
    //     <App />

    //   </MyProvider>

    render() {
        return (
            <MyContext.Provider value={
                {
                    state: this.state,
                    goToFunction: this.handleGoToFunction,
                    handleQuestions: this.handleQuestions,
                    handleNextAnswer: this.handleNextAnswer,
                    reset: this.handleReset
                }}
            >
                {this.props.children}

            </MyContext.Provider>



        );
    }
}

export {
    MyContext,
    MyProvider
}