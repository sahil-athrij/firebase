/**
 * Created by sahil on 12/19/2017.
 */

var config = {
    apiKey: "AIzaSyAIxloswxrJeV-o5uuvvVNAkkJjRyN5jJg",
    authDomain: "busr-99a0d.firebaseapp.com",
    databaseURL: "https://busr-99a0d.firebaseio.com",
    projectId: "busr-99a0d",
    storageBucket: "busr-99a0d.appspot.com",
    messagingSenderId: "226311595601"
};
function writeUserData(userId, name, email) {
    firebase.database().ref('users/'+userId).set({
        username: name,
        email: email,
    });

}
read_data = 0
function readUserData(userId) {
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        username = (snapshot.val() && snapshot.val().email) || 'Anonymous';
        var doc = document.getElementById("sahil");
        doc.innerHTML = username;
        read_data = 1
    });
}

function readwebsite() {
        while(true){
            alert(read_data)
        }
}