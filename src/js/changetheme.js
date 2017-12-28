document.getElementById('change-theme-btn').addEventListener('click', function() {

     bodyName = document.body.classList.toggle('dark-theme');
    var navLink = document.getElementsByClassName('nav-link');
    var switchTheme = document.getElementsByClassName('switch-theme');
    
    for(var i = 0; i < navLink.length; i++) {

        navLink[i].classList.toggle ("dark-theme");
     
    }

    for(var x =0; x < switchTheme.length; x++) {
        switchTheme[x].classList.toggle ("dark-theme");
    }
});

document.getElementById('button-lang-eng').addEventListener('click', function(){

    document.body.className = 'en';
});

document.getElementById('button-lang-nl').addEventListener('click', function(){
    
        document.body.className = document.body.className = 'nl';
    });