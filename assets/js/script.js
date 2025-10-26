// Smooth scroll for nav links
(function(){
document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
anchor.addEventListener('click',function(e){
var target = document.querySelector(this.getAttribute('href'));
if(target){
e.preventDefault();
window.scrollTo({top: target.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth'});
}
});
});


// Mobile nav toggle
var toggle = document.getElementById('nav-toggle');
toggle && toggle.addEventListener('click', function(){
var nav = document.querySelector('.nav');
if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
});


// IntersectionObserver reveal
var observer = new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.classList.add('revealed');
}
});
},{threshold: 0.12});


document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });


// Small interactive effect for project cards: tilt on mousemove
document.querySelectorAll('.project-card').forEach(function(card){
card.addEventListener('mousemove', function(e){
var rect = card.getBoundingClientRect();
var x = e.clientX - rect.left; var y = e.clientY - rect.top;
var cx = rect.width/2; var cy = rect.height/2;
var dx = (x - cx) / cx; var dy = (y - cy) / cy;
card.style.transform = 'rotateX(' + (dy * -3) + 'deg) rotateY(' + (dx * 6) + 'deg) translateY(-6px)';
});
card.addEventListener('mouseleave', function(){ card.style.transform = ''; });
});


// Small floating animation for hero card
var hc = document.querySelector('.hero-card');
if(hc){
var t = 0;
function floatCard(){
t += 0.01;
hc.style.transform = 'translateY(' + Math.sin(t) * 6 + 'px)';
requestAnimationFrame(floatCard);
}
requestAnimationFrame(floatCard);
}


})();