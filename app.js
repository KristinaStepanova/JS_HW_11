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

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (let i = 1; i <= 10; i++) {
      let user = result.filter(item => item.userId === i);
      let completed = user.filter(item => item.completed).length;
      const li = document.createElement("li");
      li.innerHTML = `Пользователь userID=${i} имеет ${completed} завершенных и ${user.length -
        completed} не завершенных заданий`;
      ul.appendChild(li);
    }
  } catch (err) {
    alert(err);
  }
};

getUsers();

//task 3



const postUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify();
    });
    const result = await response.json();
  } catch (err) {
    alert(err);
  }
};

postUsers();
