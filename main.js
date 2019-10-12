document.addEventListener("DOMContentLoaded", async () => {
    const fetchUser = await fetch('https://cors-anywhere.herokuapp.com/http://randomuser.me/api/?nat=US');
    if (fetchUser.status != 200) return console.log(fetchUser.message);
    dataJson = await fetchUser.json();
    const userData = dataJson.results[0];
    main(userData);
});

const fetchAboutMe = async () => {
    const fetchText = await fetch('https://www.randomtext.me/api/lorem');
    if (fetchText.status != 200) return console.log(fetchText.message);
    dataJson = fetchText.json()
    return dataJson;
}

const main = async (userData) => {
    console.log(userData);
    //DOM Elements

    //Header
    const headerName = document.getElementById('headerName');

    //Content Wrapper
    const contentWrapper = document.querySelector('.contentWrapper');

    //DOM Elements

    //Header
    const userName = `${userData.name.first} ${userData.name.last}`;
    headerName.innerHTML = userName

    //User Image
    const userImg = document.createElement('img');
    userImg.src = userData.picture.large;
    userImg.className = 'userImg';
    contentWrapper.appendChild(userImg);

    //About Me
    this.aboutMeText = await fetchAboutMe();
    const aboutMeText = document.createElement('p');
    aboutMeText.innerHTML = await this.aboutMeText.text_out;
    aboutMeText.className = 'aboutMeText';
    contentWrapper.appendChild(aboutMeText);



}

