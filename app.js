//task 1
// const getKitty = async() => {
//     try{
//        const response = await fetch('http://localhost:5500/structure.json');
//        const result = await response.json();
//        document.body.innerHTML = result.html;
//        const style = document.createElement('style');
//        style.textContent = result.styles;
//        //document.body.appendChild(style);
//     } catch(err) {
//         alert(err);
//     }
    
// }

// getKitty();

//task 2

const getUsers = async() => {
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/todos');
       const result = await response.json();
       const ul = document.createElement('ul');
       document.body.appendChild(ul);
       result.forEach(el => {
           const li = document.createElement('li');
           li.innerHTML = `Пользователь userID=${userId} имеет завершенных и не завершенных заданий`;
           ul.appendChild(li);
       });
    console.log(result);
    } catch(err) {
        alert(err);
    }
    
}

getUsers();