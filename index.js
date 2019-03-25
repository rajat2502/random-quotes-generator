var quotes=[
  "It is better to fail in originality than to succeed in imitation.",
  "The road to success and the road to failure are almost exactly the same.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Would you like me to give you a formula for success? It's quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn't at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that's where you will find success.",
  "I cannot give you the formula for success, but I can give you the formula for failure--It is: Try to please everybody.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  "Success isn't just about what you accomplish in your life; it's about what you inspire others to do.",
  "Fall seven times and stand up eight.",
  "Some people dream of success while others wake up and work.",
  "If you can dream it, you can do it.",
  "The difference between who you are and who you want to be is what you do.",
  "A successful man is one who can lay a firm foundation with the bricks that other throw at him.",
  "In order to succeed, your desire for success should be greater than your fear of failure.",
];

function quotegenerator(){
  var random = Math.floor((Math.random() * 13) + 0);
  var i=0;
  var txt=quotes[random];
  document.querySelector("h1").innerHTML= quotes[random];
}
