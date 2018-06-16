//Global Variables
//ID divs ID='EmployeeName' / ID='Role' / ID='Data' / ID='Rate

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB6n1pm3PGn50UXsxzq89U6vwWKGsybclM",
    authDomain: "itchymonkey-ba898.firebaseapp.com",
    databaseURL: "https://itchymonkey-ba898.firebaseio.com",
    projectId: "itchymonkey-ba898",
    storageBucket: "itchymonkey-ba898.appspot.com",
    messagingSenderId: "239508967553"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values

    var Name = "";
    var Role = "";
    var StartDate = 0;
    var MonthsWorkd = 0;
    var MonthlyRate = 0;
    var TotalBilled = 0;


  // Capture Button Click
$("#submit").on("click", function(event) {
    console.log("You clicked the button")
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    //   <!--ID divs ID='EmployeeName' / ID='Role' / ID='Date' / ID='Rate-->
    console.log($("#EmployeeName").val())
    Name = $("#EmployeeName").val().trim();
    Role = $("#Role").val().trim();
    StartDate= $("#Date").val().trim();
    MonthlyRate = $("#Rate").val().trim();

    database.ref().push({
      Name: Name,
      Role: Role,
      StartDate: StartDate,
      MonthlyRate: MonthlyRate
    });

    DisplayData();
});

function DisplayData() {
  
    
    var DataOut = $("<td>");
    DataOut.attr("id", "EmployeeName")
   
    console.log(DataOut)
    $("#table").append(DataOut)




}

//functions

// on click watch
