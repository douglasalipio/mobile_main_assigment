function getPhoto(){

    navigator.camera.getPicture(cameraCallback, onError);

}

function cameraCallback(imageData){
    var image = document.getElementById('myImage');
    image.src = imageData;
    //image.scr = "data:image/jpeg;base64,"+ imageData;
    
}

function onError(msg){
    alert('Failed: ' + message);
}