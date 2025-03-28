// Quiz questions data
const quizData = {
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2,
            hint: "This city is known for the Eiffel Tower",
            explanation: "Paris is the capital and largest city of France, known for its iconic Eiffel Tower."
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
            hint: "This planet is named after the Roman god of war",
            explanation: "Mars is called the Red Planet because of its reddish appearance, caused by iron oxide on its surface."
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
            correct: 1,
            hint: "This mammal lives in the ocean",
            explanation: "The Blue Whale is the largest mammal on Earth, growing up to 100 feet long."
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2,
            hint: "This artist was also an inventor and scientist",
            explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519."
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Fe", "Au", "Cu"],
            correct: 2,
            hint: "This symbol comes from the Latin word 'aurum'",
            explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Brain", "Skin", "Liver"],
            correct: 2,
            hint: "This organ covers your entire body",
            explanation: "The skin is the largest organ in the human body, covering about 20 square feet."
        },
        {
            question: "Which country invented tea?",
            options: ["India", "China", "Japan", "England"],
            correct: 1,
            hint: "This country has a long history of tea cultivation",
            explanation: "Tea was first discovered in China around 2737 BCE."
        },
        {
            question: "What is the fastest land animal?",
            options: ["Lion", "Cheetah", "Leopard", "Gazelle"],
            correct: 1,
            hint: "This animal can reach speeds of up to 70 mph",
            explanation: "The cheetah is the fastest land animal, capable of reaching speeds up to 70 mph."
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Gold", "Silver", "Oxygen", "Iron"],
            correct: 2,
            hint: "This element is essential for breathing",
            explanation: "O is the chemical symbol for oxygen, which is essential for life."
        },
        {
            question: "What is the capital of Brazil?",
            options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            correct: 2,
            hint: "This city was built specifically to be the capital",
            explanation: "Brasília became Brazil's capital in 1960, replacing Rio de Janeiro."
        },
        {
            question: "What is the largest species of shark?",
            options: ["Great White Shark", "Whale Shark", "Tiger Shark", "Hammerhead Shark"],
            correct: 1,
            hint: "This shark is a gentle giant that feeds on plankton",
            explanation: "The Whale Shark is the largest species of shark, growing up to 40 feet long."
        },
        {
            question: "Which country has the most natural lakes?",
            options: ["Russia", "Canada", "Finland", "Sweden"],
            correct: 1,
            hint: "This country is known for its maple syrup",
            explanation: "Canada has over 2 million lakes, more than any other country."
        },
        {
            question: "What is the most abundant metal in Earth's crust?",
            options: ["Iron", "Aluminum", "Copper", "Zinc"],
            correct: 1,
            hint: "This metal is commonly used in cans and foil",
            explanation: "Aluminum is the most abundant metal in Earth's crust."
        },
        {
            question: "Which bird has the largest wingspan?",
            options: ["Eagle", "Albatross", "Condor", "Pelican"],
            correct: 1,
            hint: "This bird can glide for hours without flapping",
            explanation: "The Wandering Albatross has the largest wingspan of any bird, up to 11 feet."
        },
        {
            question: "What is the most common blood type in humans?",
            options: ["A", "B", "O", "AB"],
            correct: 2,
            hint: "This blood type is known as the universal donor",
            explanation: "Blood type O is the most common blood type in humans."
        }
    ],
    science: [
        {
            question: "What is the atomic number of carbon?",
            options: ["4", "6", "8", "12"],
            correct: 1,
            hint: "This number represents the number of protons in the nucleus",
            explanation: "Carbon has 6 protons in its nucleus, giving it an atomic number of 6."
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 1,
            hint: "This gas is essential for photosynthesis",
            explanation: "Plants absorb carbon dioxide during photosynthesis to produce glucose and oxygen."
        },
        {
            question: "What is the speed of light in meters per second?",
            options: ["299,792,458", "199,792,458", "399,792,458", "499,792,458"],
            correct: 0,
            hint: "This is one of the fundamental constants of nature",
            explanation: "The speed of light in a vacuum is exactly 299,792,458 meters per second."
        },
        {
            question: "What is the hardest natural substance?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2,
            hint: "This substance is made of pure carbon",
            explanation: "Diamond is the hardest natural substance, scoring 10 on the Mohs scale."
        },
        {
            question: "Which element has the chemical symbol 'Fe'?",
            options: ["Iron", "Copper", "Silver", "Gold"],
            correct: 0,
            hint: "This metal is essential for blood",
            explanation: "Fe is the chemical symbol for iron, derived from the Latin word 'ferrum'."
        },
        {
            question: "What is the process by which plants convert light energy into chemical energy?",
            options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
            correct: 1,
            hint: "This process requires sunlight and produces oxygen",
            explanation: "Photosynthesis is the process by which plants convert light energy into chemical energy."
        },
        {
            question: "Which planet is known as the Morning Star?",
            options: ["Mars", "Venus", "Mercury", "Jupiter"],
            correct: 1,
            hint: "This planet is the second from the Sun",
            explanation: "Venus is often called the Morning Star because it's visible in the morning sky."
        },
        {
            question: "What is the atomic number of hydrogen?",
            options: ["1", "2", "3", "4"],
            correct: 0,
            hint: "This is the simplest element",
            explanation: "Hydrogen has an atomic number of 1, making it the simplest element."
        },
        {
            question: "Which gas makes up most of Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
            correct: 2,
            hint: "This gas makes up about 78% of the atmosphere",
            explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
        },
        {
            question: "What is the hardest mineral on Earth?",
            options: ["Gold", "Diamond", "Platinum", "Titanium"],
            correct: 1,
            hint: "This mineral scores 10 on the Mohs scale",
            explanation: "Diamond is the hardest mineral, scoring 10 on the Mohs scale."
        },
        {
            question: "What is the speed of sound in air at room temperature?",
            options: ["331 m/s", "343 m/s", "355 m/s", "367 m/s"],
            correct: 1,
            hint: "This speed varies with temperature",
            explanation: "The speed of sound in air at room temperature is approximately 343 meters per second."
        },
        {
            question: "Which element has the highest melting point?",
            options: ["Tungsten", "Iron", "Platinum", "Gold"],
            correct: 0,
            hint: "This metal is used in light bulb filaments",
            explanation: "Tungsten has the highest melting point of any element at 3,422°C."
        },
        {
            question: "What is the most abundant element in the universe?",
            options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            correct: 2,
            hint: "This element is the simplest and lightest",
            explanation: "Hydrogen is the most abundant element in the universe."
        },
        {
            question: "Which planet has the most moons?",
            options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
            correct: 1,
            hint: "This planet is the largest in our solar system",
            explanation: "Jupiter has the most moons of any planet in our solar system."
        },
        {
            question: "What is the most common type of star in the universe?",
            options: ["Red Giant", "White Dwarf", "Red Dwarf", "Blue Supergiant"],
            correct: 2,
            hint: "These stars are small and cool",
            explanation: "Red dwarfs are the most common type of star in the universe."
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2,
            hint: "This year saw the atomic bombing of Hiroshima and Nagasaki",
            explanation: "World War II ended in 1945 with the surrender of Japan."
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
            correct: 2,
            hint: "This president's face appears on the one-dollar bill",
            explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
        },
        {
            question: "Which ancient wonder was located in Alexandria?",
            options: ["The Great Pyramid", "The Lighthouse", "The Hanging Gardens", "The Colossus"],
            correct: 1,
            hint: "This wonder helped ships navigate safely",
            explanation: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World."
        },
        {
            question: "When did the French Revolution begin?",
            options: ["1776", "1789", "1799", "1804"],
            correct: 1,
            hint: "This year saw the storming of the Bastille",
            explanation: "The French Revolution began in 1789 with the storming of the Bastille."
        },
        {
            question: "Who was the first Emperor of China?",
            options: ["Qin Shi Huang", "Han Wudi", "Tang Taizong", "Kublai Khan"],
            correct: 0,
            hint: "This emperor built the Great Wall of China",
            explanation: "Qin Shi Huang was the first Emperor of China, ruling from 221 to 210 BCE."
        },
        {
            question: "Who was the first Emperor of Rome?",
            options: ["Julius Caesar", "Augustus", "Nero", "Marcus Aurelius"],
            correct: 1,
            hint: "This emperor's reign began the Pax Romana",
            explanation: "Augustus was the first Roman Emperor, ruling from 27 BCE to 14 CE."
        },
        {
            question: "When did the Berlin Wall fall?",
            options: ["1987", "1988", "1989", "1990"],
            correct: 2,
            hint: "This event marked the end of the Cold War",
            explanation: "The Berlin Wall fell on November 9, 1989."
        },
        {
            question: "Who was the first woman to win a Nobel Prize?",
            options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
            correct: 0,
            hint: "This scientist won prizes in both Physics and Chemistry",
            explanation: "Marie Curie was the first woman to win a Nobel Prize, winning in Physics in 1903."
        },
        {
            question: "Which civilization built Machu Picchu?",
            options: ["Aztec", "Maya", "Inca", "Olmec"],
            correct: 2,
            hint: "This civilization was based in South America",
            explanation: "The Inca civilization built Machu Picchu in the 15th century."
        },
        {
            question: "When did the Renaissance begin?",
            options: ["1200s", "1300s", "1400s", "1500s"],
            correct: 2,
            hint: "This period began in Italy",
            explanation: "The Renaissance began in Italy in the 14th century."
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic?",
            options: ["Bessie Coleman", "Amelia Earhart", "Harriet Quimby", "Jacqueline Cochran"],
            correct: 1,
            hint: "This aviator disappeared during a flight around the world",
            explanation: "Amelia Earhart was the first woman to fly solo across the Atlantic in 1932."
        },
        {
            question: "Which ancient wonder was the tallest?",
            options: ["Great Pyramid", "Lighthouse of Alexandria", "Colossus of Rhodes", "Hanging Gardens"],
            correct: 0,
            hint: "This wonder is the only one still standing",
            explanation: "The Great Pyramid of Giza was the tallest man-made structure for over 3,800 years."
        },
        {
            question: "When was the first computer invented?",
            options: ["1830s", "1930s", "1940s", "1950s"],
            correct: 0,
            hint: "This computer was mechanical, not electronic",
            explanation: "Charles Babbage designed the first mechanical computer in the 1830s."
        },
        {
            question: "Who was the first person to reach the South Pole?",
            options: ["Robert Scott", "Roald Amundsen", "Ernest Shackleton", "Richard Byrd"],
            correct: 1,
            hint: "This explorer was Norwegian",
            explanation: "Roald Amundsen was the first person to reach the South Pole in 1911."
        },
        {
            question: "Which civilization invented writing?",
            options: ["Egyptian", "Mesopotamian", "Chinese", "Indus Valley"],
            correct: 1,
            hint: "This civilization developed cuneiform writing",
            explanation: "The Mesopotamian civilization invented the first known writing system, cuneiform."
        }
    ],
    geography: [
        {
            question: "Which is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: 3,
            hint: "This ocean is home to the Mariana Trench",
            explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
        },
        {
            question: "What is the capital of Japan?",
            options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            correct: 2,
            hint: "This city is the most populous metropolitan area in the world",
            explanation: "Tokyo is the capital and largest city of Japan."
        },
        {
            question: "Which country has the largest population?",
            options: ["India", "China", "United States", "Indonesia"],
            correct: 1,
            hint: "This country is home to the Great Wall",
            explanation: "China has the largest population in the world."
        },
        {
            question: "What is the highest mountain in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            correct: 1,
            hint: "This mountain is located in the Himalayas",
            explanation: "Mount Everest is the highest mountain on Earth, standing at 8,848 meters."
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Gobi", "Sahara", "Antarctic", "Arabian"],
            correct: 2,
            hint: "This desert is also the coldest place on Earth",
            explanation: "The Antarctic Desert is the largest desert in the world."
        },
        {
            question: "Which is the largest lake by surface area?",
            options: ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Michigan"],
            correct: 2,
            hint: "This lake is actually the world's largest inland body of water",
            explanation: "The Caspian Sea is the largest lake by surface area in the world."
        },
        {
            question: "What is the capital of New Zealand?",
            options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
            correct: 1,
            hint: "This city is named after a famous British military leader",
            explanation: "Wellington is the capital of New Zealand."
        },
        {
            question: "Which country has the most islands?",
            options: ["Indonesia", "Philippines", "Sweden", "Norway"],
            correct: 2,
            hint: "This country is in Scandinavia",
            explanation: "Sweden has over 267,570 islands, making it the country with the most islands."
        },
        {
            question: "What is the deepest ocean trench?",
            options: ["Java Trench", "Mariana Trench", "Puerto Rico Trench", "Tonga Trench"],
            correct: 1,
            hint: "This trench is located in the Pacific Ocean",
            explanation: "The Mariana Trench is the deepest ocean trench, reaching about 11,000 meters."
        },
        {
            question: "Which is the largest country by land area?",
            options: ["China", "Canada", "Russia", "United States"],
            correct: 2,
            hint: "This country spans two continents",
            explanation: "Russia is the largest country by land area, spanning both Europe and Asia."
        },
        {
            question: "What is the highest waterfall in the world?",
            options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
            correct: 2,
            hint: "This waterfall is named after a flying explorer",
            explanation: "Angel Falls in Venezuela is the highest waterfall in the world at 979 meters."
        },
        {
            question: "Which country has the most time zones?",
            options: ["Russia", "China", "United States", "France"],
            correct: 0,
            hint: "This country spans from Europe to Asia",
            explanation: "Russia has 11 time zones, more than any other country."
        },
        {
            question: "What is the largest island in the Mediterranean?",
            options: ["Sicily", "Crete", "Cyprus", "Sardinia"],
            correct: 0,
            hint: "This island is shaped like a triangle",
            explanation: "Sicily is the largest island in the Mediterranean Sea."
        },
        {
            question: "Which country has the most volcanoes?",
            options: ["Japan", "Indonesia", "Chile", "Iceland"],
            correct: 1,
            hint: "This country is part of the Ring of Fire",
            explanation: "Indonesia has the most volcanoes of any country, with over 130 active volcanoes."
        },
        {
            question: "What is the largest city by population?",
            options: ["Shanghai", "Tokyo", "Delhi", "Beijing"],
            correct: 1,
            hint: "This city is in Japan",
            explanation: "Tokyo is the largest city by population, with over 37 million people in its metropolitan area."
        }
    ],
    sports: [
        {
            question: "Which sport is known as 'The Beautiful Game'?",
            options: ["Cricket", "Football", "Tennis", "Basketball"],
            correct: 1,
            hint: "This sport is played with a round ball",
            explanation: "Football (soccer) is often called 'The Beautiful Game' due to its global appeal and artistry."
        },
        {
            question: "Who won the first FIFA World Cup?",
            options: ["Brazil", "Argentina", "Uruguay", "Italy"],
            correct: 2,
            hint: "This country hosted the tournament in 1930",
            explanation: "Uruguay won the first FIFA World Cup in 1930."
        },
        {
            question: "Which country invented table tennis?",
            options: ["China", "Japan", "England", "USA"],
            correct: 2,
            hint: "This sport was originally played by the upper class",
            explanation: "Table tennis was invented in England in the late 19th century."
        },
        {
            question: "What is the highest score possible in a single frame of bowling?",
            options: ["250", "300", "350", "400"],
            correct: 1,
            hint: "This requires 12 consecutive strikes",
            explanation: "A perfect game of bowling is 300 points, achieved by rolling 12 consecutive strikes."
        },
        {
            question: "Which sport is known as 'The King of Sports'?",
            options: ["Football", "Cricket", "Tennis", "Golf"],
            correct: 0,
            hint: "This sport has the highest global viewership",
            explanation: "Football is often called 'The King of Sports' due to its worldwide popularity."
        },
        {
            question: "Which country won the first Olympic Games?",
            options: ["Greece", "Rome", "Egypt", "China"],
            correct: 0,
            hint: "The games were held in this country",
            explanation: "Greece won the first modern Olympic Games in 1896."
        },
        {
            question: "What is the highest score possible in a single frame of snooker?",
            options: ["147", "155", "167", "180"],
            correct: 0,
            hint: "This is known as a maximum break",
            explanation: "A maximum break in snooker is 147 points."
        },
        {
            question: "Which sport is known as 'The Sport of Kings'?",
            options: ["Polo", "Horse Racing", "Cricket", "Golf"],
            correct: 1,
            hint: "This sport involves horses",
            explanation: "Horse racing is known as 'The Sport of Kings'."
        },
        {
            question: "Who won the first Tour de France?",
            options: ["Eddy Merckx", "Maurice Garin", "Jacques Anquetil", "Bernard Hinault"],
            correct: 1,
            hint: "This cyclist won in 1903",
            explanation: "Maurice Garin won the first Tour de France in 1903."
        },
        {
            question: "What is the highest score possible in a single frame of darts?",
            options: ["180", "200", "220", "240"],
            correct: 0,
            hint: "This requires three triple 20s",
            explanation: "The highest possible score in a single frame of darts is 180."
        },
        {
            question: "Which country invented basketball?",
            options: ["Canada", "United States", "England", "France"],
            correct: 1,
            hint: "This sport was invented by a Canadian living in the US",
            explanation: "Basketball was invented by James Naismith in the United States in 1891."
        },
        {
            question: "What is the highest score possible in a single frame of bowling?",
            options: ["250", "300", "350", "400"],
            correct: 1,
            hint: "This requires 12 consecutive strikes",
            explanation: "A perfect game of bowling is 300 points, achieved by rolling 12 consecutive strikes."
        },
        {
            question: "Which sport has the highest-paid athletes?",
            options: ["Football", "Basketball", "Boxing", "Tennis"],
            correct: 2,
            hint: "This sport features individual matches",
            explanation: "Boxing has produced some of the highest-paid athletes in history."
        },
        {
            question: "What is the most-watched sporting event in the world?",
            options: ["FIFA World Cup", "Olympic Games", "Super Bowl", "Cricket World Cup"],
            correct: 0,
            hint: "This event occurs every four years",
            explanation: "The FIFA World Cup is the most-watched sporting event in the world."
        },
        {
            question: "Which country has won the most Olympic gold medals?",
            options: ["China", "Russia", "United States", "Great Britain"],
            correct: 2,
            hint: "This country has hosted the most Olympic Games",
            explanation: "The United States has won the most Olympic gold medals in history."
        }
    ],
    technology: [
        {
            question: "Who is known as the father of the computer?",
            options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Ada Lovelace"],
            correct: 1,
            hint: "This person designed the first mechanical computer",
            explanation: "Charles Babbage is considered the father of the computer for designing the first mechanical computer."
        },
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Unit"],
            correct: 0,
            hint: "This is the brain of the computer",
            explanation: "CPU stands for Central Processing Unit, the primary component of a computer."
        },
        {
            question: "Which company created the first smartphone?",
            options: ["Apple", "Nokia", "IBM", "Samsung"],
            correct: 2,
            hint: "This company created the Simon Personal Communicator",
            explanation: "IBM created the first smartphone, the Simon Personal Communicator, in 1994."
        },
        {
            question: "What is the most popular programming language?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correct: 2,
            hint: "This language runs in web browsers",
            explanation: "JavaScript is the most popular programming language, widely used in web development."
        },
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
            correct: 0,
            hint: "This is the standard language for creating web pages",
            explanation: "HTML stands for Hyper Text Markup Language, the standard language for creating web pages."
        },
        {
            question: "What was the first computer mouse made of?",
            options: ["Plastic", "Wood", "Metal", "Glass"],
            correct: 1,
            hint: "This material is natural",
            explanation: "The first computer mouse was made of wood in the 1960s."
        },
        {
            question: "Which company created the first personal computer?",
            options: ["Apple", "IBM", "Microsoft", "Commodore"],
            correct: 1,
            hint: "This company's PC was released in 1981",
            explanation: "IBM created the first personal computer, the IBM PC, in 1981."
        },
        {
            question: "What does RAM stand for?",
            options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
            correct: 0,
            hint: "This is temporary computer memory",
            explanation: "RAM stands for Random Access Memory."
        },
        {
            question: "Which programming language was created by Guido van Rossum?",
            options: ["Java", "Python", "Ruby", "PHP"],
            correct: 1,
            hint: "This language is named after a comedy group",
            explanation: "Python was created by Guido van Rossum and named after Monty Python."
        },
        {
            question: "What was the first video game console?",
            options: ["Atari 2600", "Magnavox Odyssey", "Nintendo Entertainment System", "Sega Master System"],
            correct: 1,
            hint: "This console was released in 1972",
            explanation: "The Magnavox Odyssey was the first video game console, released in 1972."
        },
        {
            question: "What was the first smartphone?",
            options: ["iPhone", "BlackBerry", "IBM Simon", "Nokia Communicator"],
            correct: 2,
            hint: "This device was released in 1994",
            explanation: "The IBM Simon was the first smartphone, released in 1994."
        },
        {
            question: "What is the most common file format for images on the web?",
            options: ["PNG", "JPEG", "GIF", "BMP"],
            correct: 1,
            hint: "This format is named after its creators",
            explanation: "JPEG is the most common image format on the web."
        },
        {
            question: "Which company created the first web browser?",
            options: ["Microsoft", "Netscape", "Mosaic", "CERN"],
            correct: 3,
            hint: "This organization created the World Wide Web",
            explanation: "CERN created the first web browser, WorldWideWeb, in 1990."
        },
        {
            question: "What is the most common programming language for web development?",
            options: ["Python", "Java", "JavaScript", "PHP"],
            correct: 2,
            hint: "This language runs in web browsers",
            explanation: "JavaScript is the most common programming language for web development."
        },
        {
            question: "What was the first computer virus?",
            options: ["Creeper", "Brain", "Elk Cloner", "ILOVEYOU"],
            correct: 0,
            hint: "This virus was created in 1971",
            explanation: "Creeper was the first computer virus, created in 1971."
        }
    ],
    entertainment: [
        {
            question: "Who played Iron Man in the Marvel Cinematic Universe?",
            options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
            correct: 1,
            hint: "This actor is known for his witty portrayal of Tony Stark",
            explanation: "Robert Downey Jr. played Iron Man in the Marvel Cinematic Universe."
        },
        {
            question: "Which video game is the best-selling of all time?",
            options: ["Tetris", "Minecraft", "Grand Theft Auto V", "Super Mario Bros."],
            correct: 0,
            hint: "This game was created in the Soviet Union",
            explanation: "Tetris is the best-selling video game of all time, with over 500 million copies sold."
        },
        {
            question: "Who is known as the 'King of Pop'?",
            options: ["Prince", "Michael Jackson", "Elvis Presley", "David Bowie"],
            correct: 1,
            hint: "This artist's album 'Thriller' is the best-selling album of all time",
            explanation: "Michael Jackson is known as the 'King of Pop' for his immense influence on popular music."
        },
        {
            question: "Which TV show has won the most Emmy Awards?",
            options: ["Game of Thrones", "Saturday Night Live", "The Simpsons", "Breaking Bad"],
            correct: 1,
            hint: "This show is a long-running sketch comedy series",
            explanation: "Saturday Night Live has won the most Emmy Awards of any TV show."
        },
        {
            question: "Who created the Harry Potter series?",
            options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
            correct: 1,
            hint: "This author wrote the series on napkins in a café",
            explanation: "J.K. Rowling created the Harry Potter series, which has sold over 500 million copies."
        },
        {
            question: "Who played the Joker in The Dark Knight?",
            options: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"],
            correct: 2,
            hint: "This actor won an Oscar for this role",
            explanation: "Heath Ledger played the Joker in The Dark Knight and won a posthumous Oscar."
        },
        {
            question: "Which movie won the most Academy Awards?",
            options: ["Titanic", "Ben-Hur", "The Lord of the Rings: Return of the King", "All About Eve"],
            correct: 1,
            hint: "This movie won 11 Oscars",
            explanation: "Ben-Hur won 11 Academy Awards, a record that was later tied."
        },
        {
            question: "Who created the comic book character Spider-Man?",
            options: ["Stan Lee", "Jack Kirby", "Steve Ditko", "Bob Kane"],
            correct: 0,
            hint: "This creator is known as 'The Man'",
            explanation: "Stan Lee created Spider-Man along with Steve Ditko."
        },
        {
            question: "Which TV show has the most episodes?",
            options: ["The Simpsons", "Gunsmoke", "Law & Order", "Grey's Anatomy"],
            correct: 0,
            hint: "This animated show is still running",
            explanation: "The Simpsons has the most episodes of any scripted TV show."
        },
        {
            question: "Who composed the music for Star Wars?",
            options: ["John Williams", "Hans Zimmer", "James Horner", "Danny Elfman"],
            correct: 0,
            hint: "This composer has won multiple Oscars",
            explanation: "John Williams composed the iconic music for Star Wars."
        },
        {
            question: "What was the first feature-length animated film?",
            options: ["Snow White", "Bambi", "Pinocchio", "Fantasia"],
            correct: 0,
            hint: "This film was released by Disney in 1937",
            explanation: "Snow White and the Seven Dwarfs was the first feature-length animated film."
        },
        {
            question: "Which actor has won the most Academy Awards?",
            options: ["Jack Nicholson", "Daniel Day-Lewis", "Tom Hanks", "Meryl Streep"],
            correct: 1,
            hint: "This actor is known for method acting",
            explanation: "Daniel Day-Lewis has won three Academy Awards for Best Actor."
        },
        {
            question: "What was the first video game to feature a female protagonist?",
            options: ["Tomb Raider", "Metroid", "Final Fantasy VI", "Beyond Good & Evil"],
            correct: 1,
            hint: "This game features Samus Aran",
            explanation: "Metroid was the first video game to feature a female protagonist."
        },
        {
            question: "Which band has sold the most albums worldwide?",
            options: ["The Beatles", "Elvis Presley", "Michael Jackson", "Queen"],
            correct: 0,
            hint: "This band is from Liverpool",
            explanation: "The Beatles have sold more albums than any other band in history."
        },
        {
            question: "What was the first movie to gross over $1 billion?",
            options: ["Titanic", "Jurassic Park", "Star Wars", "E.T."],
            correct: 0,
            hint: "This movie was released in 1997",
            explanation: "Titanic was the first movie to gross over $1 billion at the box office."
        }
    ]
};

