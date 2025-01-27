document.getElementById('signup').addEventListener('click',function()
{
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let cpass=document.getElementById('cpass').value;
    let regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

    if(!email.includes("@"))
    {
        alert("Email is not valid.");
        return;
    }

    if(!regexp.test(password))
    {
        alert("Password must include an uppercase, lowercase and special character.");
        return;
    }

    if(password!==cpass)
    {
        alert("Password does not match.");
        return;
    }    

    alert("Signup successful")
    document.getElementById('signup-form').reset();
})
var password;
function pass()
{
    if(password==1)
    {
        document.getElementById('password').type='password'; 
        document.getElementById('pass-icon').src='hide.png';
        password=0;
    }
    else
    {
        document.getElementById('password').type='text'; 
        document.getElementById('pass-icon').src='open.png';
        password=1;
    }
}

var cpass;
function confirmpass()
{
    if(cpass==1)
    {
        document.getElementById('cpass').type='password'; 
        document.getElementById('confirm-pass-icon').src='hide.png';
        cpass=0;
    }
    else
    {
        document.getElementById('cpass').type='text'; 
        document.getElementById('confirm-pass-icon').src='open.png';
        cpass=1;
    }
}