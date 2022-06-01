/* exported data */

var $photoUrl = document.querySelector('#photoUrl');
var $entryImg = document.querySelector('#entry-img');

function photoUpload(event) {
  if ($entryImg) {
    $entryImg.setAttribute('src', event.target.value);
  }
}

$photoUrl.addEventListener('input', photoUpload);

var $entryForm = document.querySelector('#entry-form');
var $entryTitle = document.querySelector('#title');
var $entryNotes = document.querySelector('#notes');

function userFormData(event) {
  event.preventDefault();
  var entryData = {
    title: $entryTitle.value,
    photoUrl: $photoUrl.value,
    notes: $entryNotes.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.unshift(entryData);
  $entryImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
}

$entryForm.addEventListener('submit', userFormData);
