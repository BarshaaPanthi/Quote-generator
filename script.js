const quotes = [
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. – Maya Angelou",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
    "The most common way people give up their power is by thinking they don’t have any. – Alice Walker",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. – Joshua J. Marine",
    "If opportunity doesn’t knock, build a door. – Milton Berle",
    "Don’t judge each day by the harvest you reap, but by the seeds that you plant. – Robert Louis Stevenson",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Anonymous",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
    "Your passion is waiting for your courage to catch up. – Isabelle Lafleche",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau"
];
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randomIndex];
}