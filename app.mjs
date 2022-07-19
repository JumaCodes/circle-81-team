function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
  const title = document.getElementById('title');
  if (title) {
    setTimeout(function () {
      title.textContent = 'Circle 81 Team welcome you to the AltSchool Holiday Assignment Challenge.';
      title.style.color = 'orange';
      document.getElementById('header').style.cssText = `
        background: black;
        `;
      document.getElementById('btn').style.cssText = `
        background: black;
        color: white;
        border: 2px solid orange;
      `;
    }, 5000)
  }
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //