//import {initializeApp} from 'firebase/app'
//import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDE41WjjFbbFRA4a3rh5X9YvJcnThwq1Po",
  authDomain: "paps-7e451.firebaseapp.com",
  projectId: "paps-7e451",
  storageBucket: "paps-7e451.appspot.com",
  messagingSenderId: "660207257801",
  appId: "1:660207257801:web:191c1afb9b558cb2ab2518",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
  // Get all our input fields
  fname = document.getElementById("fname").value;
  mname = document.getElementById("mname").value;
  lname = document.getElementById("lname").value;
  bday = document.getElementById("bday").value;
  eid = document.getElementById("eid").value;
  password = document.getElementById("password").value;
  repass = document.getElementById("re-pass").value;
  email = document.getElementById("email").value;

  // Validate input fields
  if (validate_email(email) == false) {
    alert("Please enter a valid email.");
    return;
    // Don't continue running the code
  }

  if (validate_password(password) == false) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (
    validate_field(fname) == false ||
    validate_field(mname) == false ||
    validate_field(lname) == false ||
    validate_field(bday) == false ||
    validate_field(eid) == false ||
    validate_field(password) == false ||
    validate_field(repass) == false
  ) {
    alert("Please fill all fields.");
    return;
  }

  if (password != repass) {
    alert("Confirm password does not match the password.");
  }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var admin = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var admin_data = {
        email: email,
        firstName: fname,
        middleName: mname,
        lastName: lname,
        birthday: bday,
        employeeID: eid,
        last_login: new Date().toString(),
      };

      // Push to Firebase Database
      database_ref.child("admin/" + admin.uid).set(admin_data);

      // DOne
      alert("User Created. You can now login.");
      window.location.href = "login.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Outta Line!!");
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var admin = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var admin_data = {
        last_login: new Date().toString(),
      };

      // Push to Firebase Database
      database_ref.child("admin/" + admin.uid).update(admin_data);

      // DOne
      //var stringified = JSON.stringify(admin_data)
      //alert("Welcome" + database_ref.child('admin/' + admin.uid).get(stringified[Object.keys(stringified)[0]]))
      window.location.href = "adminDashboard.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}

function admindropdown() {
  window.addEventListener("load", () => {
    document.querySelectorAll(".hs-dropdown").forEach(($dropdownEl) => {
      HSDropdown.open($dropdownEl);
    });
  });
}
