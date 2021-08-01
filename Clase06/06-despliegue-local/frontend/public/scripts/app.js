const msgBackend1 = document.getElementById('msg-backend1');
const msgBackend2 = document.getElementById('msg-backend2');

const PATH_API_CONFIG = '/api/config';

const callbackBackend = (response) => {
  fetch(response.backend1 + '/message')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      msgBackend1.textContent = data.msgBackend1;
      msgBackend2.textContent = data.msgBackend2;
    });
};

fetch(PATH_API_CONFIG)
  .then((res) => res.json())
  .then(callbackBackend);
