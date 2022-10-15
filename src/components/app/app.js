
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App(){
    const data = [
        {name: 'Марія О.', salary: 450, increase: true, id:1},
        {name: 'Пилип Т.', salary: 1200, increase: false, id:2},
        {name: 'Юрій Г.', salary: 800, increase: false, id:3}
    ]

    return (
        <div className='app'>
            <AppInfo></AppInfo>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;