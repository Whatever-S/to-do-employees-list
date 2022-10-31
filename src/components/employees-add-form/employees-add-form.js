import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            salary: ''
        }
    }
    
    onValueChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.salary){
            alert('Не можливо додати порожнє поле');
            return 0;
        }
        
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render(){
        const {name, salary} = this.state;

        return (
        <div className="app-add-form">
            <h3>Додайте нового співробітника</h3>
            <form
                className="add-form d-flex"
                onSubmit = {this.onSubmit} >
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Введіть ім'я"
                    id='name'
                    value={name} 
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="ЗП в $?" 
                    id='salary'
                    value={salary}
                    onChange={this.onValueChange}/>

                <button type="submit"
                        className="btn btn-outline-light" >Додати</button>
            </form>
        </div>
    )
    }
}

export default EmployeesAddForm;