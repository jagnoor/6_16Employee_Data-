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

var objdata = {

    Name = "",
    Role = "",
    StartDate = 0,
    MonthsWorkd = 0,
    MonthlyRate = 0,
    TotalBilled = 0,

}
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
    objdata.Name = $("#EmployeeName").val().trim();
    objdata.Role = $("#Role").val().trim();
    object.StartDate= $("#Date").val().trim();
    object.MonthlyRate = $("#Rate").val().trim();

    database.ref().push({
      Name: objdata.Name,
      Role: objdata.Role,
      StartDate: objdata.StartDate,
      MonthlyRate: objdata.MonthlyRate
    });

    DisplayData();
});

function DisplayData() {
  
dataRef.ref().orderByChild("dataAdded").limitToLast(1).on("child_added", function(snapshot)){

    $("#EmployeeName").html(snapshot.val().name);
    $("#Role").html(snapshot.val().Role);
    $("#Date").html(snapshot.val().StartDate);
    $("#Rate").html(snapshot.val().MonthlyRate);

    $("#Date").html(snapshot.val().);
    $("#Rate").html(snapshot.val().MonthlyRate);
    
}


    // var DataOut = $("<tr>");

    // for (var i=0; i < objdata.legnth; i++){

    //     DataOut.attr("<td>")
       
    //     DataOut.append("Name);
    
    //     console.log(DataOut)

    //     $("#table").append(DataOut)
    // }



}

//functions

// on click watch


