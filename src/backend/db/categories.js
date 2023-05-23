import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "History",
    description:
      "Explore the rich tapestry of human affairs through literature in the form of prose. Immerse yourself in captivating novels that vividly describe imaginary events and people.",
    img: "https://images.unsplash.com/photo-1581345837486-1bc7939100f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Philosophy",
    description:
      "Dive into the fascinating world of philosophical inquiry. Delve into the fundamental questions about existence, knowledge, values, reason, and more, and expand your understanding of life's profound mysteries.",
    img: "https://img.freepik.com/premium-photo/statue-man-with-beard-word-hercules-it_777078-6711.jpg?w=900",
  },
  {
    _id: uuid(),
    categoryName: "Self-Help",
    description:
      "Unlock your full potential for personal growth, happiness, and well-being. Discover a wide range of resources and techniques that offer practical guidance and empower you to enhance your life.",
    img: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-gesticulating_273609-40418.jpg?w=740&t=st=1684130962~exp=1684131562~hmac=39b75d3381d8b87b378d4573bddc8580f4ec37c5210df99f64ccc9e715779c14",
  },
  {
    _id: uuid(),
    categoryName: "Biography",
    description:
      "Step into the lives of remarkable individuals through captivating biographies. Gain unique insights into their experiences, achievements, and contributions as written by insightful authors.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Psychology",
    description:
      "Uncover the mysteries of the mind and behavior with our extensive collection of psychology books. Explore fascinating studies, theories, and research that illuminate the complexities of human cognition and emotions.",
    img: "https://img.freepik.com/free-photo/copy-space-paper-brain-with-light-bulb_23-2148519456.jpg?w=740&t=st=1684131883~exp=1684132483~hmac=fec17e2332fad2af137cce37ef43bde6943551ea107d9c51ca2d260fc39f024a",
  },
  {
    _id: uuid(),
    categoryName: "Finance",
    description:
      "Master the art of managing money, investments, and financial matters. Our finance collection offers valuable resources to help you navigate the intricate world of personal and business finance.",
    img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Classics",
    description:
      "Experience literary works, art, and cultural treasures that have stood the test of time. Immerse yourself in the enduring masterpieces that continue to inspire and captivate generations.",
    img: "https://images.unsplash.com/photo-1677024348381-13c9024e3ed1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Dystopian",
    description:
      "Embark on thrilling journeys through dystopian worlds of the future. Explore societies marked by oppression, conflict, and the indomitable human spirit in this captivating genre of fiction.",
    img: "https://img.freepik.com/free-photo/team-soldiers-walk-city-after-nuclear-war-illustration_456031-28.jpg?w=996&t=st=1684132763~exp=1684133363~hmac=33cfcc2d37f9b510c5f529e614e491894d8b8a80a3fa4f683e54678c4d6e5e05",
  },
  {
    _id: uuid(),
    categoryName: "Coming-of-Age",
    description:
      "Follow the transformative journeys of young protagonists as they navigate the challenges of adolescence and discover their identities. These coming-of-age stories resonate with universal experiences and themes of self-discovery.",
    img: "https://img.freepik.com/free-photo/side-view-pleased-brunette-woman-eyeglasses-sitting-bench-reading-book-park_231208-8081.jpg?w=740&t=st=1684133132~exp=1684133732~hmac=99252ccff88e1fd237e79863679a20894361b886ff966df089e8a5bc4550851b",
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    description:
      "Immerse yourself in intense, emotionally charged narratives that unfold on the pages of dramatic literature. Explore the depths of human emotions, relationships, and conflicts in this captivating genre.",
    img: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
    description:
      "Escape to enchanting worlds filled with supernatural elements, magical creatures, and epic adventures. Immerse yourself in the realms of fantasy where imagination knows no bounds.",
    img: "https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Mystery/Thriller",
    description:
      "Indulge in suspense, puzzles, and the thrill of solving mysteries with our captivating collection of mystery and thriller novels. Experience the adrenaline rush as you uncover secrets and unravel intricate plots.",
    img: "https://img.freepik.com/free-photo/truth-concept-composition-detective-desk_23-2149051321.jpg?w=740&t=st=1684134188~exp=1684134788~hmac=32a19c5385100d4741aa841b31aef8e2a764868a8e24a2b98c9e61ae9d142f43",
  },
  {
    _id: uuid(),
    categoryName: "Romance",
    description:
      "Experience the captivating world of love, passion, and emotional connections through our extensive romance collection. Immerse yourself in heartwarming tales of relationships, desire, and the triumph of love.",
    img: "https://images.unsplash.com/photo-1510276113764-7ac28415a9ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Business",
    description:
      "Gain insights into the world of commerce, entrepreneurship, and organizational management with our comprehensive business collection. Unlock strategies, knowledge, and inspiration to drive success in your professional endeavors.",
    img: "https://img.freepik.com/premium-photo/double-exposure-image-business-finance_31965-4219.jpg?w=740",
  },
  {
    _id: uuid(),
    categoryName: "Personal Development",
    description:
      "Embark on a transformative journey of personal growth and self-improvement with our curated selection of personal development resources. Discover actionable insights, tools, and techniques to unlock your full potential.",
    img: "https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
  },
];
