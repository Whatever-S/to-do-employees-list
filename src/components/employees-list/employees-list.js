import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        
        return (
            <EmployeesListItem key={id}
            {...itemProps}
            onDelete = {() => onDelete(id)} 
            onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )}
            onSalaryChange = {(e) => onSalaryChange(id, e.currentTarget.value.slice(0, -1))} />
        );
    })

    return (
        <ul className='app-list list-group' >
            {elements}
        </ul>
    )
}

export default EmployeesList;