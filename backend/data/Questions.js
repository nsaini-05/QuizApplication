const questions = [
  {
    question:
      'A flashing red traffic light signifies that a driver should do what?',
    options: [
      { label: 'A', value: 'stop', isCorrect: true },
      { label: 'B', value: 'speed up', isCorrect: false },
      { label: 'C', value: 'proceed with caution', isCorrect: false },
      { label: 'D', value: 'honk the horn', isCorrect: false }
    ]
  },
  {
    question: 'A knish is traditionally stuffed with what filling?',
    options: [
      { label: 'A', value: 'potato', isCorrect: true },
      { label: 'B', value: 'creamed corn', isCorrect: false },
      { label: 'C', value: 'lemon custard', isCorrect: false },
      { label: 'D', value: 'raspberry jelly', isCorrect: false }
    ]
  },
  {
    question: 'A pita is a type of what?',
    options: [
      { label: 'A', value: 'fresh fruit', isCorrect: false },
      { label: 'B', value: 'flat bread', isCorrect: true },
      { label: 'C', value: 'French tart', isCorrect: false },
      { label: 'D', value: 'friend bean dip', isCorrect: false }
    ]
  },
  {
    question:
      "A portrait that comically exaggerates a person's physical traits is called a what?",
    options: [
      { label: 'A', value: 'landscape', isCorrect: false },
      { label: 'B', value: 'caricature', isCorrect: true },
      { label: 'C', value: 'still life', isCorrect: false },
      { label: 'D', value: 'Impressionism', isCorrect: false }
    ]
  },
  {
    question: 'A second-year college student is usually called a what?',
    options: [
      { label: 'A', value: 'sophomore', isCorrect: true },
      { label: 'B', value: 'senior', isCorrect: false },
      { label: 'C', value: 'freshman ', isCorrect: false },
      { label: 'D', value: 'junior ', isCorrect: false }
    ]
  },
  {
    question:
      'A student who earns a J.D. can begin his or her career as a what?',
    options: [
      { label: 'A', value: 'lawyer', isCorrect: true },
      { label: 'B', value: 'bricklayer', isCorrect: false },
      { label: 'C', value: 'doctor', isCorrect: false },
      { label: 'D', value: 'accountant', isCorrect: false }
    ]
  },
  {
    question: 'A triptych is a work of art that is painted on how many panels?',
    options: [
      { label: 'A', value: 'two', isCorrect: false },
      { label: 'B', value: 'three', isCorrect: true },
      { label: 'C', value: 'five', isCorrect: false },
      { label: 'D', value: 'eight', isCorrect: false }
    ]
  },
  {
    question:
      "According to a famous line from the existentialist play 'No Exit' what is hell?",
    options: [
      { label: 'A', value: 'oneself', isCorrect: false },
      { label: 'B', value: 'other people', isCorrect: true },
      { label: 'C', value: 'little made large', isCorrect: false },
      { label: 'D', value: 'hued in green and blue', isCorrect: false }
    ]
  },
  {
    question:
      "According to a popular slogan, what state should people not 'mess with'?",
    options: [
      { label: 'A', value: 'New York', isCorrect: false },
      { label: 'B', value: 'Texas', isCorrect: true },
      { label: 'C', value: 'Montana', isCorrect: false },
      { label: 'D', value: 'Rhode Island', isCorrect: false }
    ]
  },
  {
    question:
      'According to a Yale University study, what smell is the most recognizable to American adults?',
    options: [
      { label: 'A', value: 'tuna', isCorrect: false },
      { label: 'B', value: 'laundry', isCorrect: false },
      { label: 'C', value: 'popcorn', isCorrect: false },
      { label: 'D', value: 'coffee', isCorrect: true }
    ]
  },
  {
    question:
      "According to folklore, the 'jackalope' is an antlered version of what animal?",
    options: [
      { label: 'A', value: 'chicken', isCorrect: false },
      { label: 'B', value: 'rabbit', isCorrect: true },
      { label: 'C', value: 'moose', isCorrect: false },
      { label: 'D', value: 'snake', isCorrect: false }
    ]
  },
  {
    question: "According to Greek mythology, who was Apollo's twin sister?",
    options: [
      { label: 'A', value: 'Aphrodite', isCorrect: false },
      { label: 'B', value: 'Artemis', isCorrect: true },
      { label: 'C', value: 'Venus', isCorrect: false },
      { label: 'D', value: 'Athena', isCorrect: false }
    ]
  },
  {
    question:
      "According to legend, if you give someone the 'evil eye' what are you doing?",
    options: [
      { label: 'A', value: 'cursing them', isCorrect: true },
      { label: 'B', value: 'blessing a child', isCorrect: false },
      { label: 'C', value: 'counting money', isCorrect: false },
      { label: 'D', value: 'passing time', isCorrect: false }
    ]
  },
  {
    question:
      'According to legend, in what country are you most likely to meet a leprechaun?',
    options: [
      { label: 'A', value: 'Ireland', isCorrect: true },
      { label: 'B', value: 'Poland', isCorrect: false },
      { label: 'C', value: 'Greenland', isCorrect: false },
      { label: 'D', value: 'Scotland', isCorrect: false }
    ]
  },
  {
    question:
      'According to the American Kennel Club, what is the most popular breed of dog in the US as of 1999?',
    options: [
      { label: 'A', value: 'Poodle', isCorrect: false },
      { label: 'B', value: 'Beagle', isCorrect: false },
      { label: 'C', value: 'German shepherd', isCorrect: false },
      { label: 'D', value: 'Labrador retriever', isCorrect: true }
    ]
  },
  {
    question:
      'According to the Bible, Moses and Aaron had a sister named what?',
    options: [
      { label: 'A', value: 'Jochebed', isCorrect: false },
      { label: 'B', value: 'Ruth', isCorrect: false },
      { label: 'C', value: 'Leah', isCorrect: false },
      { label: 'D', value: 'Miriam', isCorrect: true }
    ]
  },
  {
    question:
      "According to the children's nursery rhyme, what type of ocean did Columbus sail in 1492?",
    options: [
      { label: 'A', value: 'calm', isCorrect: false },
      { label: 'B', value: 'blue', isCorrect: true },
      { label: 'C', value: 'windy', isCorrect: false },
      { label: 'D', value: 'really big', isCorrect: false }
    ]
  },
  {
    question:
      'According to the Mother Goose nursery rhyme, which child is full of woe?',
    options: [
      { label: 'A', value: "Monday's child", isCorrect: false },
      { label: 'B', value: "Wednesday's child", isCorrect: true },
      { label: 'C', value: "Thursday's child", isCorrect: false },
      { label: 'D', value: "Saturday's child", isCorrect: false }
    ]
  },
  {
    question:
      "According to the popular saying, what should you do 'when in Rome'?",
    options: [
      { label: 'A', value: 'watch your wallet', isCorrect: false },
      { label: 'B', value: 'see the Coliseum', isCorrect: false },
      { label: 'C', value: 'as the Romans do', isCorrect: true },
      { label: 'D', value: "don't drink the water", isCorrect: false }
    ]
  },
  {
    question: 'According to the proverb, necessity is the mother of what?',
    options: [
      { label: 'A', value: 'Invention', isCorrect: true },
      { label: 'B', value: 'Luck', isCorrect: false },
      { label: 'C', value: 'Problems', isCorrect: false },
      { label: 'D', value: 'Procrastination', isCorrect: false }
    ]
  },
  {
    question:
      "According to the title of a popular children's TV show, what color is Bear's big house?",
    options: [
      { label: 'A', value: 'red', isCorrect: false },
      { label: 'B', value: 'green', isCorrect: false },
      { label: 'C', value: 'purple', isCorrect: false },
      { label: 'D', value: 'blue', isCorrect: true }
    ]
  },
  {
    question:
      'According to the USDA, which food group should you eat the most servings of per day?',
    options: [
      { label: 'A', value: 'vegetables', isCorrect: false },
      { label: 'B', value: 'dairy', isCorrect: false },
      { label: 'C', value: 'meats', isCorrect: false },
      { label: 'D', value: 'breads', isCorrect: true }
    ]
  },
  {
    question:
      'Ada Lovelace is credited with being the first person to have made what?',
    options: [
      { label: 'A', value: 'a computer program', isCorrect: true },
      { label: 'B', value: 'a souffle', isCorrect: false },
      { label: 'C', value: 'a brassiere', isCorrect: false },
      { label: 'D', value: 'a mystery novel', isCorrect: false }
    ]
  },
  {
    question:
      'After Prince Charles, who is next in line to be the king of England?',
    options: [
      { label: 'A', value: 'Prince William', isCorrect: true },
      { label: 'B', value: 'Prince Andrew', isCorrect: false },
      { label: 'C', value: 'Prince Edward', isCorrect: false },
      { label: 'D', value: 'Fresh Prince', isCorrect: false }
    ]
  },
  {
    question: "An airplane's black box is usually what color?",
    options: [
      { label: 'A', value: 'black', isCorrect: false },
      { label: 'B', value: 'white', isCorrect: false },
      { label: 'C', value: 'orange', isCorrect: true },
      { label: 'D', value: 'purple', isCorrect: false }
    ]
  },
  {
    question: 'As of 1999, which state has the most Girl Scouts?',
    options: [
      { label: 'A', value: 'California', isCorrect: true },
      { label: 'B', value: 'Illinois', isCorrect: false },
      { label: 'C', value: 'New York', isCorrect: false },
      { label: 'D', value: 'Pennsylvania', isCorrect: false }
    ]
  },
  {
    question:
      'Astronaut John Glenn served as a pilot in what branch of the military?',
    options: [
      { label: 'A', value: 'Army', isCorrect: false },
      { label: 'B', value: 'Air Force', isCorrect: false },
      { label: 'C', value: 'Marines', isCorrect: true },
      { label: 'D', value: 'Navy', isCorrect: false }
    ]
  },
  {
    question: "At the equator, how fast is the earth's surface turning?",
    options: [
      { label: 'A', value: 'about 100 miles per hour', isCorrect: false },
      { label: 'B', value: 'about 500 miles per hour', isCorrect: false },
      { label: 'C', value: 'about 1000 miles per hour', isCorrect: true },
      { label: 'D', value: 'about 2000 miles per hour', isCorrect: false }
    ]
  },
  {
    question:
      'At what age can someone first attend an R-rated movie without an accompanying adult?',
    options: [
      { label: 'A', value: '15', isCorrect: false },
      { label: 'B', value: '17', isCorrect: false },
      { label: 'C', value: '18', isCorrect: true },
      { label: 'D', value: '21', isCorrect: false }
    ]
  },
  {
    question: 'Backgammon is a how many player game?',
    options: [
      { label: 'A', value: 'Two', isCorrect: true },
      { label: 'B', value: 'Three', isCorrect: false },
      { label: 'C', value: 'Four', isCorrect: false },
      { label: 'D', value: 'Six', isCorrect: false }
    ]
  },
  {
    question:
      'Before he went into coaching, Phil Jackson played for which of the following NBA teams?',
    options: [
      { label: 'A', value: 'Boston Celtics', isCorrect: false },
      { label: 'B', value: 'Los Angeles Lakers', isCorrect: false },
      { label: 'C', value: 'New York Knicks', isCorrect: true },
      { label: 'D', value: 'Philadelphia 76ers', isCorrect: false }
    ]
  },
  {
    question: 'By what name is Bob Keeshan better known?',
    options: [
      { label: 'A', value: 'Bozo the Clown', isCorrect: false },
      { label: 'B', value: 'Pee Wee Herman', isCorrect: false },
      { label: 'C', value: 'Captain Kangaroo', isCorrect: true },
      { label: 'D', value: 'Buffalo Bob', isCorrect: false }
    ]
  },
  {
    question:
      'By what collective name do Christians refer to God the Father, God the Son and the Holy Ghost?',
    options: [
      { label: 'A', value: 'the Trio', isCorrect: false },
      { label: 'B', value: 'the Troika', isCorrect: false },
      { label: 'C', value: 'the Triumvirate', isCorrect: false },
      { label: 'D', value: 'the Trinity', isCorrect: true }
    ]
  },
  {
    question:
      'By what nickname is the Federal National Mortgage Association known?',
    options: [
      { label: 'A', value: 'Morty', isCorrect: false },
      { label: 'B', value: 'FEMA', isCorrect: false },
      { label: 'C', value: 'Freddie Mac', isCorrect: false },
      { label: 'D', value: 'Fannie Mae', isCorrect: true }
    ]
  },
  {
    question: 'Cheddar cheese got its name from a village in what country?',
    options: [
      { label: 'A', value: 'England', isCorrect: true },
      { label: 'B', value: 'France', isCorrect: false },
      { label: 'C', value: 'Switzerland', isCorrect: false },
      { label: 'D', value: 'Denmark', isCorrect: false }
    ]
  },
  {
    question: 'Cheese is a necessary ingredient in which of these dishes?',
    options: [
      { label: 'A', value: 'sushi', isCorrect: false },
      { label: 'B', value: 'french fries', isCorrect: false },
      { label: 'C', value: 'veal parmigiano', isCorrect: true },
      { label: 'D', value: 'chicken pot pie', isCorrect: false }
    ]
  },
  {
    question:
      "During what war did Francis Scott Key write the words to 'The Star-Spangled Banner'?",
    options: [
      { label: 'A', value: 'American Revolution', isCorrect: false },
      { label: 'B', value: 'War of 1812', isCorrect: true },
      { label: 'C', value: 'Civil War', isCorrect: false },
      { label: 'D', value: 'World War I', isCorrect: false }
    ]
  },
  {
    question: 'During which war did US troops fight the Battle of New Orleans?',
    options: [
      { label: 'A', value: 'American Revolution', isCorrect: false },
      { label: 'B', value: 'Civil War', isCorrect: false },
      { label: 'C', value: 'Mexican War', isCorrect: false },
      { label: 'D', value: 'War of 1812', isCorrect: true }
    ]
  },
  {
    question:
      'Each year in pro baseball, the player voted as the best fielder at his position wins what?',
    options: [
      { label: 'A', value: 'a brand new car', isCorrect: false },
      { label: 'B', value: 'the Gold Glove', isCorrect: true },
      { label: 'C', value: 'the Silver Bat', isCorrect: false },
      { label: 'D', value: 'the Brass Baseball', isCorrect: false }
    ]
  },
  {
    question: 'Elephant tusks are made of what material?',
    options: [
      { label: 'A', value: 'coral', isCorrect: false },
      { label: 'B', value: 'ivory', isCorrect: true },
      { label: 'C', value: 'bone', isCorrect: false },
      { label: 'D', value: 'calcium', isCorrect: false }
    ]
  },
  {
    question: 'Excluding wisdom teeth, how many adult teeth do humans have?',
    options: [
      { label: 'A', value: '28', isCorrect: true },
      { label: 'B', value: '32', isCorrect: false },
      { label: 'C', value: '35', isCorrect: false },
      { label: 'D', value: '40', isCorrect: false }
    ]
  },
  {
    question: "For a man and woman on a date, 'dutch treat' means what?",
    options: [
      { label: 'A', value: 'the man pays', isCorrect: false },
      { label: 'B', value: 'the woman pays', isCorrect: false },
      { label: 'C', value: 'the Dutch pay', isCorrect: false },
      { label: 'D', value: 'each pays their own way', isCorrect: true }
    ]
  },
  {
    question: 'For what purpose would you use an awl?',
    options: [
      { label: 'A', value: 'to shoot ducks', isCorrect: false },
      { label: 'B', value: 'to polish floors', isCorrect: false },
      { label: 'C', value: 'to make holes', isCorrect: true },
      { label: 'D', value: 'to weigh fruit', isCorrect: false }
    ]
  },
  {
    question:
      'From 1971 to 1997, the Democratic Republic of Congo was known as what?',
    options: [
      { label: 'A', value: 'Zaire', isCorrect: true },
      { label: 'B', value: 'Angola', isCorrect: false },
      { label: 'C', value: 'Rhodesia', isCorrect: false },
      { label: 'D', value: 'Belgian Congo', isCorrect: false }
    ]
  },
  {
    question: "From what language does the term 'R.S.V.P.' originate?",
    options: [
      { label: 'A', value: 'Russian', isCorrect: false },
      { label: 'B', value: 'Italian', isCorrect: false },
      { label: 'C', value: 'Portuguese', isCorrect: false },
      { label: 'D', value: 'French', isCorrect: true }
    ]
  },
  {
    question: 'From whom does the Lutheran Church get its name?',
    options: [
      { label: 'A', value: 'Martin Luther King Jr', isCorrect: false },
      { label: 'B', value: 'Martin Luther', isCorrect: true },
      { label: 'C', value: 'Luther Vandross', isCorrect: false },
      { label: 'D', value: 'Lex Luthor', isCorrect: false }
    ]
  },
  {
    question: 'Gerry Adams is the president of what organization?',
    options: [
      { label: 'A', value: 'Greenpeace', isCorrect: false },
      { label: 'B', value: 'NASCAR', isCorrect: false },
      { label: 'C', value: 'Sinn Fein', isCorrect: true },
      { label: 'D', value: 'PLO', isCorrect: false }
    ]
  },
  {
    question: 'Girls of what religious community traditionally wear bonnets?',
    options: [
      { label: 'A', value: 'Amish', isCorrect: true },
      { label: 'B', value: 'Sikh', isCorrect: false },
      { label: 'C', value: 'Roman Catholic', isCorrect: false },
      { label: 'D', value: 'Christian', isCorrect: false }
    ]
  },
  {
    question: 'How are actors Charlie Sheen and Emilio Estevez related?',
    options: [
      { label: 'A', value: "they're cousins", isCorrect: false },
      { label: 'B', value: "they're brothers", isCorrect: true },
      { label: 'C', value: "they're father and son", isCorrect: false },
      { label: 'D', value: "they're uncle and nephew", isCorrect: false }
    ]
  },
  {
    question: 'How do you express 3/4 as a decimal?',
    options: [
      { label: 'A', value: '.25', isCorrect: false },
      { label: 'B', value: '.50', isCorrect: false },
      { label: 'C', value: '.75', isCorrect: true },
      { label: 'D', value: '.90', isCorrect: false }
    ]
  },
  {
    question: 'How is 4:00 pm expressed in military time?',
    options: [
      { label: 'A', value: '1600', isCorrect: true },
      { label: 'B', value: '004', isCorrect: false },
      { label: 'C', value: '0400 ', isCorrect: false },
      { label: 'D', value: '4:00', isCorrect: false }
    ]
  },
  {
    question: "How is the Arabic numeral for '2' written?",
    options: [
      { label: 'A', value: '2', isCorrect: true },
      { label: 'B', value: 'II', isCorrect: false },
      { label: 'C', value: 'I', isCorrect: false },
      { label: 'D', value: 'ii', isCorrect: false }
    ]
  },
  {
    question:
      "How is the word 'ambulance' normally written on the front of American ambulances?",
    options: [
      { label: 'A', value: 'in French', isCorrect: false },
      { label: 'B', value: 'in reverse', isCorrect: true },
      { label: 'C', value: 'in braille', isCorrect: false },
      { label: 'D', value: 'in gibberish', isCorrect: false }
    ]
  },
  {
    question: 'How long is a single term in the US Senate?',
    options: [
      { label: 'A', value: 'two years', isCorrect: false },
      { label: 'B', value: 'four years', isCorrect: false },
      { label: 'C', value: 'six years', isCorrect: true },
      { label: 'D', value: 'eight years', isCorrect: false }
    ]
  },
  {
    question: 'How long is the time on an NBA shot clock?',
    options: [
      { label: 'A', value: '18 seconds', isCorrect: false },
      { label: 'B', value: '24 seconds', isCorrect: true },
      { label: 'C', value: '30 seconds', isCorrect: false },
      { label: 'D', value: '35 seconds', isCorrect: false }
    ]
  },
  {
    question: 'How many $100 bills does it take to equal one million dollars?',
    options: [
      { label: 'A', value: 'one thousand', isCorrect: false },
      { label: 'B', value: 'five thousand', isCorrect: false },
      { label: 'C', value: 'ten thousand', isCorrect: true },
      { label: 'D', value: 'one hundred thousand', isCorrect: false }
    ]
  },
  {
    question: 'How many axles does a standard automobile have?',
    options: [
      { label: 'A', value: 'one', isCorrect: false },
      { label: 'B', value: 'two', isCorrect: true },
      { label: 'C', value: 'four', isCorrect: false },
      { label: 'D', value: 'eight', isCorrect: false }
    ]
  },
  {
    question: 'How many digits are in a standard Visa credit card number?',
    options: [
      { label: 'A', value: '12', isCorrect: false },
      { label: 'B', value: '15', isCorrect: false },
      { label: 'C', value: '16', isCorrect: true },
      { label: 'D', value: '20', isCorrect: false }
    ]
  },
  {
    question: 'How many eyes does a Giraffe have?',
    options: [
      { label: 'A', value: 'one', isCorrect: false },
      { label: 'B', value: 'two', isCorrect: true },
      { label: 'C', value: 'three', isCorrect: false },
      { label: 'D', value: 'four', isCorrect: false }
    ]
  },
  {
    question:
      'How many innings are there in a regular Major League Baseball game?',
    options: [
      { label: 'A', value: 'seven', isCorrect: false },
      { label: 'B', value: 'eight', isCorrect: false },
      { label: 'C', value: 'nine', isCorrect: true },
      { label: 'D', value: 'ten', isCorrect: false }
    ]
  },
  {
    question: 'How many keys are on a standard piano?',
    options: [
      { label: 'A', value: '20', isCorrect: false },
      { label: 'B', value: '54', isCorrect: false },
      { label: 'C', value: '88', isCorrect: true },
      { label: 'D', value: '100', isCorrect: false }
    ]
  },
  {
    question: 'How many men has actress Elizabeth Taylor been divorced from?',
    options: [
      { label: 'A', value: 'five', isCorrect: false },
      { label: 'B', value: 'six', isCorrect: false },
      { label: 'C', value: 'seven', isCorrect: true },
      { label: 'D', value: 'eight', isCorrect: false }
    ]
  },
  {
    question: 'How many ounces are in a pound?',
    options: [
      { label: 'A', value: '4', isCorrect: false },
      { label: 'B', value: '12', isCorrect: false },
      { label: 'C', value: '16', isCorrect: true },
      { label: 'D', value: '32', isCorrect: false }
    ]
  },
  {
    question: 'How many periods are there in an ice hockey game?',
    options: [
      { label: 'A', value: 'One', isCorrect: false },
      { label: 'B', value: 'Two', isCorrect: false },
      { label: 'C', value: 'Three', isCorrect: true },
      { label: 'D', value: 'Four', isCorrect: false }
    ]
  },
  {
    question: 'How many quarts are there in a gallon?',
    options: [
      { label: 'A', value: 'one', isCorrect: false },
      { label: 'B', value: 'two', isCorrect: false },
      { label: 'C', value: 'three', isCorrect: false },
      { label: 'D', value: 'four', isCorrect: true }
    ]
  },
  {
    question: 'How many ribs are there in the human body?',
    options: [
      { label: 'A', value: '18', isCorrect: false },
      { label: 'B', value: '24', isCorrect: true },
      { label: 'C', value: '30', isCorrect: false },
      { label: 'D', value: '42', isCorrect: false }
    ]
  },
  {
    question:
      'How many ships did Columbus set sail with on his initial voyage to the New World?',
    options: [
      { label: 'A', value: 'Two', isCorrect: false },
      { label: 'B', value: 'Three', isCorrect: true },
      { label: 'C', value: 'Five', isCorrect: false },
      { label: 'D', value: 'Ten', isCorrect: false }
    ]
  },
  {
    question: "How many spikes are on the Statue of Liberty's crown?",
    options: [
      { label: 'A', value: 'five', isCorrect: false },
      { label: 'B', value: 'seven', isCorrect: true },
      { label: 'C', value: 'nine', isCorrect: false },
      { label: 'D', value: 'thirteen', isCorrect: false }
    ]
  },
  {
    question: 'How many stars are on the American flag?',
    options: [
      { label: 'A', value: '13', isCorrect: false },
      { label: 'B', value: '48', isCorrect: false },
      { label: 'C', value: '50', isCorrect: true },
      { label: 'D', value: '51', isCorrect: false }
    ]
  },
  {
    question: 'How many states were in the Confederate States of America?',
    options: [
      { label: 'A', value: '11', isCorrect: true },
      { label: 'B', value: '13', isCorrect: false },
      { label: 'C', value: '16', isCorrect: false },
      { label: 'D', value: '22', isCorrect: false }
    ]
  },
  {
    question:
      'How much does Peanuts character Lucy charge for her psychiatric advice?',
    options: [
      { label: 'A', value: '5 cents', isCorrect: true },
      { label: 'B', value: '10 cents', isCorrect: false },
      { label: 'C', value: '75 cents', isCorrect: false },
      { label: 'D', value: '$125', isCorrect: false }
    ]
  },
  {
    question: 'How long is Hanukkah?',
    options: [
      { label: 'A', value: 'one day', isCorrect: false },
      { label: 'B', value: 'five days', isCorrect: false },
      { label: 'C', value: 'eight days', isCorrect: true },
      { label: 'D', value: 'two weeks', isCorrect: false }
    ]
  },
  {
    question: 'Huffy, Schwinn and Raleigh are all brands of what?',
    options: [
      { label: 'A', value: 'sportswear', isCorrect: false },
      { label: 'B', value: 'dishwashers', isCorrect: false },
      { label: 'C', value: 'cigarettes', isCorrect: false },
      { label: 'D', value: 'bicycles', isCorrect: true }
    ]
  },
  {
    question: 'If a business files under Chapter 11 what is it doing?',
    options: [
      { label: 'A', value: 'declaring bankruptcy', isCorrect: true },
      { label: 'B', value: 'selling stock', isCorrect: false },
      { label: 'C', value: 'buying a smaller', isCorrect: false },
      { label: 'D', value: 'company suing the government', isCorrect: false }
    ]
  },
  {
    question:
      "If a piece of music is in 'common time' how many quarter notes are there per measure?",
    options: [
      { label: 'A', value: 'one', isCorrect: false },
      { label: 'B', value: 'four', isCorrect: true },
      { label: 'C', value: 'five', isCorrect: false },
      { label: 'D', value: 'ten', isCorrect: false }
    ]
  },
  {
    question:
      'If a ring has the number 925 stamped into it, it is most likely made of what material?',
    options: [
      { label: 'A', value: 'platinum', isCorrect: false },
      { label: 'B', value: 'gold', isCorrect: false },
      { label: 'C', value: 'steel', isCorrect: false },
      { label: 'D', value: 'silver', isCorrect: true }
    ]
  },
  {
    question:
      "If Christmas Day is on a Saturday, then the following New Year's Day falls on what day of the week?",
    options: [
      { label: 'A', value: 'Sunday', isCorrect: false },
      { label: 'B', value: 'Monday', isCorrect: false },
      { label: 'C', value: 'Friday', isCorrect: false },
      { label: 'D', value: 'Saturday', isCorrect: true }
    ]
  },
  {
    question:
      'If someone has cataracts, what part of their body might need an operation?',
    options: [
      { label: 'A', value: 'ear', isCorrect: false },
      { label: 'B', value: 'hand', isCorrect: false },
      { label: 'C', value: 'eye', isCorrect: true },
      { label: 'D', value: 'knee', isCorrect: false }
    ]
  },
  {
    question:
      "If you are 'riding fakie' inside a 'half pipe' what are you probably doing?",
    options: [
      { label: 'A', value: 'skiing', isCorrect: false },
      { label: 'B', value: 'biking', isCorrect: false },
      { label: 'C', value: 'snowboarding', isCorrect: true },
      { label: 'D', value: 'surfing', isCorrect: false }
    ]
  },
  {
    question: 'If you are truly afraid of the dark, what do you suffer from?',
    options: [
      { label: 'A', value: 'hypnophobia', isCorrect: false },
      { label: 'B', value: 'cryptophobia', isCorrect: false },
      { label: 'C', value: 'hadephobia', isCorrect: false },
      { label: 'D', value: 'nyctophobia', isCorrect: true }
    ]
  },
  {
    question: 'If you are watching a Shavian play, who is the author?',
    options: [
      { label: 'A', value: 'Shakespeare', isCorrect: false },
      { label: 'B', value: 'Aeschylus', isCorrect: false },
      { label: 'C', value: 'George Bernard Shaw', isCorrect: true },
      { label: 'D', value: 'Anton Chekhov', isCorrect: false }
    ]
  },
  {
    question: "If you ask for 'gai' at a Thai restaurant, what will you get?",
    options: [
      { label: 'A', value: 'shrimp', isCorrect: false },
      { label: 'B', value: 'chicken', isCorrect: true },
      { label: 'C', value: 'beef', isCorrect: false },
      { label: 'D', value: 'pork', isCorrect: false }
    ]
  },
  {
    question: "If you dial '411' on a telephone, who are you calling?",
    options: [
      { label: 'A', value: 'the police', isCorrect: false },
      { label: 'B', value: 'the White House', isCorrect: false },
      { label: 'C', value: 'directory assistance', isCorrect: true },
      { label: 'D', value: 'Moviefone', isCorrect: false }
    ]
  },
  {
    question: "If you have a 'sawbuck' how much money do you have?",
    options: [
      { label: 'A', value: '$1', isCorrect: false },
      { label: 'B', value: '$5', isCorrect: false },
      { label: 'C', value: '$10', isCorrect: true },
      { label: 'D', value: '$20', isCorrect: false }
    ]
  },
  {
    question: "If you work as a 'dolly grip' what business are you in?",
    options: [
      { label: 'A', value: 'sheep farming', isCorrect: false },
      { label: 'B', value: 'film production', isCorrect: true },
      { label: 'C', value: 'construction', isCorrect: false },
      { label: 'D', value: 'moving', isCorrect: false }
    ]
  },
  {
    question:
      'In 1909, Frederick Cook claimed to be the first explorer to reach what location?',
    options: [
      { label: 'A', value: 'Mount Everest', isCorrect: false },
      { label: 'B', value: 'Bermuda Triangle', isCorrect: false },
      { label: 'C', value: 'Atlantis', isCorrect: false },
      { label: 'D', value: 'North Pole', isCorrect: true }
    ]
  },
  {
    question:
      'In 1926, the Harlem Globetrotters basketball team was formed in what city?',
    options: [
      { label: 'A', value: 'Boston', isCorrect: false },
      { label: 'B', value: 'Philadelphia', isCorrect: false },
      { label: 'C', value: 'Chicago', isCorrect: true },
      { label: 'D', value: 'New York City', isCorrect: false }
    ]
  },
  {
    question:
      'In 1960, Nazi official Adolph Eichmann was finally captured in what country?',
    options: [
      { label: 'A', value: 'Brazil', isCorrect: false },
      { label: 'B', value: 'East Germany', isCorrect: false },
      { label: 'C', value: 'Argentina', isCorrect: true },
      { label: 'D', value: 'Paraguay', isCorrect: false }
    ]
  },
  {
    question:
      "In 1978, who became the youngest jockey ever to win horse racing's triple crown?",
    options: [
      { label: 'A', value: 'Jerry Bailey', isCorrect: false },
      { label: 'B', value: 'Steve Cauthen', isCorrect: true },
      { label: 'C', value: 'Willie Shoemaker', isCorrect: false },
      { label: 'D', value: 'Pasquale Devito', isCorrect: false }
    ]
  },
  {
    question:
      "In 1986, Libyan leader Muammar Qaddafi drew a so-called 'Line of Death' over what body of water?",
    options: [
      { label: 'A', value: 'Gulf of Sidra', isCorrect: true },
      { label: 'B', value: 'Gulf of Oman', isCorrect: false },
      { label: 'C', value: 'Red Sea', isCorrect: false },
      { label: 'D', value: 'Persian Gulf', isCorrect: false }
    ]
  },
  {
    question:
      'In a game with no wild cards, what is the highest possible poker hand?',
    options: [
      { label: 'A', value: 'straight flush', isCorrect: false },
      { label: 'B', value: 'royal flush', isCorrect: true },
      { label: 'C', value: 'full house', isCorrect: false },
      { label: 'D', value: 'four of a kind', isCorrect: false }
    ]
  },
  {
    question: 'In America, what is the main ingredient in pepperoni?',
    options: [
      { label: 'A', value: 'fish', isCorrect: false },
      { label: 'B', value: 'pepper', isCorrect: false },
      { label: 'C', value: 'wheat', isCorrect: false },
      { label: 'D', value: 'meat', isCorrect: true }
    ]
  },
  {
    question: 'In American football, how many points is a touchdown worth?',
    options: [
      { label: 'A', value: 'two', isCorrect: false },
      { label: 'B', value: 'three', isCorrect: false },
      { label: 'C', value: 'six', isCorrect: true },
      { label: 'D', value: 'seven', isCorrect: false }
    ]
  },
  {
    question: 'In an adult human, how long is the large intestine?',
    options: [
      { label: 'A', value: 'one foot', isCorrect: false },
      { label: 'B', value: 'five feet', isCorrect: true },
      { label: 'C', value: 'twelve feet', isCorrect: false },
      { label: 'D', value: 'twenty feet', isCorrect: false }
    ]
  },
  {
    question: 'In baseball, how many balls make a walk?',
    options: [
      { label: 'A', value: 'one', isCorrect: false },
      { label: 'B', value: 'two', isCorrect: false },
      { label: 'C', value: 'three', isCorrect: false },
      { label: 'D', value: 'four', isCorrect: true }
    ]
  },
  {
    question: 'In bowling, how many pins must you knock down to get a strike?',
    options: [
      { label: 'A', value: 'zero', isCorrect: false },
      { label: 'B', value: '8', isCorrect: false },
      { label: 'C', value: '10', isCorrect: true },
      { label: 'D', value: '12', isCorrect: false }
    ]
  },
  {
    question: 'In British currency, how many pence make a pound?',
    options: [
      { label: 'A', value: '10', isCorrect: false },
      { label: 'B', value: '100', isCorrect: true },
      { label: 'C', value: '500', isCorrect: false },
      { label: 'D', value: '1000', isCorrect: false }
    ]
  },
  {
    question: "In computer terminology, what does the acronym 'FTP' stand for?",
    options: [
      { label: 'A', value: 'file transfer protocol', isCorrect: true },
      { label: 'B', value: 'full time portal', isCorrect: false },
      { label: 'C', value: 'full text processor', isCorrect: false },
      { label: 'D', value: 'free to print', isCorrect: false }
    ]
  },
  {
    question: "In computer terminology, what does the acronym 'ISP' stand for?",
    options: [
      { label: 'A', value: 'Individual Site Privacy', isCorrect: false },
      { label: 'B', value: 'Investment Stability Plan', isCorrect: false },
      { label: 'C', value: 'Internal Security Position', isCorrect: false },
      { label: 'D', value: 'Internet Service Provider', isCorrect: true }
    ]
  },
  {
    question:
      "In cooking, the term 'au gratin' is sometimes used to describe a dish with what topping?",
    options: [
      { label: 'A', value: 'cheese', isCorrect: true },
      { label: 'B', value: 'fruit', isCorrect: false },
      { label: 'C', value: 'gravy', isCorrect: false },
      { label: 'D', value: 'whipped cream', isCorrect: false }
    ]
  },
  {
    question: 'In golf, what is one stroke over par called?',
    options: [
      { label: 'A', value: 'eagle', isCorrect: false },
      { label: 'B', value: 'bogey', isCorrect: true },
      { label: 'C', value: 'dormy', isCorrect: false },
      { label: 'D', value: 'birdie', isCorrect: false }
    ]
  },
  {
    question: "In Greek mythology, what is the name of Zeus' father?",
    options: [
      { label: 'A', value: 'Apollo', isCorrect: false },
      { label: 'B', value: 'Cronus', isCorrect: true },
      { label: 'C', value: 'Prometheus', isCorrect: false },
      { label: 'D', value: 'Hercules', isCorrect: false }
    ]
  },
  {
    question:
      'In horse racing, what is the term for a wager on the 1st, 2nd and 3rd place finishers in a specific race?',
    options: [
      { label: 'A', value: 'triple action', isCorrect: false },
      { label: 'B', value: 'trifecta', isCorrect: true },
      { label: 'C', value: 'exacta', isCorrect: false },
      { label: 'D', value: 'triple crown', isCorrect: false }
    ]
  },
  {
    question: 'In ice hockey, which of the following is not a penalty?',
    options: [
      { label: 'A', value: 'hooking', isCorrect: false },
      { label: 'B', value: 'charging', isCorrect: false },
      { label: 'C', value: 'carving', isCorrect: true },
      { label: 'D', value: 'butt-ending', isCorrect: false }
    ]
  },
  {
    question: "In Mister Rogers' theme song, what does he ask you to be?",
    options: [
      { label: 'A', value: 'his cook', isCorrect: false },
      { label: 'B', value: 'his student', isCorrect: false },
      { label: 'C', value: 'his neighbor', isCorrect: true },
      { label: 'D', value: 'all you can be', isCorrect: false }
    ]
  },
  {
    question:
      "In mobster lingo, if you 'sing like a canary' what are you doing?",
    options: [
      { label: 'A', value: 'impersonating Sinatra', isCorrect: false },
      { label: 'B', value: 'talking to the cops', isCorrect: true },
      { label: 'C', value: 'killing an enemy', isCorrect: false },
      { label: 'D', value: 'betting on horses', isCorrect: false }
    ]
  },
  {
    question:
      'In soccer, which player is allowed to use his or her hands in the field of play?',
    options: [
      { label: 'A', value: 'midfielder', isCorrect: false },
      { label: 'B', value: 'center', isCorrect: false },
      { label: 'C', value: 'sweeper', isCorrect: false },
      { label: 'D', value: 'goalkeeper', isCorrect: true }
    ]
  },
  {
    question: "In the 1960s 'Batman' TV series, who was not a guest villain?",
    options: [
      { label: 'A', value: 'The Minstrel', isCorrect: false },
      { label: 'B', value: 'The Archer', isCorrect: false },
      { label: 'C', value: 'The Bookworm', isCorrect: false },
      { label: 'D', value: 'The Squeegee Guy', isCorrect: true }
    ]
  },
  {
    question:
      "In the 1976 remake of the classic film 'King Kong' what New York landmark does the giant ape climb?",
    options: [
      { label: 'A', value: 'Statue of Liberty', isCorrect: false },
      { label: 'B', value: 'Empire State Building', isCorrect: false },
      { label: 'C', value: 'World Trade Center', isCorrect: true },
      { label: 'D', value: 'Chrysler Building', isCorrect: false }
    ]
  },
  {
    question:
      "In the 1992 animated film 'Aladdin' what device does the hero use to travel from place to place?",
    options: [
      { label: 'A', value: 'talking car', isCorrect: false },
      { label: 'B', value: 'winged horse', isCorrect: false },
      { label: 'C', value: 'magic carpet', isCorrect: true },
      { label: 'D', value: 'hot air balloon', isCorrect: false }
    ]
  },
  {
    question: 'In the Arthurian legend, who is married to Guinevere?',
    options: [
      { label: 'A', value: 'Merlin', isCorrect: false },
      { label: 'B', value: 'King Arthur', isCorrect: true },
      { label: 'C', value: 'Lancelot', isCorrect: false },
      { label: 'D', value: 'Camelot', isCorrect: false }
    ]
  },
  {
    question:
      'In the card game blackjack, how much are a queen and a king worth-together?',
    options: [
      { label: 'A', value: '11', isCorrect: false },
      { label: 'B', value: '15', isCorrect: false },
      { label: 'C', value: '20', isCorrect: true },
      { label: 'D', value: '21', isCorrect: false }
    ]
  },
  {
    question: "In the children's game, what color is 'Rover'?",
    options: [
      { label: 'A', value: 'green', isCorrect: false },
      { label: 'B', value: 'black', isCorrect: false },
      { label: 'C', value: 'red', isCorrect: true },
      { label: 'D', value: 'blue', isCorrect: false }
    ]
  },
  {
    question:
      "In the classic song 'Take Me Out to the Ballgame' for whom do we 'root root root'?",
    options: [
      { label: 'A', value: 'the umpire', isCorrect: false },
      { label: 'B', value: 'the home team', isCorrect: true },
      { label: 'C', value: 'the bat boy', isCorrect: false },
      { label: 'D', value: 'Mighty Casey', isCorrect: false }
    ]
  },
  {
    question: "In the comic strip 'Peanuts' what is Schroeder known for doing?",
    options: [
      { label: 'A', value: 'Dancing', isCorrect: false },
      { label: 'B', value: 'playing football', isCorrect: false },
      { label: 'C', value: 'playing the piano', isCorrect: true },
      { label: 'D', value: 'Flying an imaginary plane', isCorrect: false }
    ]
  },
  {
    question: "In the famous ballet 'The Nutcracker' who does the hero defeat?",
    options: [
      { label: 'A', value: 'Sugar Plum Fairy', isCorrect: false },
      { label: 'B', value: 'Rat King', isCorrect: true },
      { label: 'C', value: 'Snow Queen', isCorrect: false },
      { label: 'D', value: 'Marzipan', isCorrect: false }
    ]
  },
  {
    question:
      "In the famous baseball poem 'Casey at the Bat' Casey plays for the team from what town?",
    options: [
      { label: 'A', value: 'Stormfield', isCorrect: false },
      { label: 'B', value: 'Fog City', isCorrect: false },
      { label: 'C', value: 'Mudville', isCorrect: true },
      { label: 'D', value: 'Waterlog', isCorrect: false }
    ]
  },
  {
    question:
      "In the film 'Easy Rider' what emblem is on the back of Peter Fonda's leather jacket?",
    options: [
      { label: 'A', value: 'peace symbol', isCorrect: false },
      { label: 'B', value: 'American flag', isCorrect: true },
      { label: 'C', value: 'two white doves', isCorrect: false },
      { label: 'D', value: 'Harley-Davidson logo', isCorrect: false }
    ]
  },
  {
    question: "In the film 'The Talented Mr. Ripley' who plays Mr. Ripley?",
    options: [
      { label: 'A', value: 'Jude Law', isCorrect: false },
      { label: 'B', value: 'Matt Damon', isCorrect: true },
      { label: 'C', value: 'Dustin Hoffman', isCorrect: false },
      { label: 'D', value: 'Ben Affleck', isCorrect: false }
    ]
  },
  {
    question:
      "In the Jimmy Buffet song 'Margaritaville' what is the singer searching for?",
    options: [
      { label: 'A', value: 'a lime', isCorrect: false },
      { label: 'B', value: 'a shaker of salt', isCorrect: true },
      { label: 'C', value: 'his car keys', isCorrect: false },
      { label: 'D', value: 'the bartender', isCorrect: false }
    ]
  },
  {
    question:
      "In the movie 'Austin Powers: The Spy Who Shagged Me' what is the name of Dr. Evil's diminitive clone?",
    options: [
      { label: 'A', value: 'Little Buddy', isCorrect: false },
      { label: 'B', value: 'Mini-Me', isCorrect: true },
      { label: 'C', value: 'Small Fry', isCorrect: false },
      { label: 'D', value: 'Dr. Evil Jr', isCorrect: false }
    ]
  },
  {
    question: "In the movie 'Star Wars' what kind of creature is Chewbacca?",
    options: [
      { label: 'A', value: 'Woolie', isCorrect: false },
      { label: 'B', value: 'Boobie', isCorrect: false },
      { label: 'C', value: 'Wookie', isCorrect: true },
      { label: 'D', value: 'Klingon', isCorrect: false }
    ]
  },
  {
    question:
      "In the novel 'Around the World in 80 Days' Phileas Fogg's faithful valet is named what?",
    options: [
      { label: 'A', value: 'Sancho Panza', isCorrect: false },
      { label: 'B', value: 'Passepartout', isCorrect: true },
      { label: 'C', value: 'Renfield', isCorrect: false },
      { label: 'D', value: 'Savoir Faire', isCorrect: false }
    ]
  },
  {
    question:
      "In the novel 'The Adventures of Tom Sawyer' what is the name of Tom's sweetheart?",
    options: [
      { label: 'A', value: 'Polly Finn', isCorrect: false },
      { label: 'B', value: 'Becky Thatcher', isCorrect: true },
      { label: 'C', value: 'Nancy Drew', isCorrect: false },
      { label: 'D', value: 'Emma Bovary', isCorrect: false }
    ]
  },
  {
    question:
      "In the original 'Get Smart' TV series, what is agent Maxwell Smart's code name?",
    options: [
      { label: 'A', value: 'Agent 86', isCorrect: true },
      { label: 'B', value: 'Agent 99', isCorrect: false },
      { label: 'C', value: 'Larrabee', isCorrect: false },
      { label: 'D', value: 'The Chief', isCorrect: false }
    ]
  },
  {
    question:
      "In the sci-fi movie 'Fantastic Voyage' where do the voyagers travel?",
    options: [
      { label: 'A', value: 'through outer space', isCorrect: false },
      { label: 'B', value: 'through a human body', isCorrect: true },
      { label: 'C', value: 'to the ocean floor', isCorrect: false },
      { label: 'D', value: 'to the center of the earth', isCorrect: false }
    ]
  },
  {
    question:
      "In the story 'Jack and the Beanstalk' what does Jack trade to get the magic beans?",
    options: [
      { label: 'A', value: 'a cow', isCorrect: true },
      { label: 'B', value: 'a hat', isCorrect: false },
      { label: 'C', value: 'a harp', isCorrect: false },
      { label: 'D', value: 'a goose', isCorrect: false }
    ]
  },
  {
    question:
      "In the television network abbreviation 'ABC' what does the 'A' stand for?",
    options: [
      { label: 'A', value: 'Artistic', isCorrect: false },
      { label: 'B', value: 'Audio', isCorrect: false },
      { label: 'C', value: 'American', isCorrect: true },
      { label: 'D', value: 'Adult', isCorrect: false }
    ]
  },
  {
    question: "In the phrase 'Y2K' what does 'K' stand for?",
    options: [
      { label: 'A', value: 'millennium', isCorrect: false },
      { label: 'B', value: 'computer code', isCorrect: false },
      { label: 'C', value: 'catastrophe', isCorrect: false },
      { label: 'D', value: 'thousand', isCorrect: true }
    ]
  },
  {
    question: 'In the United States, what is the first day of spring?',
    options: [
      { label: 'A', value: 'February 21', isCorrect: false },
      { label: 'B', value: 'March 21', isCorrect: true },
      { label: 'C', value: 'April 21', isCorrect: false },
      { label: 'D', value: 'May 21', isCorrect: false }
    ]
  },
  {
    question:
      'In traditional English puppet shows, who is married to the character Punch?',
    options: [
      { label: 'A', value: 'Debbie', isCorrect: false },
      { label: 'B', value: 'Victoria', isCorrect: false },
      { label: 'C', value: 'Judy', isCorrect: true },
      { label: 'D', value: 'Barbara', isCorrect: false }
    ]
  },
  {
    question: "In what city is TV's 'The Mary Tyler Moore Show' set?",
    options: [
      { label: 'A', value: 'Dallas', isCorrect: false },
      { label: 'B', value: 'Chicago', isCorrect: false },
      { label: 'C', value: 'New York', isCorrect: false },
      { label: 'D', value: 'Minneapolis', isCorrect: true }
    ]
  },
  {
    question:
      'In what city would you find people studying art and design at the Fashion Institute of Technology?',
    options: [
      { label: 'A', value: 'Paris', isCorrect: false },
      { label: 'B', value: 'New York', isCorrect: true },
      { label: 'C', value: 'Los Angeles', isCorrect: false },
      { label: 'D', value: 'Melbourne', isCorrect: false }
    ]
  },
  {
    question: "In what country are police officers referred to as 'bobbies'?",
    options: [
      { label: 'A', value: 'Israel', isCorrect: false },
      { label: 'B', value: 'Greece', isCorrect: false },
      { label: 'C', value: 'England', isCorrect: true },
      { label: 'D', value: 'France', isCorrect: false }
    ]
  },
  {
    question:
      'In what country did Magic Johnson play professional basketball during the 1999 season?',
    options: [
      { label: 'A', value: 'United States', isCorrect: false },
      { label: 'B', value: 'Sweden', isCorrect: true },
      { label: 'C', value: 'Israel', isCorrect: false },
      { label: 'D', value: 'Turkey', isCorrect: false }
    ]
  },
  {
    question: 'In what country did Pokemon originate?',
    options: [
      { label: 'A', value: 'France', isCorrect: false },
      { label: 'B', value: 'Hungary', isCorrect: false },
      { label: 'C', value: 'Japan', isCorrect: true },
      { label: 'D', value: 'Canada', isCorrect: false }
    ]
  },
  {
    question: 'In what decade did Israel become an independent state?',
    options: [
      { label: 'A', value: '1920s', isCorrect: false },
      { label: 'B', value: '1940s', isCorrect: true },
      { label: 'C', value: '1950s', isCorrect: false },
      { label: 'D', value: '1960s', isCorrect: false }
    ]
  },
  {
    question: 'In what decade was the Hula-Hoop invented?',
    options: [
      { label: 'A', value: '1890s', isCorrect: false },
      { label: 'B', value: '1920s', isCorrect: false },
      { label: 'C', value: '1950s', isCorrect: true },
      { label: 'D', value: '1970s', isCorrect: false }
    ]
  },
  {
    question: 'In what forest did Robin Hood live?',
    options: [
      { label: 'A', value: 'Black Forest', isCorrect: false },
      { label: 'B', value: 'Petrified Forest', isCorrect: false },
      { label: 'C', value: 'Nottingham Forest', isCorrect: false },
      { label: 'D', value: 'Sherwood Forest', isCorrect: true }
    ]
  },
  {
    question: 'In what restaurant can you order a Grand Slam breakfast?',
    options: [
      { label: 'A', value: "Denny's", isCorrect: true },
      { label: 'B', value: "McDonald's", isCorrect: false },
      { label: 'C', value: 'Burger King', isCorrect: false },
      { label: 'D', value: "Hardee's", isCorrect: false }
    ]
  },
  {
    question: 'In what sport do athletes compete for the Walker Cup?',
    options: [
      { label: 'A', value: 'cricket', isCorrect: false },
      { label: 'B', value: 'tennis', isCorrect: false },
      { label: 'C', value: 'squash', isCorrect: false },
      { label: 'D', value: 'golf', isCorrect: true }
    ]
  }
]

export default questions
