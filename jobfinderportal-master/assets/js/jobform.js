


const submit = document.getElementById('submit');
// let emails = " /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;"

submit.addEventListener('click', (e) => {

    e.preventDefault();
    validationMydata();
    // sendEmail();
    alert("Hello Form one time submit");
    // console.log(city.value);
});

function validationMydata(){
    const f_name = document.getElementById('f_name').value;
    const l_name = document.getElementById('l_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const city = document.getElementById('cities');
    const exp = document.getElementById('experience').value;
    const current_job = document.getElementById('current_job').value;
    const designation = document.getElementById('designation').value;
    const salary = document.getElementById('salary').value;
    const nationality = document.getElementById('nationality').value;
    const location = document.getElementById('location').value;
    const position = document.getElementById('position').value;
    const ctc = document.getElementById('ctc').value;
    const resume = document.getElementById('resume').value;

   if(!f_name){
        document.getElementById('msg1').textContent = "Please enter Your name"; 
        document.getElementById('msg1').style.color = "red"; 
    }

    if(!l_name){
    document.getElementById('msg2').textContent = "Please enter Your last name"; 
    document.getElementById('msg2').style.color = "red";
   }

    if(!email){
        document.getElementById('msg3').textContent = "Please enter email name"; 
        document.getElementById('msg3').style.color = "red";
   }

    if(!password){
        document.getElementById('msg4').textContent = "Please enter password name"; 
        document.getElementById('msg4').style.color = "red";
    }

    if(!contact){
        document.getElementById('msg5').textContent = "Please enter Your contact number"; 
        document.getElementById('msg5').style.color = "red";
    }

    if(!address){
        document.getElementById('msg6').textContent = "Please enter Your Address"; 
        document.getElementById('msg6').style.color = "red";
    }

    if(!dob){
        document.getElementById('msg7').textContent = "Please enter Your DOB"; 
        document.getElementById('msg7').style.color = "red";
    }

    if(!current_job){
        document.getElementById('msg11').textContent = "Please enter Your Job Company"; 
        document.getElementById('msg11').style.color = "red";
    }

    if(!designation){
        document.getElementById('msg12').textContent = "Please Enter Your Current Designation "; 
        document.getElementById('msg12').style.color = "red";
    }

    if(!salary){
        document.getElementById('msg13').textContent = "Please Enter Your Current Salary"; 
        document.getElementById('msg13').style.color = "red";
    }

    if(!nationality){
        document.getElementById('msg14').textContent = "Please Enter Your Nationality"; 
        document.getElementById('msg14').style.color = "red";
    }

    if(!location){
        document.getElementById('msg15').textContent = "Please Enter Your Preffer Job Location";
        document.getElementById('msg15').style.color = "red";
    }

    if(!position){
        document.getElementById('msg16').textContent = "please enter Which position you have applied";
        document.getElementById('msg16').style.color = "red";
    }

    if(!ctc){
        document.getElementById('msg17').textContent = "please enter Expected CTC";
        document.getElementById('msg17').style.color = "red";
    }

    if(!resume){
        document.getElementById('msg18').textContent = "please upload your resume";
        document.getElementById('msg18').style.color = "red";
    }

        
    const selectedValue = document.getElementById('cities').value;
    if(selectedValue.trim() !== '') {
        // Clear any previous error message
        document.getElementById('msg9').textContent = "";
    } else {
            document.getElementById('msg9').textContent = "Please select a city.";
    }

    //  
    
    if(!experience){
        document.getElementById('msg10').textContent = "Please select your current experience";
        document.getElementById('msg10').style.color = "red";
    }
  }



// <---Input Events part start here---> 

    document.getElementById('f_name').addEventListener('input', () => {
        if(!(!f_name)){
            document.getElementById('msg1').textContent = ""; 
        }
    });

    document.getElementById('l_name').addEventListener('input', () => {
        if(!(!l_name)){
            document.getElementById('msg2').textContent = ""; 
        
    }});

    document.getElementById('email').addEventListener('input', () => {
        if(!(!email)){
            document.getElementById('msg3').textContent = ""; 
        
    }});

    document.getElementById('password').addEventListener('input', () => {
        if(!(!password)){
            document.getElementById('msg4').textContent = ""; 
        
    }});

    document.getElementById('contact').addEventListener('input', () => {
        if(!(!contact)){
            document.getElementById('msg5').textContent = ""; 
        
    }});

    document.getElementById('address').addEventListener('input', () => {
        if(!(!address)){
            document.getElementById('msg6').textContent = ""; 
        
    }});

    document.getElementById('dob').addEventListener('input', () => {
        if(!(!address)){
            document.getElementById('msg7').textContent = ""; 
    }});

    document.getElementById('current_job').addEventListener('input', () => {
    if(!(!current_job)){
            document.getElementById('msg11').textContent = ""; 
    }});

    document.getElementById('designation').addEventListener('input', () => {
        if(!(!designation)){
         document.getElementById('msg12').textContent = ""; 
    }});

    document.getElementById('salary').addEventListener('input', () => {
        if(!(!salary)){
         document.getElementById('msg13').textContent = ""; 
    }});

    document.getElementById('nationality').addEventListener('input', () => {
        if(!(!nationality)){
         document.getElementById('msg14').textContent = ""; 
    }});

    document.getElementById('location').addEventListener('input', () => {
        if(!(!location)){
         document.getElementById('msg15').textContent = ""; 
    }});

    document.getElementById('position').addEventListener('input', () => {
        if(!(!position)){
         document.getElementById('msg16').textContent = ""; 
    }});

    document.getElementById('ctc').addEventListener('input', () => {
        if(!(!ctc)){
         document.getElementById('msg17').textContent = ""; 
    }});

    document.getElementById('resume').addEventListener('input', () => {
        if(!(!resume)){
         document.getElementById('msg18').textContent = ""; 
    }});

//    document.getElementById('cities').addEventListener('input', () => {
//         if(!(cities.value === "")){
//             document.getElementById('msg9').textContent = "";
//         }
//    })

// document.getElementById('cities').addEventListener('input', () => {
    
// });



// function validateCity(){
//     const city = document.getElementById('cities').value;
//     if(!(!city.value)){
//         document.getElementById('msg9').textContent = " ";
//     }
// }
    
city.addEventListener('input', validateCity);
 
  function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "murlidharfb@gmail.com",
        Password : "551A354EFBF406FC96BEA2931A5304B795F8",
        To : "murlidharfb@gmail.com",
        From :"murlidharfb@gmail.com",
        Subject : "Job Application",
        Body : "this is our body",
        Attachments : [
            {
                name : "resume",
                path : resume
            }]
    }).then(
      message => alert(message)
    );
};

