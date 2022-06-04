/* exported data */

var $photoUrl = document.querySelector('#photoUrl');
var $entryImg = document.querySelector('#entry-img');
var $entryForm = document.querySelector('#entry-form');
var $entryTitle = document.querySelector('#title');
var $entryNotes = document.querySelector('#notes');
var $entryList = document.querySelector('ul');
var $entriesLink = document.querySelector('.entries-link');
var $entryFormView = document.querySelector('.entry-form-view');
var $newEntryButton = document.querySelector('#new-button');
var $entryPostsView = document.querySelector('.entry-posts-view');

function photoUpload(event) {
  if ($entryImg) {
    $entryImg.setAttribute('src', event.target.value);
  }
}

$photoUrl.addEventListener('input', photoUpload);

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
  $entryList.prepend(renderEntry(entryData));
  $entryImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
}

$entryForm.addEventListener('submit', userFormData);

/* DOM Tree

<li>
  <div row>
    <div 1 for column-half>
      <img>
    </div 1 column-half>
    <div 2 for column-half>
      <h2>
      <p>
    </div 2 column-half>
  </div row>
</li>
*/

function renderEntry(entry) {
  var $listItem = document.createElement('li');

  var $imgRow = document.createElement('div');
  $imgRow.setAttribute('class', 'row');
  $listItem.appendChild($imgRow);

  var $imgColHalf = document.createElement('div');
  $imgColHalf.setAttribute('class', 'column-half');
  $imgRow.appendChild($imgColHalf);

  var $img = document.createElement('img');
  $img.setAttribute('src', entry.photoUrl);
  $imgColHalf.appendChild($img);

  var $entryColHalf = document.createElement('div');
  $entryColHalf.setAttribute('class', 'column-half');
  $imgRow.appendChild($entryColHalf);

  var $entryH2 = document.createElement('h2');
  $entryH2.textContent = entry.title;
  $entryColHalf.appendChild($entryH2);

  var $entryP = document.createElement('p');
  $entryP.textContent = entry.notes;
  $entryColHalf.appendChild($entryP);

  return $listItem;
}

function contentLoaded() {
  for (var i = 0; i < data.entries.length; i++) {
    $entryList.appendChild(renderEntry(data.entries[i]));
  }
}

window.addEventListener('DOMContentLoaded', contentLoaded);

function entriesViewSwap(event) {
  $entryFormView.setAttribute('class', 'hidden');
  $entryPostsView.setAttribute('class', 'entry-posts-view');
}

$entriesLink.addEventListener('click', entriesViewSwap);

function newViewSwap(event) {
  $entryPostsView.setAttribute('class', 'hidden');
  $entryFormView.setAttribute('class', 'entry-form-view');
}

$newEntryButton.addEventListener('click', newViewSwap);
