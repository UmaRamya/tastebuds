var t=1;
function slideShow()
{
var img=document.getElementById("i1");
if(t==5)
t=1;
img.src="img-" + t +".jpg";
t += 1;
}
