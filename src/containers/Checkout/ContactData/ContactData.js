import React, {Component} from 'react';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Sai Sridhar Akula',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    render(){
        let form = (
            <form className="row">
                <input className="col-10 ml-3 mb-3" type="text" name="name" placeholder="Enter Your Name" />
                <input className="col-10 ml-3 mb-3" type="email" name="name" placeholder="Enter Your Email" />
                <input className="col-10 ml-3 mb-3" type="text" name="name" placeholder="Enter Your Street" />
                <input className="col-10 ml-3 mb-3" type="text" name="name" placeholder="Enter Your Postal Code" />
                <button className="ml-3 btn btn-dark" onClick={this.orderHandler}>ORDER NOW</button>
            </form>
        );

        if(this.state.loading) {
            form = <Spinner />
        }
        return(
            <div className={[classes.ContactData, "container-fluid"].join(" ")}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;