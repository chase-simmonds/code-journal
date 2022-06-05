/* exported data */

var $photoUrl = document.querySelector('#photoUrl');
var $entryImg = document.querySelector('#entry-img');
var $entryForm = document.querySelector('#entry-form');
var $entryTitle = document.querySelector('#title');
var $entryNotes = document.querySelector('#notes');
var $entryList = document.querySelector('ul');

// upload photo when URL is pasted

function photoUpload(event) {
  if ($entryImg) {
    $entryImg.setAttribute('src', event.target.value);
  }
}

$photoUrl.addEventListener('input', photoUpload);

// submitting form data

var $dataViewEntryForm = document.querySelector('[data-view="entry-form"]');
var $dataViewEntries = document.querySelector('[data-view="entries"]');

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
  $dataViewEntryForm.setAttribute('class', 'hidden');
  $dataViewEntries.setAttribute('class', 'view');
  data.view = 'entries';
  $entryForm.reset();
}

$entryForm.addEventListener('submit', userFormData);

// DOM Tree

/*
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

// rendering DOM tree for entries

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

  // immediately append new post to page w/o refreshing

  $entryColHalf.appendChild($entryP);

  return $listItem;
}

// append to page when when DOMContentLoaded is fired

function domContentLoaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $entryList.appendChild(renderEntry(data.entries[i]));
  }
}

window.addEventListener('DOMContentLoaded', domContentLoaded);

var $newEntryButton = document.querySelector('#new-button');
var $entries = document.querySelector('#entries');

// switch to new entry view when new button is clicked

function newEntryView(event) {
  $dataViewEntries.setAttribute('class', 'hidden');
  $dataViewEntryForm.setAttribute('class', 'view');
  data.view = 'entry-form';
}

$newEntryButton.addEventListener('click', newEntryView);

// switch to posted entries view when entries link is clicked

function postedEntriesView(event) {
  $dataViewEntryForm.setAttribute('class', 'hidden');
  $dataViewEntries.setAttribute('class', 'view');
  data.view = 'entries';
}

$entries.addEventListener('click', postedEntriesView);

// keep current view even if page is refreshed

function keepCurrentView(event) {
  if (data.view === 'entries') {
    $dataViewEntryForm.setAttribute('class', 'hidden');
    $dataViewEntries.setAttribute('class', 'view');
  } else if (data.view === 'entry-form') {
    $dataViewEntries.setAttribute('class', 'hidden');
    $dataViewEntryForm.setAttribute('class', 'view');
  }
}
window.addEventListener('DOMContentLoaded', keepCurrentView);
