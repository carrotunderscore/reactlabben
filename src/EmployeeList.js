import {useEffect, useState} from "react";
import Employee from "./Employee";


function EmployeeList(){
    const [employees, setEmployees] = useState([{
    name: "Yazeen Jasim", 
    email: "yazeen@hotmail.com",
    phone: "07000000", 
    skills: "c++, react, java, javascript", 
    avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
    name: "Geralt anderson", 
    email: "geralt@hotmail.com",
    phone: "072345789", 
    skills: "c++, react, swords, javascript", 
    avatar: "https://i.imgur.com/t9HFQvX.png",
    }
]);

function handleAddNewEmployee(){
    setEmployees((prevState) => {
        return [
            ...prevState,
        {
            name: "Brad anderson", 
            email: "brad@hotmail.com",
            phone: "072345789", 
            skills: "Shields, react, swords, javascript", 
            avatar: "https://i.imgur.com/t9HFQvX.png", 
        }
    ];
});
}
    return ( 
        <div>
            <h3>EmployeeList</h3>
            <button onClick={handleAddNewEmployee}>Add Employee</button>
            {employees.map((employee) => (
                <Employee EmployeeData={employee} />
        ))}
        </div>
    );
}

export default EmployeeList;