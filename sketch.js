var marks = [35,38,42,45,43,34,46,41,48,32];
var i;
function setup() 
{
  createCanvas(400,400);
  for(i=0;i<10;i++){

    if(marks[i]>=45){

      console.log("Passou a posição " + i + "com nota:" + marks[i]);
    }

  }



}

function draw() 
{
  background(30);
}

 

