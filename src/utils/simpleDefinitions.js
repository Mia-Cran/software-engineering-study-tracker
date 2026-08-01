const simpleDefinitions = {
  html: {
    simpleDefinition:
      "HTML is the structure of a webpage. It tells the browser what content should appear.",
    example:
      "Headings, paragraphs, images, forms, and buttons are created with HTML.",
  },

  css: {
    simpleDefinition:
      "CSS controls how a webpage looks.",
    example:
      "CSS changes colors, spacing, layout, font sizes, borders, and how the page looks on phones.",
  },

  javascript: {
    simpleDefinition:
      "JavaScript adds behavior and interactivity to a webpage.",
    example:
      "When a user clicks a button and something changes on the page, JavaScript is usually involved.",
  },

  react: {
    simpleDefinition:
      "React is a JavaScript tool that helps developers build webpages using reusable pieces.",
    example:
      "Your StudyCard is a reusable piece because it shows topics on more than one page.",
  },

  component: {
    simpleDefinition:
      "A component is a reusable piece of a webpage.",
    example:
      "A button, header, search form, or study card can be a component.",
  },

  props: {
    simpleDefinition:
      "Props are information passed from one component to another.",
    example:
      "App passes savedTopics to SavedTopicsPage so the saved page knows what to show.",
  },

  state: {
    simpleDefinition:
      "State is information the app remembers while it is running.",
    example:
      "savedTopics is state because the app remembers which topics were saved.",
  },

  function: {
    simpleDefinition:
      "A function is a set of instructions that runs when something calls it.",
    example:
      "handleSaveTopic runs when the user clicks the Save Topic button.",
  },

  variable: {
    simpleDefinition:
      "A variable is a named container that holds information.",
    example:
      "searchQuery is a variable that holds what the user typed into the search box.",
  },

  array: {
    simpleDefinition:
      "An array is a list of items stored together.",
    example:
      "savedTopics is an array because it stores a list of saved study topics.",
  },

  object: {
    simpleDefinition:
      "An object stores related information using names and values.",
    example:
      "A topic object can store a title, description, and summary.",
  },

  api: {
    simpleDefinition:
      "An API is a way for two programs to talk to each other.",
    example:
      "Your app asks Wikipedia for topic information, and Wikipedia sends information back.",
  },

  fetch: {
    simpleDefinition:
      "Fetch is used to ask another place on the internet for data.",
    example:
      "Your app uses fetch to ask Wikipedia for a topic summary.",
  },

  route: {
    simpleDefinition:
      "A route is a path to a page in your app.",
    example:
      "/home shows the search page, and /saved shows the saved topics page.",
  },

  link: {
    simpleDefinition:
      "A link lets the user move to another page or place.",
    example:
      "The header links let users go to Home, Saved Topics, and About.",
  },

  form: {
    simpleDefinition:
      "A form collects information from the user.",
    example:
      "Your search form collects the topic the user wants to study.",
  },

  input: {
    simpleDefinition:
      "An input is a box where the user types information.",
    example:
      "The search input is where the user types React, API, or CSS.",
  },

  button: {
    simpleDefinition:
      "A button is something the user clicks to make an action happen.",
    example:
      "The Search button starts the Wikipedia search.",
  },

  localstorage: {
    simpleDefinition:
      "localStorage is browser storage that keeps information after refresh.",
    example:
      "Your app uses localStorage so saved topics do not disappear when the page refreshes.",
  },

  json: {
    simpleDefinition:
      "JSON is a common way to organize data so apps can send and receive it.",
    example:
      "Wikipedia sends your app topic information in a JSON format.",
  },

  github: {
    simpleDefinition:
      "GitHub is a place online where developers store and share code projects.",
    example:
      "You push your project to GitHub so your reviewer and Vercel can access it.",
  },

  git: {
    simpleDefinition:
      "Git is a tool that tracks changes in your code.",
    example:
      "A commit is like saving a checkpoint of your project.",
  },

  terminal: {
    simpleDefinition:
      "The terminal is a place where you type commands for your computer to run.",
    example:
      "You use the terminal to start your project with npm run dev.",
  },

  npm: {
    simpleDefinition:
      "npm helps install and run tools that JavaScript projects need.",
    example:
      "You use npm install to install packages and npm run dev to start your app.",
  },
};

export default simpleDefinitions;
