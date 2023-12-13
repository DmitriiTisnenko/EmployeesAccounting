import './employees-list-item.css';

const EmployeesListItem = (props) => {

    let className = "list-group-item d-flex justify-content-between";
    
    const {name, salary, onDelete, onToggleProp, rise, increase} = props;

    if(rise) {
        className += className + ' like'
    }

    if(increase) {
        className += className + ' increase'
    } 
    return (
        <li className={className}>
            <span 
                className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle='rise'>
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={onToggleProp} className="btn-cookie btn-sm" data-toggle='increase'>
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

export default EmployeesListItem;