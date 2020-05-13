import React from 'react';

class Form extends React.Component{
    state = {
        name: '',
        quantity: 0
    }

    handleSubmit = (event)=> {
        event.preventDefault()
        this.props.addArticle(this.state)

    }

    render(){
        return (
            <div>
                <h3>{this.props.formTitle}</h3>
                <form onSubmit = { this.handleSubmit }>
                    <input 
                        type ='number' 
                        placeholder = 'Quantité'
                        value = { this.state.quantity }
                        onChange = { (event)=>this.setState({
                            quantity:event.target.value })
                        } />

                    <input 
                        type ='text' 
                        placeholder = 'Article'
                        value =  { this.state.name }
                        onChange = { (event)=>this.setState({
                            name:event.target.value })
                        } />
                    
                    <button 
                        type = 'submit'>Acheter</button>

                </form>
            </div>
        )    
    }

}
    

export default Form;
