import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["History", "Philosophy"],
    stockQty: 50,
    rating: 4.5,
    pages: 416,
    releaseDate: "2014-02-10",
    aboutAuthor:
      "Yuval Noah Harari is a professor of history and author of several books on historical and philosophical topics.",
    aboutBook:
      "Sapiens: A Brief History of Humankind is a captivating exploration of the history and evolution of Homo sapiens. Yuval Noah Harari takes readers on a thought-provoking journey, examining key events and developments that shaped our species. From the emergence of Homo sapiens in Africa to the rise of agriculture and the scientific revolution, this book offers a unique perspective on the human story.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/714FbKtXS+L.jpg",
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 249,
    originalPrice: 399,
    isBestSeller: true,
    category: ["Self-Help"],
    stockQty: 30,
    rating: 4.6,
    pages: 236,
    releaseDate: "1997-09-29",
    aboutAuthor:
      "Eckhart Tolle is a spiritual teacher and author known for his teachings on mindfulness and presence.",
    aboutBook:
      "The Power of Now is a transformative guide that emphasizes the importance of living in the present moment. Eckhart Tolle provides insights and practical advice to help readers achieve a state of inner peace and clarity. By focusing on the present and letting go of past regrets and future worries, this book offers a pathway to experiencing a deeper sense of joy and fulfillment in life.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81dDwAzxtrL.jpg",
    title: "Becoming",
    author: "Michelle Obama",
    price: 399,
    originalPrice: 599,
    isBestSeller: true,
    category: ["Biography"],
    stockQty: 40,
    rating: 4.8,
    pages: 448,
    releaseDate: "2018-11-13",
    aboutAuthor:
      "Michelle Obama is an American attorney and author. She served as the First Lady of the United States from 2009 to 2017.",
    aboutBook:
      "Becoming is a powerful memoir by Michelle Obama, sharing her journey from a young girl on the South Side of Chicago to becoming the First Lady of the United States. With authenticity and grace, Obama reflects on her experiences, personal growth, and the impact of her role in the White House. This inspiring book provides insights into her life, her advocacy for various causes, and her unwavering commitment to empowering others.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71m+kC4vOxL.jpg",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 299,
    originalPrice: 499,
    isBestSeller: false,
    category: ["Psychology", "Finance"],
    stockQty: 20,
    rating: 4.7,
    pages: 512,
    releaseDate: "2011-10-25",
    aboutAuthor:
      "Daniel Kahneman is an Israeli-American psychologist and Nobel laureate. He is known for his work in the field of behavioral economics.",
    aboutBook:
      "Thinking, Fast and Slow is a groundbreaking exploration of the mind and the two systems that drive how we think: the fast, intuitive system, and the slow, deliberate system. Daniel Kahneman, a renowned psychologist and Nobel laureate, delves into the cognitive biases and heuristics that shape our decision-making processes. This book offers valuable insights into human behavior, reasoning, and the complexities of the mind.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81oMQeXD1PL.jpg",
    title: "Blink: The Power of Thinking Without Thinking",
    author: "Malcolm Gladwell",
    price: 249,
    originalPrice: 399,
    isBestSeller: true,
    category: ["Psychology"],
    stockQty: 10,
    rating: 4.4,
    pages: 320,
    releaseDate: "2005-01-11",
    aboutAuthor:
      "Malcolm Gladwell is a Canadian journalist and author known for his books on social sciences.",
    aboutBook:
      "Blink: The Power of Thinking Without Thinking explores the power of intuitive thinking and snap judgments. Malcolm Gladwell investigates the concept of 'thin-slicing' and how our unconscious mind can make accurate decisions in the blink of an eye. Through captivating anecdotes and scientific research, Gladwell sheds light on the fascinating world of rapid cognition and the factors that influence our instincts and gut feelings.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Classics"],
    stockQty: 50,
    rating: 4.8,
    pages: 281,
    releaseDate: "1960-07-11",
    aboutAuthor:
      "Harper Lee was an American novelist widely known for her novel 'To Kill a Mockingbird.'",
    aboutBook:
      "To Kill a Mockingbird is a classic novel that explores themes of racial injustice and the loss of innocence in the American South.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    title: "1984",
    author: "George Orwell",
    price: 249,
    originalPrice: 399,
    isBestSeller: true,
    category: ["Dystopian"],
    stockQty: 30,
    rating: 4.6,
    pages: 328,
    releaseDate: "1949-06-08",
    aboutAuthor:
      "George Orwell, whose real name was Eric Arthur Blair, was an English novelist and essayist.",
    aboutBook:
      "1984 is a dystopian novel that depicts a totalitarian society and explores themes of government surveillance, thought control, and manipulation of truth.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 299,
    originalPrice: 499,
    isBestSeller: false,
    category: ["Classics"],
    stockQty: 40,
    rating: 4.5,
    pages: 180,
    releaseDate: "1925-04-10",
    aboutAuthor:
      "F. Scott Fitzgerald was an American writer and novelist known for his portrayal of the Jazz Age.",
    aboutBook:
      "The Great Gatsby is a classic novel that explores themes of wealth, love, and the American Dream in the 1920s.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91HPG31dTwL.jpg",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Coming-of-Age", "Drama"],
    stockQty: 0,
    rating: 4.2,
    pages: 277,
    releaseDate: "1951-07-16",
    aboutAuthor:
      "J.D. Salinger was an American writer known for his novel 'The Catcher in the Rye.'",
    aboutBook:
      "The Catcher in the Rye is a coming-of-age novel that follows the story of Holden Caulfield, a teenager grappling with identity, loss, and societal conformity.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71jLBXtWJWL.jpg",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: 349,
    originalPrice: 599,
    isBestSeller: true,
    category: ["Fantasy"],
    stockQty: 50,
    rating: 4.9,
    pages: 1178,
    releaseDate: "1954-07-29",
    aboutAuthor:
      "J.R.R. Tolkien was an English writer, poet, philologist, and university professor.",
    aboutBook:
      "The Lord of the Rings is a fantasy epic that takes place in the fictional world of Middle-earth and follows the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/41KjuBg5k8L._SX498_BO1,204,203,200_.jpg",
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Mystery/Thriller"],
    stockQty: 30,
    rating: 4.4,
    pages: 432,
    releaseDate: "2012-06-05",
    aboutAuthor:
      "Gillian Flynn is an American author known for her psychological thriller novels.",
    aboutBook:
      "Gone Girl is a psychological thriller novel that explores the story of a marriage gone wrong, filled with twists and unexpected turns.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71ErsKpwmrS.jpg",
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    price: 249,
    originalPrice: 399,
    isBestSeller: true,
    category: ["Mystery/Thriller"],
    stockQty: 40,
    rating: 4.2,
    pages: 336,
    releaseDate: "2015-01-13",
    aboutAuthor:
      "Paula Hawkins is a British author known for her thriller novels.",
    aboutBook:
      "The Girl on the Train is a gripping psychological thriller that follows the story of a woman who becomes entangled in a mysterious disappearance.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91Q5dCjc2KL.jpg",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    price: 349,
    originalPrice: 599,
    isBestSeller: false,
    category: ["Mystery/Thriller"],
    stockQty: 20,
    rating: 4.6,
    pages: 592,
    releaseDate: "2003-03-18",
    aboutAuthor:
      "Dan Brown is an American author known for his thriller novels, particularly the Robert Langdon series.",
    aboutBook:
      "The Da Vinci Code is a captivating thriller that combines art, history, and mystery as the protagonist uncovers a hidden secret that could change the course of history.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51oVTRsjcqL._SX329_BO1,204,203,200_.jpg",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Mystery/Thriller"],
    stockQty: 9,
    rating: 4.7,
    pages: 336,
    releaseDate: "2019-02-05",
    aboutAuthor:
      "Alex Michaelides is a British-Cypriot author and screenwriter known for his psychological thriller novels.",
    aboutBook:
      "The Silent Patient is a gripping psychological thriller that follows the story of a renowned artist who suddenly stops speaking after a brutal crime and the psychotherapist who becomes obsessed with uncovering the truth.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81UhKOBDrCL.jpg",
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Mystery/Thriller"],
    stockQty: 50,
    rating: 4.5,
    pages: 672,
    releaseDate: "2005-08-23",
    aboutAuthor:
      "Stieg Larsson was a Swedish journalist and author known for his Millennium series of crime novels.",
    aboutBook:
      "The Girl with the Dragon Tattoo is a gripping crime thriller that follows the story of a journalist and a talented hacker as they delve into a dark and complex mystery involving a wealthy family.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Romance"],
    stockQty: 50,
    rating: 4.7,
    pages: 432,
    releaseDate: "1813-01-28",
    aboutAuthor:
      "Jane Austen was an English novelist known for her works of romantic fiction.",
    aboutBook:
      "Pride and Prejudice is a classic romance novel that follows the story of Elizabeth Bennet and her complicated relationship with the proud Mr. Darcy.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91xD+7HtVfL.jpg",
    title: "Outlander",
    author: "Diana Gabaldon",
    price: 299,
    originalPrice: 449,
    isBestSeller: false,
    category: ["Romance"],
    stockQty: 40,
    rating: 4.5,
    pages: 896,
    releaseDate: "1991-06-01",
    aboutAuthor:
      "Diana Gabaldon is an American author known for the Outlander series of novels.",
    aboutBook:
      "Outlander is a historical romance novel that follows the story of Claire Randall, a World War II nurse who finds herself transported back in time to 18th-century Scotland, where she meets the dashing Jamie Fraser.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/710v59ixsEL.jpg",
    title: "The Notebook",
    author: "Nicholas Sparks",
    price: 249,
    originalPrice: 399,
    isBestSeller: true,
    category: ["Romance"],
    stockQty: 40,
    rating: 4.6,
    pages: 272,
    releaseDate: "1996-10-01",
    aboutAuthor:
      "Nicholas Sparks is an American author known for his romance novels, many of which have been adapted into films.",
    aboutBook:
      "The Notebook is a heartwarming love story that follows the journey of Noah and Allie, two young lovers whose paths cross again years after their summer romance.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81COeJEEL7L.jpg",
    title: "Me Before You",
    author: "Jojo Moyes",
    price: 279,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Romance"],
    stockQty: 30,
    rating: 4.4,
    pages: 512,
    releaseDate: "2012-01-05",
    aboutAuthor:
      "Jojo Moyes is an English author known for her romantic novels, including Me Before You.",
    aboutBook:
      "Me Before You is a poignant romance novel that tells the story of Louisa Clark, a young woman who becomes a caregiver for Will Traynor, a quadriplegic man, and their deepening connection that challenges their perspectives on life and love.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/A1c9bOWb6RL.jpg",
    title: "The Fault in Our Stars",
    author: "John Green",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Romance"],
    stockQty: 20,
    rating: 4.3,
    pages: 313,
    releaseDate: "2012-01-10",
    aboutAuthor:
      "John Green is an American author known for his young adult novels, including The Fault in Our Stars.",
    aboutBook:
      "The Fault in Our Stars is a heart-wrenching young adult romance novel that follows the story of Hazel and Gus, two teenagers living with cancer, as they navigate love, friendship, and the complexities of life.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/917TGSXH7RL.jpg",
    title: "Meditations",
    author: "Marcus Aurelius",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Philosophy"],
    stockQty: 50,
    rating: 4.6,
    pages: 304,
    releaseDate: "180 AD",
    aboutAuthor:
      "Marcus Aurelius was a Roman emperor and philosopher known for his book Meditations.",
    aboutBook:
      "Meditations is a collection of personal reflections and philosophical thoughts written by Marcus Aurelius, offering insights on Stoicism and the art of living a virtuous life.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/9176A9Hpd2L.jpg",
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    price: 249,
    originalPrice: 399,
    isBestSeller: false,
    category: ["Philosophy"],
    stockQty: 30,
    rating: 4.4,
    pages: 352,
    releaseDate: "1883",
    aboutAuthor:
      "Friedrich Nietzsche was a German philosopher known for his provocative and influential works.",
    aboutBook:
      "Thus Spoke Zarathustra is a philosophical novel by Friedrich Nietzsche, exploring themes of the death of God, the will to power, and the eternal recurrence of the same.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81Kr+YIWjCL.jpg",
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    price: 279,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Philosophy"],
    stockQty: 20,
    rating: 4.5,
    pages: 240,
    releaseDate: "1886",
    aboutAuthor:
      "Friedrich Nietzsche was a German philosopher known for his provocative and influential works.",
    aboutBook:
      "Beyond Good and Evil is a philosophical book by Friedrich Nietzsche, challenging traditional moral and philosophical concepts and advocating for the reevaluation of values.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81PEato5oDL.jpg",
    title: "The Republic",
    author: "Plato",
    price: 299,
    originalPrice: 599,
    isBestSeller: true,
    category: ["Philosophy"],
    stockQty: 10,
    rating: 4.7,
    pages: 416,
    releaseDate: "380 BC",
    aboutAuthor:
      "Plato was an ancient Greek philosopher and the founder of the Academy in Athens.",
    aboutBook:
      "The Republic is a philosophical dialogue by Plato, discussing various topics such as justice, the nature of the ideal state, and the role of philosophy in society.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71qbK90zBjL.jpg",
    title: "The Art of War",
    author: "Sun Tzu",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Philosophy"],
    stockQty: 50,
    rating: 4.8,
    pages: 273,
    releaseDate: "5th century BC",
    aboutAuthor:
      "Sun Tzu was a Chinese general, military strategist, and philosopher.",
    aboutBook:
      "The Art of War is a treatise on military strategy written by Sun Tzu, providing insights into warfare tactics, leadership, and the importance of strategic planning.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61wADuboi4L.jpg",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Self-Help"],
    stockQty: 40,
    rating: 4.7,
    pages: 381,
    releaseDate: "1989",
    aboutAuthor:
      "Stephen R. Covey was an American educator, author, and businessman known for his self-help and leadership books.",
    aboutBook:
      "The 7 Habits of Highly Effective People is a self-help book by Stephen R. Covey, providing a holistic approach to personal and professional effectiveness based on timeless principles and habits.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    price: 249,
    originalPrice: 399,
    isBestSeller: true,
    category: ["Self-Help"],
    stockQty: 6,
    rating: 4.8,
    pages: 320,
    releaseDate: "2018",
    aboutAuthor:
      "James Clear is an author, speaker, and productivity expert known for his work on habits, decision-making, and continuous improvement.",
    aboutBook:
      "Atomic Habits is a self-help book by James Clear, providing practical strategies for building good habits, breaking bad ones, and mastering the art of continuous improvement.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51Hfv2MfNGL._SX331_BO1,204,203,200_.jpg",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Self-Help", "Finance"],
    stockQty: 4,
    rating: 4.6,
    pages: 336,
    releaseDate: "1997",
    aboutAuthor:
      "Robert T. Kiyosaki is an entrepreneur and author known for his personal finance and investment advice.",
    aboutBook:
      "Rich Dad Poor Dad is a personal finance book by Robert T. Kiyosaki, presenting his experiences and insights into financial education, wealth creation, and the mindset required for financial success.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 249,
    originalPrice: 399,
    isBestSeller: true,
    category: ["Self-Help"],
    stockQty: 10,
    rating: 4.4,
    pages: 224,
    releaseDate: "2016",
    aboutAuthor:
      "Mark Manson is a blogger and author known for his self-help and personal development writings.",
    aboutBook:
      "The Subtle Art of Not Giving a F*ck is a self-help book by Mark Manson, encouraging readers to embrace a more honest and less positive-thinking approach to life.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/919mmNCTaaL.jpg",
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Finance"],
    stockQty: 40,
    rating: 4.6,
    pages: 640,
    releaseDate: "1949",
    aboutAuthor:
      "Benjamin Graham was an American economist and investor known for his value investing philosophy.",
    aboutBook:
      "The Intelligent Investor is a finance book by Benjamin Graham, providing guidance and principles for investing wisely and avoiding common pitfalls in the stock market.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71K518cj-jL.jpg",
    title: "A Random Walk Down Wall Street",
    author: "Burton G. Malkiel",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Finance"],
    stockQty: 10,
    rating: 4.6,
    pages: 496,
    releaseDate: "1973",
    aboutAuthor:
      "Burton G. Malkiel is an American economist and writer known for his books on investment strategies and personal finance.",
    aboutBook:
      "A Random Walk Down Wall Street is a finance book by Burton G. Malkiel, providing insights into investment strategies and the efficient market hypothesis.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Business"],
    stockQty: 50,
    rating: 4.7,
    pages: 336,
    releaseDate: "2011",
    aboutAuthor:
      "Eric Ries is an entrepreneur and author known for his methodology on lean startup and continuous innovation.",
    aboutBook:
      "The Lean Startup is a business book by Eric Ries, presenting a methodology for developing startups and products through validated learning, scientific experimentation, and iterative practices.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/41kONb0oymL._SX330_BO1,204,203,200_.jpg",
    title: "The E-Myth Revisited",
    author: "Michael E. Gerber",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Business"],
    stockQty: 40,
    rating: 4.6,
    pages: 268,
    releaseDate: "1995",
    aboutAuthor:
      "Michael E. Gerber is an author and small business expert known for his insights on entrepreneurship and the E-Myth concept.",
    aboutBook:
      "The E-Myth Revisited is a business book by Michael E. Gerber, exploring the myths and misconceptions surrounding starting and running small businesses, and providing guidance on building successful enterprises.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61YfNhp-6uL.jpg",
    title: "Good to Great",
    author: "Jim Collins",
    price: 249,
    originalPrice: 399,
    isBestSeller: false,
    category: ["Business"],
    stockQty: 20,
    rating: 4.5,
    pages: 400,
    releaseDate: "2001",
    aboutAuthor:
      "Jim Collins is a researcher and author known for his work on company sustainability and high-performance organizations.",
    aboutBook:
      "Good to Great is a business book by Jim Collins, investigating why some companies make the leap from being good to becoming truly great and sustainable over time.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51MLvC+JryL.jpg",
    title: "The Four Steps to the Epiphany",
    author: "Steve Blank",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Business"],
    stockQty: 10,
    rating: 4.6,
    pages: 280,
    releaseDate: "2003",
    aboutAuthor:
      "Steve Blank is an entrepreneur and author known for his work on customer development and the lean startup methodology.",
    aboutBook:
      "The Four Steps to the Epiphany is a business book by Steve Blank, offering insights and practical advice on building successful startups based on the customer development process.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/811pr+4v89L.jpg",
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Business"],
    stockQty: 50,
    rating: 4.7,
    pages: 286,
    releaseDate: "1997",
    aboutAuthor:
      "Clayton M. Christensen was an American business theorist and professor known for his work on disruptive innovation.",
    aboutBook:
      "The Innovator's Dilemma is a business book by Clayton M. Christensen, presenting the concept of disruptive innovation and its impact on established companies.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/810u9MkT3SL.jpg",
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["Business"],
    stockQty: 40,
    rating: 4.6,
    pages: 304,
    releaseDate: "2014",
    aboutAuthor:
      "Ben Horowitz is a technology entrepreneur and venture capitalist known for his experiences in building and leading startups.",
    aboutBook:
      "The Hard Thing About Hard Things is a business book by Ben Horowitz, sharing practical advice and insights on the challenges faced by startup founders and CEOs.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91y5XODFZ+L.jpg",
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Biography"],
    stockQty: 35,
    rating: 4.7,
    pages: 352,
    releaseDate: "June 25, 1947",
    aboutAuthor:
      "Anne Frank was a Jewish girl who documented her experiences during the Holocaust in her diary. Her writings provide a poignant and powerful account of life in hiding and have become an important historical record.",
    aboutBook:
      "The Diary of a Young Girl is a biographical book by Anne Frank, offering a firsthand account of her life in hiding during the Nazi occupation of the Netherlands.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51ZaFL6B7lL.jpg",
    title: "Hamlet",
    author: "William Shakespeare",
    price: 199,
    originalPrice: 299,
    isBestSeller: false,
    category: ["Drama"],
    stockQty: 30,
    rating: 4.6,
    pages: 320,
    releaseDate: "1603",
    aboutAuthor:
      "William Shakespeare was an English poet, playwright, and actor widely regarded as the greatest writer in the English language. His works, including 'Hamlet,' have had a profound and lasting impact on literature and theater.",
    aboutBook:
      "Hamlet is a famous tragedy by William Shakespeare, exploring themes of revenge, betrayal, and moral dilemmas.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91D4YvdC0dL.jpg",
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 249,
    originalPrice: 399,
    isBestSeller: true,
    category: ["Dystopian"],
    stockQty: 20,
    rating: 4.5,
    pages: 288,
    releaseDate: "1932",
    aboutAuthor:
      "Aldous Huxley was an English writer and philosopher. His dystopian novel 'Brave New World' explores themes of technology, conformity, and the dangers of a totalitarian society.",
    aboutBook:
      "Brave New World is a dystopian novel by Aldous Huxley, presenting a future society where human life is controlled and regulated in pursuit of stability and happiness.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/41CiEb1Qx2L._SX355_BO1,204,203,200_.jpg",
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    price: 199,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Coming-of-Age"],
    stockQty: 25,
    rating: 4.7,
    pages: 213,
    releaseDate: "February 1, 1999",
    aboutAuthor:
      "Stephen Chbosky is an American novelist, screenwriter, and film director. He is best known for his coming-of-age novel 'The Perks of Being a Wallflower,' which has resonated with readers for its raw and honest portrayal of adolescence, friendship, and self-discovery. Chbosky's work captures the universal experiences of youth and has garnered a dedicated following.",
    aboutBook:
      "The Perks of Being a Wallflower is a coming-of-age novel by Stephen Chbosky. It follows the story of Charlie, an introverted high school freshman, as he navigates friendship, love, and the challenges of growing up.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81RdveuYXWL.jpg",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    price: 299,
    originalPrice: 499,
    isBestSeller: true,
    category: ["History"],
    stockQty: 15,
    rating: 4.8,
    pages: 496,
    releaseDate: "1997",
    aboutAuthor:
      "Jared Diamond is an American geographer, historian, and author. He is known for his multidisciplinary approach to understanding human history and societies. In 'Guns, Germs, and Steel,' Diamond explores the factors that have shaped the course of human history, including geography, technology, and culture. His work challenges traditional explanations of inequality among civilizations and offers a compelling perspective on the complexities of human development.",
    aboutBook:
      "Guns, Germs, and Steel is a book by Jared Diamond that examines the impact of geographic and environmental factors on the rise of civilizations. Diamond explores the inequalities between different societies and provides a thought-provoking analysis of human history.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71gwdjwLMPL.jpg",
    title: "Why Has Nobody Told Me This Before?",
    author: "Dr. Julie Smith",
    price: 149,
    originalPrice: 199,
    isBestSeller: false,
    category: ["Self-Help", "Personal Development"],
    stockQty: 10,
    rating: 4.9,
    pages: 256,
    releaseDate: "June 15, 2022",
    aboutAuthor:
      "Dr. Julie Smith has over ten years' experience as a clinical psychologist and was the first professional to use TikTok to give insights on therapy. Her book, 'Why Has Nobody Told Me This Before?' offers practical advice and insights for overcoming common challenges and achieving personal growth. Dr. Julie's work has been praised for its clarity and actionable strategies, making it a must-read for anyone seeking self-improvement.",
    aboutBook:
      "Why Has Nobody Told Me This Before? is a self-help book by Dr. Julie Smith. It provides practical advice and insights for overcoming common challenges and achieving personal growth. The book covers a range of topics related to self-improvement and has received positive reviews for its actionable strategies.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81m1s4wIPML.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 249,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Fantasy"],
    stockQty: 8,
    rating: 4.8,
    pages: 223,
    releaseDate: "June 26, 1997",
    aboutAuthor:
      "J.K. Rowling is a British author, best known for creating the Harry Potter series. Her magical world and compelling storytelling have captivated readers of all ages. Rowling's books have sold millions of copies worldwide and have been adapted into a successful film franchise.",
    aboutBook:
      "Harry Potter and the Philosopher's Stone is the first book in the Harry Potter series by J.K. Rowling. It introduces readers to the world of Hogwarts School of Witchcraft and Wizardry and follows the journey of Harry Potter as he discovers his magical abilities and confronts the dark wizard Lord Voldemort. The book explores themes of friendship, courage, and the power of love.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81S0LnPGGUL.jpg",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    price: 249,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Fantasy"],
    stockQty: 40,
    rating: 4.7,
    pages: 251,
    releaseDate: "July 2, 1998",
    aboutAuthor:
      "J.K. Rowling is a British author, best known for creating the Harry Potter series. Her magical world and compelling storytelling have captivated readers of all ages. Rowling's books have sold millions of copies worldwide and have been adapted into a successful film franchise.",
    aboutBook:
      "Harry Potter and the Chamber of Secrets is the second book in the Harry Potter series by J.K. Rowling. In this book, Harry returns to Hogwarts School of Witchcraft and Wizardry for his second year, encountering a series of mysterious and dangerous events. The book explores themes of bravery, prejudice, and the power of truth.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81f7bXC-tTL.jpg",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    price: 249,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Fantasy"],
    stockQty: 35,
    rating: 4.9,
    pages: 317,
    releaseDate: "July 8, 1999",
    aboutAuthor:
      "J.K. Rowling is a British author, best known for creating the Harry Potter series. Her magical world and compelling storytelling have captivated readers of all ages. Rowling's books have sold millions of copies worldwide and have been adapted into a successful film franchise.",
    aboutBook:
      "Harry Potter and the Prisoner of Azkaban is the third book in the Harry Potter series by J.K. Rowling. In this installment, Harry returns to Hogwarts School of Witchcraft and Wizardry, where he encounters a dangerous escaped prisoner and learns more about his own past. The book delves into themes of friendship, loyalty, and the choices we make.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/810jKiNChxL.jpg",
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    price: 249,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Fantasy"],
    stockQty: 30,
    rating: 4.8,
    pages: 636,
    releaseDate: "July 8, 2000",
    aboutAuthor:
      "J.K. Rowling is a British author, best known for creating the Harry Potter series. Her magical world and compelling storytelling have captivated readers of all ages. Rowling's books have sold millions of copies worldwide and have been adapted into a successful film franchise.",
    aboutBook:
      "Harry Potter and the Goblet of Fire is the fourth book in the Harry Potter series by J.K. Rowling. In this installment, Harry competes in the Triwizard Tournament, uncovering dark secrets and facing dangerous challenges. The book explores themes of identity, betrayal, and the consequences of choices.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81a4yXpXjnL.jpg",
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    price: 249,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Fantasy"],
    stockQty: 25,
    rating: 4.7,
    pages: 870,
    releaseDate: "June 21, 2003",
    aboutAuthor:
      "J.K. Rowling is a British author, best known for creating the Harry Potter series. Her magical world and compelling storytelling have captivated readers of all ages. Rowling's books have sold millions of copies worldwide and have been adapted into a successful film franchise.",
    aboutBook:
      "Harry Potter and the Order of the Phoenix is the fifth book in the Harry Potter series by J.K. Rowling. In this installment, Harry faces new challenges and forms a secret society to counter Lord Voldemort's influence. The book explores themes of rebellion, adolescence, and the power of unity.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81p2+4nYtkL.jpg",
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    price: 249,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Fantasy"],
    stockQty: 20,
    rating: 4.9,
    pages: 607,
    releaseDate: "July 16, 2005",
    aboutAuthor:
      "J.K. Rowling is a British author, best known for creating the Harry Potter series. Her magical world and compelling storytelling have captivated readers of all ages. Rowling's books have sold millions of copies worldwide and have been adapted into a successful film franchise.",
    aboutBook:
      "Harry Potter and the Half-Blood Prince is the sixth book in the Harry Potter series by J.K. Rowling. In this installment, Harry continues his magical education at Hogwarts School of Witchcraft and Wizardry while facing the growing threat of Lord Voldemort. The book delves into themes of love, loss, and the complexities of loyalty.",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81Whkax7IGL.jpg",
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    price: 249,
    originalPrice: 299,
    isBestSeller: true,
    category: ["Fantasy"],
    stockQty: 15,
    rating: 4.9,
    pages: 607,
    releaseDate: "July 21, 2007",
    aboutAuthor:
      "J.K. Rowling is a British author, best known for creating the Harry Potter series. Her magical world and compelling storytelling have captivated readers of all ages. Rowling's books have sold millions of copies worldwide and have been adapted into a successful film franchise.",
    aboutBook:
      "Harry Potter and the Deathly Hallows is the seventh and final book in the Harry Potter series by J.K. Rowling. In this thrilling conclusion, Harry Potter faces his ultimate battle against Lord Voldemort. The book explores themes of love, sacrifice, and the power of friendship.",
  },
];
