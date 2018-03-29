var API_URL_BASE = 'http://167.99.108.129/api/';

function parseJson(it) {
  return it.json();
}

function httpPost(url, body) {
  return fetch(url, {
    method: 'POST',
    body: body,
    mode: "no-cors"
  }).then(parseJson);
}

function httpGet(url) {
  return fetch(url, {
    mode: "no-cors"
  }).then(parseJson);
}

function getCategories(fn) {
  return httpGet(API_URL_BASE + 'categories/?format=json').then(fn);
}

function createAnnouncements(announcement, fn) {
  return httpPost(API_URL_BASE + 'categories/' + announcement.category + '/announcements/', announcement).then(fn)
}
