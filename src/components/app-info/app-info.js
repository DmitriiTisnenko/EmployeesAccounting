import './app-info.css';

function AppInfo ({employeesNumber, employeesRiseNumber}) {
    return (
        <div className="app-info">
            <h1>Учет сотруников компании ООО "ВИТЯ ПУПКИН"</h1>
            <h2>Общее число сотрудников: {employeesNumber} </h2>
            <h2>Премию получат: {employeesRiseNumber}</h2>
        </div>
    )
}

export default AppInfo;