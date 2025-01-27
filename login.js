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