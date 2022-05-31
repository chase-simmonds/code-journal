var $entryImg = document.querySelector('img');
var $photoUrl = document.querySelector('#photoUrl');

function photoUpload(event) {
  $entryImg.setAttribute('src', event.target.value);
}

$photoUrl.addEventListener('input', photoUpload);
