function setCookie(name,value,datTolive){
  const date=new date();
  date.setTime(date.getTime() +datTolive*3*24*60*60*1000);
  const expires= "expires=" + date.toUTCString();
  document.cookie= `${name}=${value}; ${expires}; path=/`;
}

  function getCookie(name){
   const decodedCookies= decodeURIComponent(document.cookie);
   const cookiesarray=decodedCookies.split("; ");
   let result =null;
   cookiesarray.forEach((cookie) => {
    if (cookie.indexOf(name) === 0) {
        result = cookie.substring(name.length + 1);
      }
   });
   return result;
}

  function deleteCookie(name) {
    setCookie(name, null, null);
  }

  function login(){
  const inpname=document.getElementById("username").value;
  const pass=document.getElementById("password").value;
  if (inpname === "admin" && pass === "123") {
    setCookie("loggedInUser", inpname, 3);

    document.getElementById("login-btn").style.display = "block";

    document.getElementById("username").textContent = inpname;

    document.getElementById("auth-form").style.display = "none";
  } else {

    alert("please enter a valid username or password");
  }
  }

  function logout() {
    deleteCookie("loggedInUser");
  
    document.getElementById("auth-form").style.display = "flex";
  
    document.getElementById("logout-btn").style.display = "none";
  }

  window.onload = function () {
    const loggedInAdmin = getCookie("loggedInUser");
  
    if (loggedInAdmin) {
      document.getElementById("logout-btn").style.display = "block";
  
      document.getElementById("username").textContent = loggedInAdmin;
  
      document.getElementById("auth-form").style.display = "none";
    }
  };
 
 function saveNote() {
            var note = document.getElementById("note-input").value;
            if (note.trim() !== "") {
                var existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
                existingNotes.push(note);
                localStorage.setItem("notes", JSON.stringify(existingNotes));
                document.getElementById("note-input").value = "";
                displayNotes();
            } else {
                alert("Please enter a note.");
            }
        }
        
  function displayNotes() {
            var noteList = document.getElementById("note-list");
            var notes = JSON.parse(localStorage.getItem("notes")) || [];
            noteList.innerHTML = "";
            notes.forEach(function(note, index) {
                var listItem = document.createElement("li");
                listItem.className = "note-item";
                listItem.innerHTML = note + '<button onclick="deleteNote(' + index + ')">Delete</button>';
                noteList.appendChild(listItem);
            });
        }
        
  function deleteNote(index) {
            var notes = JSON.parse(localStorage.getItem("notes")) || [];
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            displayNotes();
        }
        displayNotes();


 