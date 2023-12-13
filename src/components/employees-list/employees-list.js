import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

function EmployeesList({data, onDelete, onToggleProp}) {

    const elements = data.map(person => {
        const {id, ...props} = person;
        return (
            <EmployeesListItem 
            onDelete={() => onDelete(id)} 
            key={id} 
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )}
            {...props} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;

