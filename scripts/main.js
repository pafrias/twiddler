

const setUpSession = () => {
  var setUp = {};
  setUp.home = [];
  setUp.users = {};
  setUp.users.shawndrost = [];
  setUp.users.sharksforcheap = [];
  setUp.users.douglascalhoun = [];
  setUp.users.markopolo = [];
  setUp.users.kittykat393 = [];
  sessionStorage.setItem("streams", JSON.stringify(setUp));
  localStorage.setItem("visitor", {"loggedIn": false});

}

if (sessionStorage.length === 0) {
  setUpSession();
};

streams = JSON.parse(sessionStorage.streams);