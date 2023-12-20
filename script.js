let form=document.getElementById("btn");
function SubmitForm(){
	let firstName=document.getElementById("fname");
	let LastName=document.getElementById("lname");
	let phoneNumber=document.getElementById("pnum");
	let email=document.getElementById("email");
	alert("First Name:"+firstName.value+"\n Last Name:"+LastName.value+"\nPhoneNumber:"+phoneNumber.value+"\nEmail Id:"+email.value);
}
form.addEventListener("click",SubmitForm);

