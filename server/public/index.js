import './installPage.js';
import './loginPage.js';
import './desktop.js';

function speak(textForSpeak) {
  var synth = window.speechSynthesis;
  var textToSpeak = new SpeechSynthesisUtterance(textForSpeak);
  synth.speak(textToSpeak);
}

function openTerminalBtn() {
  const openTerminalBtn = document.createElement('button');
  openTerminalBtn.className = 'openTerminalBtn';
  openTerminalBtn.style.backgroundColor = 'red';
  openTerminalBtn.style.color = 'white';
  openTerminalBtn.style.padding = '1rem';
  openTerminalBtn.style.border = 'none';
  openTerminalBtn.style.marginLeft = '0.5rem';
  openTerminalBtn.style.marginRight = '0.5rem';
  openTerminalBtn.style.cursor = 'pointer';
  openTerminalBtn.textContent = 'Open Terminal';
  document.body.append(openTerminalBtn);
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = '<install-page></install-page>';
  const install_form = document.getElementById('install_form');
  install_form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.name = document.getElementById('name').value;
    window.username = document.getElementById('username').value;
    window.userpassword = document.getElementById('userpassword').value;
    app.innerHTML = '<login-page></login-page>';
    const login_form = document.getElementById('login_form');
    login_form.addEventListener('submit', (e) => {
      e.preventDefault();
      const loginPassword = document.getElementById('loginPassword');
      if (loginPassword.value == window.userpassword) {
        speak(`Welcome ${window.name}`);
        app.innerHTML = '<desktop-page></desktop-page>';
        console.log('Successfully Logged In');
      } else {
        speak('Please enter correct password');
        console.log('Please enter correct password');
      }
    });
  });
});

export default window.name;
