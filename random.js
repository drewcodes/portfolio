$(document).ready(function() {
  function quotemachine() {
    var quotes = ["The best preparation for tomorrow is doing your best today. !H. Jackson Brown", "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. !Helen Keller", "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. !Jimmy Dean", "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. !Francis of Assisi", "Perfection is not attainable, but if we chase perfection we can catch excellence. !Vince Lombardi", "We must let go of the life we have planned, so as to accept the one that is waiting for us. ! Joseph Campbell", "Try to be a rainbow in someone's cloud. !Maya Angelou", "Nothing is impossible, the word itself says 'I'm possible' !Audrey Hepburn", "We know what we are, but know not what we may be. !William Shakespeare","If opportunity doesn't knock, build a door. !Milton Berle", "Change your thoughts and you change your world. !Norman Vincent Peale", "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. !Steve Jobs"];

    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteAuthor = randomQuote.split("!");
    $(".saying").text(quoteAuthor[0]);
    $(".author").text(quoteAuthor[1]);
  }
  $(".button").click(function() {
    quotemachine();
  });
});
