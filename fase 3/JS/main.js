let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Medellín valle del software, la mejor ciudad para los desarrolladores en Colombia.')
  .pauseFor(200)
  .deleteChars(10)
  .start();