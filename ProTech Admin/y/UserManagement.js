


function AddUser(){
  var email = document.getElementById('Email').value;
  var  password = document.getElementById('Password1').value;
 

firebase.auth().createUserWithEmailAndPassword(email, password )
.then((userCredential) => {
  // Signed in 
 var database = firebase.database()
  var user = userCredential.user;
  var uid = user.uid;
  var Fname = document.getElementById('Fname').value;
  var Lname = document.getElementById('Lname').value;
  var Role = document.getElementById('Role').value;
  var timeStamp = Date.now();

    database.ref('Account/' + uid).set({
        Email : email,
        Password : password,
        UsetID: uid,
        Fname: Fname,
        Lname: Lname,
        Role: Role,
        TimeStamp:timeStamp,
        Status: "Active",
        ProfilePicURL:"https://firebasestorage.googleapis.com/v0/b/protech-project-aef56.appspot.com/o/Custodian_profile.jpg?alt=media&token=fc17c6a7-cfd2-4d2c-89f8-91ee791f6838"
    }) 


    $('#add').modal('hide');

            //notification success Add
            $(document).Toasts('create',{
            class: 'bg-success',
            body: 'Sucessfully add account',
            title: '<h5><i class="far fa-check-circle"></i> Alert</h5>',
            autohide: true,
            delay: 2000,
            }) 


})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ..
  window.alert(errorMessage,errorCode);
});

}
  