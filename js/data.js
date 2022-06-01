/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntriesJSON = localStorage.getItem('code-journal-storage');
if (previousEntriesJSON !== null) {
  data.entries = JSON.parse(previousEntriesJSON);
}

function beforeUnload(event) {
  var entriesJSON = JSON.stringify(data.entries);
  localStorage.setItem('code-journal-storage', entriesJSON);
}

window.addEventListener('beforeunload', beforeUnload);
