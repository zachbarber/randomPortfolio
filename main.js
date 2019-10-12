document.addEventListener("DOMContentLoaded", async () => {
    const fetchUser = await fetch('https://cors-anywhere.herokuapp.com/http://randomuser.me/api/?nat=US');
    if (fetchUser.status != 200) return console.log(fetchUser.message);
    dataJson = await fetchUser.json();
    const userData = dataJson.results[0];
    main(userData);
});

const main = (userData) => {
    //DOM Elements
    //Header
    const headerName = document.getElementById('headerName');
    
    
    //Header
    const userName = `${userData.name.first} ${userData.name.last}`;
    headerName.innerHTML = userName
}

