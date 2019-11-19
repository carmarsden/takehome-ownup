import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import RequestForm from './components/RequestForm';
import RatesTable from './components/RatesTable';


function App(props) {
    const renderRatesSection = () => {
        if (props.introScreen) {
            return (
                <section>
                    Get started by filling out your details and clicking "Quote Rates"!
                </section>
            )
        } else if (props.loading) {
            return (
                <section>
                    Looking for the best rates...
                </section>
            )
        } else if (props.error) {
            return (
                <section>
                    <p>Oh no! {props.error}</p>
                    <p>Please fix the error or try again later?</p>
                </section>
            )
        } else if (props.quotes.length === 0) {
            return (
                <section>
                    Oh dear, we couldn't find any rates for that request! Try another search?
                </section>
            )
        } else {
            return <RatesTable data={props.quotes} />
        }
    }

    const ratesSection = renderRatesSection();

    return (
        <div className="App">
            <RequestForm />
            {ratesSection}
        </div>
    );
}

const mapStateToProps = state => ({
    introScreen: state.introScreen,
    loading: state.loading,
    error: state.error,
    quotes: state.quotes
})

export default connect(mapStateToProps)(App);
