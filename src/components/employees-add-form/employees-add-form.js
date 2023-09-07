import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }    


    render () {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    className="add-form d-flex">
                    <input type="text"
                        onChange={this.onValueChange} 
                        name="name"
                        value={name} 
                        className="form-contol new-post-label" 
                        placeholder="Как его зовут"/>
                    <input type="number"
                        onChange={this.onValueChange} 
                        name="salary"
                        value={salary} 
                        className="form-contol new-post-label" 
                        placeholder="З/п в $?"/>   
                    <button type="submit" 
                            className="btn btn-outline-light"
                            >Добавить</button>
                </form>
            </div>
        )
    }
} 

export default EmployeesAddForm;