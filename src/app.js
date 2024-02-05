import { User } from "./user";

const users = []; 
const getUser = async () => {
    const apiUrl = 'https://randomuser.me/api/?results=20'; 
    const response = await fetch(apiUrl); 

    if (!response.ok) {
        throw new Error ('Could not retrieve data'); 
    }

    const responseData = await response.json(); 
    const filteredData = responseData.results;
    
    filteredData.forEach(element => {
        const user = new User (element) 
        users.push(user); 
    });

    users.sort(function(a, b) {
        return a.getInfos().name.last < b.getInfos().name.last ? 1 : -1; 
    });

    console.log(users); 

    users.forEach(user => {
        user.render(); 
    })
}

getUser(); 
