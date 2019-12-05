/*Creating array of color*/
let colors = ["#000099", "#330099", "#660099", "#990099", "#CC0099", "#FF0099", 
"#003399", "#333399", "#663399", "#993399", "#CC3399", "#FF3399", "#006699", "#336699", "#666699",
"#996699", "#CC6699", "#FF6699", "#009999", "#339999", "#669999", "#999999", "#CC9999", "#FF9999", 
"#00CC99", "#33CC99", "#66CC99", "#99CC99", "#CCCC99", "#FFCC99", "#00FF99", "#33FF99", "#66FF99", "#99FF99", 
"#CCFF99", "#FFFF99" ];

let i =-1; //counter

/*selecting the part that the js will bring changes to*/
const bckcolor = document.querySelector('body');

/*Function*/
 function change() {
       bckcolor.style.backgroundColor = colors[++i % colors.length];
       let text = document.getElementById('Txt').innerHTML= ("This Hex color is: ") + colors[++i % colors.length];
 }