// Quiz state variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 30;
let timerInterval;
let userAnswers = [];
let startTime;
let hintsUsed = 0;
let skipsUsed = 0;
let difficulty = 'easy';
let questionCount = 5;
let streak = 0;
let bestStreak = 0;
let timeBonus = 0;
let difficultyMultiplier = 1;
let achievements = [];
let usedQuestions = {
    general: [],
    science: [],
    history: [],
    geography: [],
    sports: [],
    technology: [],
    entertainment: []
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionElement = document.getElementById('question');
const optionsContainer = document.querySelector('.options-container');
const progressBar = document.querySelector('.progress');
const timeElement = document.getElementById('time');
const finalScoreElement = document.getElementById('final-score');
const correctAnswersElement = document.getElementById('correct-answers');
const wrongAnswersElement = document.getElementById('wrong-answers');
const answerReviewElement = document.getElementById('answer-review');
const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const questionCountSelect = document.getElementById('questionCount');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const skipButton = document.getElementById('skip-btn');
const hintButton = document.getElementById('hint-btn');
const shareButton = document.getElementById('share-btn');
const currentScoreElement = document.getElementById('current-score');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const timeTakenElement = document.getElementById('time-taken');
const accuracyElement = document.getElementById('accuracy');

// Add achievement system
const achievementsList = {
    perfectScore: {
        title: "Perfect Score!",
        description: "Complete a quiz with 100% accuracy",
        icon: "fa-trophy",
        color: "#FFD700"
    },
    speedDemon: {
        title: "Speed Demon",
        description: "Complete a question in under 5 seconds",
        icon: "fa-bolt",
        color: "#FF6B6B"
    },
    streakMaster: {
        title: "Streak Master",
        description: "Get 5 correct answers in a row",
        icon: "fa-fire",
        color: "#FF8C00"
    },
    hardMode: {
        title: "Hard Mode Champion",
        description: "Complete a hard difficulty quiz",
        icon: "fa-skull",
        color: "#8B0000"
    }
};

// Add sound effects
const sounds = {
    correct: new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3'),
    wrong: new Audio('https://assets.mixkit.co/active_storage/sfx/2014/2014-preview.mp3'),
    click: new Audio('https://assets.mixkit.co/active_storage/sfx/2015/2015-preview.mp3'),
    complete: new Audio('https://assets.mixkit.co/active_storage/sfx/2016/2016-preview.mp3')
};

// Event Listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', resetQuiz);
skipButton.addEventListener('click', skipQuestion);
hintButton.addEventListener('click', showHint);
shareButton.addEventListener('click', shareResults);

// Functions
function startQuiz() {
    const category = categorySelect.value;
    difficulty = difficultySelect.value;
    questionCount = parseInt(questionCountSelect.value);
    
    // Get questions for the selected category
    let questions = quizData[category];
    
    // If all questions have been used, reset the used questions for this category
    if (usedQuestions[category].length >= questions.length) {
        usedQuestions[category] = [];
    }
    
    // Filter out already used questions
    let availableQuestions = questions.filter((_, index) => !usedQuestions[category].includes(index));
    
    // Shuffle available questions
    availableQuestions = shuffleArray(availableQuestions);
    
    // Take only the required number of questions
    currentQuestions = availableQuestions.slice(0, questionCount);
    
    // Mark these questions as used
    currentQuestions.forEach(question => {
        const index = questions.findIndex(q => q.question === question.question);
        if (index !== -1) {
            usedQuestions[category].push(index);
        }
    });
    
    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    hintsUsed = 0;
    skipsUsed = 0;
    userAnswers = [];
    startTime = Date.now();
    
    // Reset new state variables
    streak = 0;
    timeBonus = 0;
    achievements = [];
    
    // Set time based on difficulty
    switch(difficulty) {
        case 'easy':
            timeLeft = 30;
            break;
        case 'medium':
            timeLeft = 20;
            break;
        case 'hard':
            timeLeft = 15;
            break;
    }

    // Set difficulty multiplier
    switch(difficulty) {
        case 'easy':
            difficultyMultiplier = 1;
            break;
        case 'medium':
            difficultyMultiplier = 1.5;
            break;
        case 'hard':
            difficultyMultiplier = 2;
            break;
    }

    // Update UI
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
    startTimer();
    updateScore();
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Update question counter
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = currentQuestions.length;
    
    // Reset hint and skip buttons
    hintButton.disabled = false;
    skipButton.disabled = false;
}

function selectOption(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const timeSpent = timeLeft;
    
    // Play click sound
    sounds.click.play();
    
    // Disable all options
    options.forEach(option => option.style.pointerEvents = 'none');
    
    // Show correct/wrong answers with icons
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
            if (selectedIndex === index) {
                // Add tick mark for correct answer
                const tickMark = document.createElement('i');
                tickMark.className = 'fas fa-check-circle correct-icon';
                option.appendChild(tickMark);
                
                // Create particles for correct answer
                const rect = option.getBoundingClientRect();
                createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2);
                sounds.correct.play();
            }
        } else if (index === selectedIndex) {
            option.classList.add('wrong');
            // Add cross mark for wrong answer
            const crossMark = document.createElement('i');
            crossMark.className = 'fas fa-times-circle wrong-icon';
            option.appendChild(crossMark);
            sounds.wrong.play();
        }
    });

    // Calculate time bonus
    if (timeSpent > 0) {
        const bonus = Math.floor(timeSpent * 0.5);
        timeBonus += bonus;
        showTimeBonus(bonus);
    }

    // Store user's answer
    userAnswers.push({
        question: question.question,
        selected: selectedIndex,
        correct: question.correct,
        options: question.options,
        explanation: question.explanation,
        timeSpent: timeSpent
    });

    // Update score and streak
    if (selectedIndex === question.correct) {
        score += 10 * difficultyMultiplier;
        correctAnswers++;
        streak++;
        bestStreak = Math.max(bestStreak, streak);
        
        // Show streak feedback
        if (streak > 1) {
            showStreakCounter();
            if (streak % 5 === 0) {
                showFeedback(`${streak}x Streak!`, 'streak');
                createConfetti();
            }
        }
        
        // Check for speed demon achievement
        if (timeSpent > 25) {
            unlockAchievement('speedDemon');
        }
        
        // Check for streak master achievement
        if (streak === 5) {
            unlockAchievement('streakMaster');
        }
    } else {
        wrongAnswers++;
        streak = 0;
        showStreakCounter();
    }

    updateScore();

    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
            resetTimer();
        } else {
            showResults();
        }
    }, 1500);
}

