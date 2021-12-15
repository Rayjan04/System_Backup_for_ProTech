var firebaseConfig = {
  apiKey: "AIzaSyC5HqUCIRL8XB5X-IGLYg9RiuWCbtiErpY",
  authDomain: "protech-project-aef56.firebaseapp.com",
  projectId: "protech-project-aef56",
  storageBucket: "protech-project-aef56.appspot.com",
  messagingSenderId: "611528722799",
  appId: "1:611528722799:web:814c92195220387825009a",
  measurementId: "G-9B3L95C56G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//Data ready

firebase.auth().onAuthStateChanged(function(user) {
    var Not =document.getElementById("not-login")
    var yes =document.getElementById("login")
    if (user) {

      var uid = user.uid;

      database.ref('Account/'+ uid ).on('value',function(snapshot){
           var  Fname = snapshot.val().Fname;
           var  Lname = snapshot.val().Lname;
           var  Picture = snapshot.val().ProfilePicURL;

           document.getElementById("Profile").src = Picture;
           document.getElementById("UserName").innerHTML = Fname + " "+Lname;
      });

      
    }
     else {
       window.location.href ="index.html";
   
    }
  });

function logout()
{
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });


}


  function run() {
    document.getElementById("status").value = document.getElementById("Ultra").value;  
  }


       


      

  function openNoti(){

var database = firebase.database();
database.ref('Notification/Admin').once('value', function(snapshot){
   if(snapshot.exists()){
      var vehi_list = '';
         snapshot.forEach(function(data){
            var val = data.val();
            
            document.getElementById("NotificationNumB").innerHTML = " New Notification";
            vehi_list += '<a href="Add_product.html" class="dropdown-item"> <strong>'+ val.Action+'</strong> <span class="right badge badge-danger float-right">New</span> <br>  '+ val.name+' '+ val.item+'<span class="float-right text-muted text-sm"> '+ val.Date+'</span></a> <div class="dropdown-divider"></div>';
         });
             $('#Refresh').remove();
             $('#ListNotification').append('<div id="Refresh"> </div>');
             $('#Refresh').append(vehi_list);
           
}
});
  }
  
setTimeout(function(){
       

  var input, filter, table, tr, td, i, txtValue;    
  a = document.getElementById("search").value =  "Expired";
  input = document.getElementById("search");  
  filter = input.value.toUpperCase();
  table = document.getElementById("table4");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) { 
      
        tr[i].style.display = "show";
       
     $('#Notifications').modal('show');
     ew  = document.getElementById("NotificationNum").innerHTML;
     Notificationadd = Number(ew) + 1;
     
     document.getElementById("NotificationNum").innerHTML = Notificationadd;
     document.getElementById("NotificationNumB").innerHTML = " New Notification";

      }

  
      else {
        tr[i].style.display = "none";
        
      }    
     
    }  
  
  }
  if(Notificationadd != "0"){
       vehi_list = '<a href="Manage_Product.html" class="dropdown-item"> <strong>Alert</strong> <span class="right badge badge-danger float-right">New</span> <br>'+Notificationadd+'  Item expired  <span class="float-right text-muted text-sm">'+notification+'</span></a> <div class="dropdown-divider"></div>';
        $('#ShowNotification').append(vehi_list);
      } 

      
    },5000)

//--------------------custodian notifiacation----------------------------------
function openNoti(){

  var database = firebase.database().ref('Notification/Admin/');
  database.orderByChild('Timestamp').on('value',function (snapshot){
    if(snapshot.exists()){
       var vehi_list = '';
          snapshot.forEach(function(data){
             var val = data.val();
             
             document.getElementById("NotificationNumB").innerHTML = " New Notification";
             vehi_list += '<a href="Add_product.html" class="dropdown-item"> <strong>'+ val.Action+'</strong> <span class="right badge badge-danger float-right">New</span> <br>  '+ val.name+' '+ val.item+'<span class="float-right text-muted text-sm"> '+ val.Date+'</span></a> <div class="dropdown-divider"></div>';
          });
              $('#Refresh').remove();
              $('#ListNotification').append('<div id="Refresh"> </div>');
              $('#Refresh').append(vehi_list);
            
 }
 });
   }
