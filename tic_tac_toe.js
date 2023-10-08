let tempx=[0,0,0,0,0,0,0,0,0],tempo=[0,0,0,0,0,0,0,0,0]
function check(c)
{
    let result=0;
    if (c%2)
    {
        result= (tempx[0] && ((tempx[1] && tempx[2]) || (tempx[4] && tempx[8]) || (tempx[3] && tempx[6]))) || (tempx[4] && ((tempx[2] && tempx[6]) || (tempx[1] && tempx[7]) || (tempx[3] && tempx[5]))) || (tempx[8] && ((tempx[2] && tempx[5]) || (tempx[6] && tempx[7])));
        if (result) return 'X';
    }
    else 
    {
        result=(tempo[0] && ((tempo[1] && tempo[2]) || (tempo[4] && tempo[8]) || (tempo[3] && tempo[6]))) || (tempo[4] && ((tempo[2] && tempo[6]) || (tempo[1] && tempo[7]) || (tempo[3] && tempo[5]))) || (tempo[8] && ((tempo[2] && tempo[5]) || (tempo[6] && tempo[7])));
        if (result) return 'O';
    }
    return 'Z'
}
let c=0;
function call(e,number)
{
    if (!tempx[number-1] && !tempo[number-1])
    {
        e.innerHTML=(c%2)?'<i class="fa-solid fa-x display-1 "></i>':'<i class="fa-solid fa-o display-1 "></i>';
        (c%2)?tempx[number-1]=1:tempo[number-1]=1;
        let hold=check(c); 
        c++;
        if (hold!='Z') 
        {
            document.getElementById('Winner').innerHTML=`${hold} is the Winner`;
            setTimeout(() => {
                location.reload();
            },1000);
        }
        else if (c==9)
        {
            document.getElementById('Winner').innerHTML="Game over, Match was drawn";
            setTimeout(() => {
                c=0;
                location.reload();
            }, 1000);
        }
    }
}