function skipQuestion() {
    skipsUsed++;
    userAnswers.push({
        question: currentQuestions[currentQuestionIndex].question,
        selected: -1,
        correct: currentQuestions[currentQuestionIndex].correct,
        options: currentQuestions[currentQuestionIndex].options,
        explanation: currentQuestions[currentQuestionIndex].explanation,
        skipped: true
    });
    
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
        resetTimer();
    } else {
        showResults();
    }
}

function showHint() {
    const question = currentQuestions[currentQuestionIndex];
    hintsUsed++;
    hintButton.disabled = true;
    
    // Remove any existing hint tooltip
    const existingTooltip = document.querySelector('.hint-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    // Create and position the tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'hint-tooltip';
    tooltip.textContent = question.hint;
    
    // Position the tooltip relative to the options container
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.style.position = 'relative';
    optionsContainer.appendChild(tooltip);
    
    // Remove tooltip after 3 seconds
    setTimeout(() => {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translate(-50%, 10px)';
        setTimeout(() => {
            tooltip.remove();
        }, 300);
    }, 3000);
}

function startTimer() {
    timeElement.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        // Add warning animation when time is running low
        if (timeLeft <= 5) {
            timeElement.parentElement.classList.add('warning');
            timeElement.parentElement.style.animation = 'pulse 1s infinite';
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            selectOption(-1); // Time's up - no answer selected
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeElement.parentElement.classList.remove('warning');
    timeElement.parentElement.style.animation = '';
    
    // Reset time based on difficulty
    switch(difficulty) {
        case 'easy':
            timeLeft = 30;
            break;
        case 'medium':
            timeLeft = 20;
            break;
        case 'hard':
            timeLeft = 15;
            break;
    }
    
    startTimer();
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // Calculate time taken
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Calculate accuracy
    const accuracy = Math.round((correctAnswers / currentQuestions.length) * 100);

    // Play completion sound
    sounds.complete.play();
    
    // Calculate final score with bonuses
    const finalScore = score + timeBonus;
    
    // Check for perfect score achievement
    if (correctAnswers === currentQuestions.length) {
        unlockAchievement('perfectScore');
    }
    
    // Check for hard mode achievement
    if (difficulty === 'hard') {
        unlockAchievement('hardMode');
    }
    
    // Update results
    finalScoreElement.textContent = finalScore;
    correctAnswersElement.textContent = correctAnswers;
    wrongAnswersElement.textContent = wrongAnswers;
    timeTakenElement.textContent = timeString;
    accuracyElement.textContent = `${accuracy}%`;

    // Show answer review
    answerReviewElement.innerHTML = '';
    userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'answer-review-item';
        const isCorrect = answer.selected === answer.correct;
        
        let answerStatus = '';
        if (answer.skipped) {
            answerStatus = '<span style="color: #718096">Skipped</span>';
        } else if (isCorrect) {
            answerStatus = `<span style="color: ${getComputedStyle(document.documentElement).getPropertyValue('--success-color')}">Correct</span>`;
        } else {
            answerStatus = `<span style="color: ${getComputedStyle(document.documentElement).getPropertyValue('--error-color')}">Wrong</span>`;
        }
        
        reviewItem.innerHTML = `
            <div>
                <strong>Question ${index + 1}:</strong> ${answer.question}
                <br>
                ${answerStatus}
                ${!answer.skipped ? `<br>Your answer: ${answer.options[answer.selected]}` : ''}
                ${!isCorrect && !answer.skipped ? `<br>Correct answer: ${answer.options[answer.correct]}` : ''}
                <br>
                <small style="color: #718096">${answer.explanation}</small>
            </div>
        `;
        answerReviewElement.appendChild(reviewItem);
    });

    // Add bonus information
    const bonusInfo = document.createElement('div');
    bonusInfo.className = 'bonus-info';
    bonusInfo.innerHTML = `
        <div class="bonus-item">
            <i class="fas fa-clock"></i>
            <span>Time Bonus: +${timeBonus}</span>
        </div>
        <div class="bonus-item">
            <i class="fas fa-chart-line"></i>
            <span>Difficulty Multiplier: x${difficultyMultiplier}</span>
        </div>
        <div class="bonus-item">
            <i class="fas fa-fire"></i>
            <span>Best Streak: ${bestStreak}</span>
        </div>
    `;
    
    scoreContainer.insertBefore(bonusInfo, stats);

    // Show feedback form
    const feedbackContainer = document.querySelector('.feedback-form-container');
    if (feedbackContainer) {
        feedbackContainer.style.display = 'block';
        
        // Initialize feedback form with empty stars
        const ratingStars = feedbackContainer.querySelectorAll('.rating-stars i');
        ratingStars.forEach(star => {
            star.classList.remove('fas');
            star.classList.add('far');
        });
        
        // Initialize feedback form functionality
        initializeFeedbackForm();
    }
}

function resetQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    categorySelect.value = 'general';
    difficultySelect.value = 'easy';
    questionCountSelect.value = '5';
}

function shareResults() {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    const accuracy = Math.round((correctAnswers / currentQuestions.length) * 100);

    const shareText = `I scored ${score} points in the ${categorySelect.value} quiz on ${difficulty} difficulty! 
    Time taken: ${timeString}
    Accuracy: ${accuracy}%
    Correct answers: ${correctAnswers}/${currentQuestions.length}
    
    Try the quiz yourself at: ${window.location.href}`;

    if (navigator.share) {
        navigator.share({
            title: 'Quiz Master Pro Results',
            text: shareText,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback to clipboard copy
        navigator.clipboard.writeText(shareText)
            .then(() => alert('Results copied to clipboard!'))
            .catch(err => console.error('Failed to copy:', err));
    }
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Update score display
function updateScore() {
    currentScoreElement.textContent = score;
}

// Add achievement system
function unlockAchievement(achievementId) {
    if (!achievements.includes(achievementId)) {
        achievements.push(achievementId);
        showAchievement(achievementId);
    }
}

function showAchievement(achievementId) {
    const achievement = achievementsList[achievementId];
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <i class="fas ${achievement.icon}" style="color: ${achievement.color}"></i>
        <div class="achievement-content">
            <h4>${achievement.title}</h4>
            <p>${achievement.description}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Create confetti effect
    createConfetti();
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }, 100);
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!quizScreen.classList.contains('active')) return;
    
    const options = document.querySelectorAll('.option');
    if (options.length === 0) return;
    
    switch(e.key) {
        case '1':
        case '2':
        case '3':
        case '4':
            const index = parseInt(e.key) - 1;
            if (index < options.length) {
                options[index].click();
            }
            break;
        case 'h':
            showHint();
            break;
        case 's':
            skipQuestion();
            break;
    }
});

