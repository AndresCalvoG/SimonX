const foto = document.getElementById('photo');

    if(btnEmpezar.classList.contains('hide')){
        btnEmpezar.classList.remove('hide'); 
    } else {
        btnEmpezar.classList.add('hide'); 
    }

    function authCuentaGoogle(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          foto.attr('src', result.user.photoURL);
          swal(`Hola ${result.user.displayName}!`,'Bienvenido a SimonX','success')
        //   /** @type {firebase.auth.OAuthCredential} */
        //   var credential = result.credential;
        //  // This gives you a Google Access Token. You can use it to access the Google API.
        //   var token = credential.accessToken;
        //   // The signed-in user info.
        //   var user = result.user;
        //   // ...
        }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        swal(`${errorMessage}!`,'Error','error')
        });
    }

