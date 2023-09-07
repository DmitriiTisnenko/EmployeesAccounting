import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

function EmployeesList({data, onDelete}) {

    const elements = data.map(person => {
        const {id, ...props} = person;
        return (
            <EmployeesListItem 
            onDelete={() => onDelete(id)} 
            key={id} 
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