// Add new feedback functions
function showFeedback(message, type) {
    // Remove any existing feedback
    const existingFeedback = document.querySelector('.feedback-overlay');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Create feedback overlay
    const overlay = document.createElement('div');
    overlay.className = 'feedback-overlay';
    
    // Create feedback message
    const feedback = document.createElement('div');
    feedback.className = `feedback-message ${type}`;
    
    // Create icon element
    const icon = document.createElement('i');
    icon.className = `fas feedback-icon ${type === 'correct' ? 'fa-check-circle' : 'fa-times-circle'} ${type}`;
    
    // Create text element
    const text = document.createElement('div');
    text.className = 'feedback-text';
    text.textContent = message;
    
    // Add elements to feedback message
    feedback.appendChild(icon);
    feedback.appendChild(text);
    
    // Add feedback to overlay
    overlay.appendChild(feedback);
    
    // Add to document
    document.body.appendChild(overlay);
    
    // Remove feedback after delay
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }, 1500);
}

function createParticles(x, y) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 5 and 15 pixels
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random direction and distance
        const angle = (Math.random() * 360) * Math.PI / 180;
        const distance = Math.random() * 100 + 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#48bb78', '#f56565', '#f6ad55'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random size between 5 and 15 pixels
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random starting position
        confetti.style.left = `${Math.random() * 100}vw`;
        
        // Random rotation
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function showTimeBonus(bonus) {
    const bonusPopup = document.createElement('div');
    bonusPopup.className = 'time-bonus-popup';
    bonusPopup.textContent = `+${bonus} Time Bonus!`;
    
    const timer = document.querySelector('.timer');
    timer.appendChild(bonusPopup);
    
    setTimeout(() => {
        bonusPopup.remove();
    }, 1000);
}

