import React from 'react';
import { propertyTypes, occupancyTypes } from '../constants';

class RequestForm extends React.Component {
    state = {
        loanSize: '',
        creditScore: '',
        propertyType: '',
        occupancy: '',
    }

    generateOptions = typeObj => typeObj.map((type, idx) => <option value={type.value} key={idx}>{type.display}</option>);

    updateInput = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('You requested a rate quote with the following parameters: ', this.state);
        this.setState({
            loanSize: '',
            creditScore: '',
            propertyType: '',
            occupancy: '',    
        })
    }

    render() {
        const propertyOptions = this.generateOptions(propertyTypes);
        const occupancyOptions = this.generateOptions(occupancyTypes);

        return (
            <section>
                <form className='requestform' onSubmit={this.handleSubmit}>
                        <label>
                            Loan Size:
                            <input 
                                type='text'
                                id='loanSize'
                                placeholder='$300,000'
                                value={this.state.loanSize}
                                onChange={this.updateInput}
                                required
                            />
                        </label>
                        <label>
                            Credit Score
                            <input 
                                type='number'
                                id='creditScore'
                                min='300'
                                max='800'
                                placeholder='650'
                                value={this.state.creditScore}
                                onChange={this.updateInput}
                                required
                            />
                        </label>
                        <label>
                            Property Type
                            <select 
                                id='propertyType' 
                                onChange={this.updateInput} 
                                value={this.state.propertyType}
                                required
                            >
                                <option value=''>Choose Property Type</option>
                                {propertyOptions}
                            </select>
                        </label>
                        <label>
                            Occupancy
                            <select 
                                id='occupancy' 
                                onChange={this.updateInput} 
                                value={this.state.occupancy}
                                required
                            >
                                <option value=''>Choose Occupancy Type</option>
                                {occupancyOptions}
                            </select>
                        </label>
                    <button type='submit'>Quote Rates</button>
                </form>
            </section>
        );
    }
}

export default RequestForm;