export const getRandomName = () => {
    // Array of names
    var names = [
        "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Henry",
        "Isabel", "Jack", "Kate", "Liam", "Mia", "Noah", "Olivia", "Peter",
        "Quinn", "Rachel", "Sam", "Tara", "Uma", "Vincent", "Wendy", "Xavier",
        "Yara", "Zachary", "Nora", "Oscar", "Sophie"
      ];
  
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * names.length);
  
    // Return the random name
    return names[randomIndex];
  }

  export const getRandomMessage = () =>{
    // Array of messages
    var messages = [
      "Hello!",
      "How are you today?",
      "Have a great day!",
      "What's up?",
      "Coding is fun!",
      "Keep smiling!",
      "Enjoy your time!",
      "Stay positive!",
      "You're awesome!",
      "Never give up!",
      "Be kind to yourself!",
      "Dream big!",
      "Make it happen!",
      "Believe in yourself!",
      "Life is beautiful!",
      "Follow your dreams!",
      "You can do it!",
      "Stay motivated!",
      "Embrace the journey!",
      "Seize the day!",
      "Carpe diem!"
    ];
  
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * messages.length);
  
    // Return the random message
    return messages[randomIndex];
  }