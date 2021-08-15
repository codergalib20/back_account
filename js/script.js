// Index.html Gived Your Info Unloack Your Banck Account
// const nameFiled = document.getElementById('input-name');
// const userNameOutput = document.getElementById('user-name-output');
// const name = nameFiled.value
// console.log(name);

const emailFiled = document.getElementById('input-email');
const passwordFiled = document.getElementById('input-password');
const nidFiled = document.getElementById('input-nid');
const unlockButton = document.getElementById('unlock-button');

document.getElementById('unlock-button').addEventListener('click', function () {
    const userEmail = emailFiled.value;
    const userPassword = passwordFiled.value;
    const userNid = nidFiled.value;
    if (userEmail == 'galib@gbs.com' && userPassword == 'galibgbs' && userNid == '1234') {
        window.location.href = 'banking.html';
    } else {
        unlockButton.innerText = 'Try Again'
    }
});