function showStreakCounter() {
    let streakCounter = document.querySelector('.streak-counter');
    if (!streakCounter) {
        streakCounter = document.createElement('div');
        streakCounter.className = 'streak-counter';
        document.body.appendChild(streakCounter);
    }
    
    streakCounter.innerHTML = `
        <i class="fas fa-fire"></i>
        <span>${streak}x Streak!</span>
    `;
    
    if (streak > 0) {
        streakCounter.style.display = 'flex';
    } else {
        streakCounter.style.display = 'none';
    }
}

// Feedback form functionality
function initializeFeedbackForm() {
    const ratingStars = document.querySelectorAll('.rating-stars i');
    const feedbackForm = document.getElementById('feedbackForm');
    let selectedRating = 0;

    // Handle star rating
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
            selectedRating = index + 1;
            ratingStars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });

        star.addEventListener('mouseover', () => {
            ratingStars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });

    // Reset stars on mouseout
    document.querySelector('.rating-stars').addEventListener('mouseout', () => {
        ratingStars.forEach((star, index) => {
            if (index < selectedRating) {
                star.classList.remove('far');
                star.classList.add('fas');
            } else {
                star.classList.remove('fas');
                star.classList.add('far');
            }
        });
    });

    // Handle form submission
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const rating = selectedRating;
        const likedCategories = Array.from(document.querySelectorAll('input[name="liked"]:checked')).map(cb => cb.value);
        const comments = document.getElementById('feedbackComments').value;

        // Validate rating
        if (rating === 0) {
            showFeedback('Please select a rating', 'error');
            return;
        }

        // Create feedback object
        const feedback = {
            rating,
            likedCategories,
            comments,
            timestamp: new Date().toISOString(),
            quizStats: {
                score: score,
                timeBonus: timeBonus,
                streak: streak,
                difficulty: difficulty,
                category: categorySelect.value
            }
        };

        // Save feedback to localStorage
        saveFeedback(feedback);

        // Create and show success message with all feedback
        const successMessage = document.createElement('div');
        successMessage.className = 'feedback-success';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Feedback Submitted Successfully!</h3>
            <p>Thank you for your valuable feedback.</p>
            <div class="all-feedback">
                <h4>All Participants' Feedback</h4>
                <div class="feedback-list">
                    ${getAllFeedbackHTML()}
                </div>
            </div>
        `;

        // Hide form and show success message
        feedbackForm.style.display = 'none';
        document.querySelector('.feedback-form-container').appendChild(successMessage);

        // Remove success message and reset form after 5 seconds
        setTimeout(() => {
            successMessage.remove();
            feedbackForm.style.display = 'block';
            feedbackForm.reset();
            selectedRating = 0;
            ratingStars.forEach(star => {
                star.classList.remove('fas');
                star.classList.add('far');
            });
        }, 5000);
    });
}

function getAllFeedbackHTML() {
    const feedbacks = JSON.parse(localStorage.getItem('quizFeedbacks') || '[]');
    if (feedbacks.length === 0) {
        return '<p>No feedback yet. Be the first to share your thoughts!</p>';
    }

    return feedbacks.map(feedback => {
        const date = new Date(feedback.timestamp).toLocaleDateString();
        const stars = '★'.repeat(feedback.rating) + '☆'.repeat(5 - feedback.rating);
        return `
            <div class="feedback-item">
                <div class="feedback-header">
                    <span class="feedback-date">${date}</span>
                    <span class="feedback-rating">${stars}</span>
                </div>
                <div class="feedback-categories">
                    ${feedback.likedCategories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                </div>
                <p class="feedback-comment">${feedback.comments || 'No comment provided'}</p>
                <div class="feedback-stats">
                    <span>Category: ${feedback.quizStats.category}</span>
                    <span>Score: ${feedback.quizStats.score}</span>
                    <span>Difficulty: ${feedback.quizStats.difficulty}</span>
                    <span>Best Streak: ${feedback.quizStats.streak}</span>
                </div>
            </div>
        `;
    }).join('');
}

function saveFeedback(feedback) {
    let feedbacks = JSON.parse(localStorage.getItem('quizFeedbacks') || '[]');
    feedbacks.push(feedback);
    localStorage.setItem('quizFeedbacks', JSON.stringify(feedbacks));
} 