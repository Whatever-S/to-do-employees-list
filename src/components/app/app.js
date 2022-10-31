import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
    constructor(props){
        super(props)

        this.state ={
            data: [
                {name: 'Марія О.', salary: 450, increase: true, like: true, id:1},
                {name: 'Пилип Т.', salary: 1200, increase: false, like: false, id:2},
                {name: 'Юрій Г.', salary: 800, increase: false, like: false, id:3}
            ],
            term: ''
        }
        this.maxId = 4;
    }
    
    deleteItem = (id) =>{
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addData = (name, salary) =>{
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp= (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop] : !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) =>{
        if (!term.length)
        return items

        return items.filter(item => item.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) =>{
        this.setState({term})
    }

    render(){   
        const {data, term} = this.state,
            visibleData = this.searchEmp(data, term);
        return (
            <div className='app'>
                <AppInfo data={data}>

                </AppInfo>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete = {this.deleteItem} 
                    onToggleProp = {this.onToggleProp}
                    />
                <EmployeesAddForm onAdd ={this.addData} />
            </div>
        );
    }
}

export default App;