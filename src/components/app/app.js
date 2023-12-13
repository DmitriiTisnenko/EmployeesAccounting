import { Component } from 'react';

import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Sam M.', salary: 800, increase: true, rise: false, id: 1},
                {name: 'Tonny J', salary: 1000, increase: false, rise: true, id: 2},
                {name: 'Maddy S.', salary: 3000, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all'
        }
        this.maxID = 3;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
           const newData = [...data, {name, salary, increase: false, rise: false, id: this.maxID}];
           return {
            data: newData
           }
        })
        this.maxID++;
    }
    // через map метод
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (data, term) => {
        if(term.length === 0) {
            return data;
        }

        return data.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }
     
    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterEmp = (data, filter) => {
        switch(filter) {
            case 'rise':
                return data.filter(emp => emp.rise);
            case 'moreThen1000':
                return data.filter(emp => emp.salary > 1000);
            case 'increase':
                return data.filter(emp => emp.increase)
            default: 
                return data;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employeesNumber = data.length;
        const employeesRiseNumber = data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(this.filterEmp(data, filter), term);

        return (
            <div className="app">
                <button onClick={this.onShowState}></button>
                <AppInfo
                employeesNumber={employeesNumber}
                employeesRiseNumber={employeesRiseNumber}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>

                    <AppFilter
                    filter={filter}
                    onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
    
                <EmployeesAddForm 
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
