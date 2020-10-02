
// Make sure only numbers are input
function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }


// Storing into Firebase is here

// For subscribtion form
{
    // Listen for form submit
    form_sub = document.getElementById('subscribe-form');
    
    if(form_sub != null){
      form_sub.addEventListener('submit', subscribeUser);
    }

    // Reference messages collection(the table will have mesages)
    var subsRef = firebase.database().ref().child('subscribtion-list');

    // function to push subs
    function subscribeUser(e){
      e.preventDefault();

      // Get values 
      var email = getInputVal('sub-EMAIL');

      var newSubsRef = subsRef.push();
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;

      newSubsRef.set({
        dateTime:dateTime,
        email:email
      }, function(error){
        if(error){
          // Data write failed!
          document.getElementById('sub_fail_msg').style.display = 'block';
        
        } else {
          // Data Saved Successfully
          
          document.getElementById('subscribe-form').reset();

          document.getElementById('sub_success_msg').style.display = 'block';
        
        }
      });

          // Hide firebase_store_status after 3 seconds
          setTimeout(function(){
            document.getElementById('sub_success_msg').style.display = 'none';
            document.getElementById('sub_fail_msg').style.display = 'none';
          },4000);

    }
}

// For Contact Us form
{ 

  // Reference messages collection(the table will have mesages)
  var contactRef = firebase.database().ref().child('contact-us');

  // function to push subs
  function submitContact(e){
    e.preventDefault();

    var SuccessBoxId = 'cnt-fire-success';
    var FailBoxId = 'cnt-fire-fail';

    // Get values 
    var email = getInputVal('ct-email');
    var name = getInputVal('ct-name');
    var phone = getInputVal('ct-phone');
    var msg = getInputVal('ct-message');

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    var newcontactRef = contactRef.push();
    newcontactRef.set({
      dateTime:dateTime,
      name: name,
      email:email,
      phone: phone,
      msg:msg
    }, function(error){
      if(error){
        // Data write failed!
        document.getElementById(FailBoxId).style.display = 'block';
      
      } else {
        // Data Saved Successfully
        document.getElementById('contactForm_contact_us').reset();
        document.getElementById(SuccessBoxId).style.display = 'block';
      
      }
    });

        // Hide firebase_store_status after 3 seconds
        setTimeout(function(){
          document.getElementById(SuccessBoxId).style.display = 'none';
          document.getElementById(FailBoxId).style.display = 'none';
        },4000);

        return false; // This is to disable the default form action
  }
}

// For FAQ form
{
    
    // Reference messages collection(the table will have mesages)
    var FAQRef = firebase.database().ref().child('faqForm');

    // function to push subs
    function submitQuestion(e){
      e.preventDefault();
      
      var SuccessBoxId = 'faq-fire-success';
      var FailBoxId = 'faq-fire-fail';

      // Get values 
      var email = getInputVal('faq-email');
      var name = getInputVal('faq-name');
      var phone = getInputVal('faq-phone');
      var msg = getInputVal('faq-message');

      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;

      var newFAQRef = FAQRef.push();
      newFAQRef.set({
        dateTime:dateTime,
        name: name,
        email:email,
        phone: phone,
        msg:msg
      }, function(error){
        if(error){
          // Data write failed!
          document.getElementById(FailBoxId).style.display = 'block';
        
        } else {
          // Data Saved Successfully
          document.getElementById('faqForm').reset();
          document.getElementById(SuccessBoxId).style.display = 'block';
        
        }
      });

          // Hide firebase_store_status after 3 seconds
          setTimeout(function(){
            document.getElementById(SuccessBoxId).style.display = 'none';
            document.getElementById(FailBoxId).style.display = 'none';
          },4000);

          return false; // This is to disable the default form action
    }
}

// For Request Callback
{


// Reference messages collection(the table will have mesages)
var callBackRef = firebase.database().ref().child('callback-list');


// function to push subs
function submitCallback(e){
  e.preventDefault();

  var SuccessBoxId = 'rcb-fire-success';
  var FailBoxId = 'rcb-fire-fail';

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  // Get values 
  var email = getInputVal('rcb-email');
  var name = getInputVal('rcb-name');
  var phone = getInputVal('rcb-phone');

  var newcallBackRef = callBackRef.push();
  newcallBackRef.set({
    name: name,
    email:email,
    phone: phone,
    time:dateTime
  }, function(error){
    if(error){
      // Data write failed!
      document.getElementById(FailBoxId).style.display = 'block';

      // Hide firebase_store_status after 4 seconds
      setTimeout(function(){
        document.getElementById(FailBoxId).style.display = 'none';
      },4000);

    } else {
      // Data Saved Successfully
      document.getElementById('req_callback_form').reset();

      document.getElementById(SuccessBoxId).style.display = 'block';

      // Hide dialog after 4 seconds
      setTimeout(function(){
        $('#modalContactForm').modal('hide')
        document.getElementById(SuccessBoxId).style.display = 'none';
      },4000);

    }
  });
  
  return false; // This is to disable the default form action
}
}

// Order Form
{

  // Reference messages collection(the table will have mesages)
  var orderRef = firebase.database().ref().child('orders');
  
  var SuccessBoxId = 'ord-fire-success';
  var FailBoxId = 'ord-fire-fail';
  

  // function to push subs
  function submitOrder(e){
    e.preventDefault();
    // Get values 
    var email = getInputVal('ord-email');
    var name = getInputVal('ord-name');
    var phone = getInputVal('ord-phone');
    var msg = getInputVal('ord-message');
    var addr = getInputVal('ord-address');
    var budget = getInputVal('ord-budget')

    /*
    if (document.getElementById('budget1').checked) {
      budget = document.getElementById('budget1').value;
    }else if(document.getElementById('budget2').checked) {
      budget = document.getElementById('budget2').value;
    }else if(document.getElementById('budget3').checked) {
      budget = document.getElementById('budget3').value;
    }else if(document.getElementById('budget4').checked) {
      budget = document.getElementById('budget4').value;
    }
    */

   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var dateTime = date+' '+time;

    var neworderRef = orderRef.push();
    neworderRef.set({
      dateTime:dateTime,
      name: name,
      email:email,
      phone: phone,
      address:addr,
      budget:budget,
      msg:msg
    }, function(error){
      if(error){
        // Data write failed!
        document.getElementById(FailBoxId).style.display = 'block';
      
      } else {
        // Data Saved Successfully
        document.getElementById('order_Form').reset();
        document.getElementById(SuccessBoxId).style.display = 'block';
      }
    });

        // Hide firebase_store_status after 3 seconds
        setTimeout(function(){
          document.getElementById(SuccessBoxId).style.display = 'none';
          document.getElementById(FailBoxId).style.display = 'none';
        },4000);

        return false; // This is to disable the default form action
  }
}
