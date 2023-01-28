function circle(){
    var count = 200;
    var section = document.querySelector('section');
    var i = 0;
    while(i < count){
        var circle = document.createElement('i')
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);

        var size = Math.random() * 10;
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.width = 1 + size + 'px';
        circle.style.height = 1 + size + 'px';
        circle.style.animationDuration = 5 + size + 's';
        circle.style.animationDelay = - size + 's';
        section.appendChild(circle);
        i++
    }
}
circle()