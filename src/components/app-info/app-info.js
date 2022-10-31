import './app-info.css';


const AppInfo = ({data}) => {
    let commonAmoumt = data.length,
        likedAmount = data.filter(item => item.like).length;



        return (
            <div className="app-info">
                <h1>Облік співробітників комканії ЇжаК</h1>
                <h2>Загальна кількість співробітників: {commonAmoumt} </h2>
                <h2>Премію отримають: {likedAmount} </h2>
            </div>
        );
    
}

export default AppInfo;