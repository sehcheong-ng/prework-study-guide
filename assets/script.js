var topic = "CSS";

if (topic === 'HTML'){
    console.log("Let's study HTML!");

} else if (topic === 'CSS') {
    console.log("Let's study CSS!");

} else if (topic === 'Git') {
    console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
} else {
    console.log('Please try again!');
} 


var shapes = ["triangle", "square", "pentagon", "circle"];

console.log(shapes);
console.log(shapes[2]);
    
for (i in shapes) {
    console.log(shapes[i]);
}

function listShapes(){
    for (var x = 0; x < shapes.length; x++) {
        console.log(shapes[x])
    }
}

listShapes();


var randomShapes = shapes[Math.floor(Math.random() * shapes.length)];

console.log(Math.floor(5.6));
console.log(Math.floor(5.4));

console.log(Math.random());