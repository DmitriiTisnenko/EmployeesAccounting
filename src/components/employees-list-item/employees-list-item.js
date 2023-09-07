import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        };
    }

    giveReward = () => {
        this.setState(({increase}) => ({ 
            increase: !increase
        }))
    }

    like = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        let className = "list-group-item d-flex justify-content-between";
        const {name, salary, onDelete} = this.props;
        let {increase, like} = this.state;

        if(like) {
            className += className + ' like'
        }

        if(increase) {
            className += className + ' increase'
        } 
        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={this.like}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.giveReward} className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>     
        )
    }


    
}

export default EmployeesListItem;