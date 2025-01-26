import { User } from "../../types/user";

const usersData: User[] = [
  { 
    id: 1, 
    photo: '/img/trackingapppage/mykola.webp', 
    name: 'Tourist Mykola', 
    about: 'Mykola is an expert in the pharmaceutical field, and in his free time, he loves traveling. Currently, Mykola is facing the challenge of tracking his expenses while traveling.',
    jobs: 'When I need to manage personal expenses. I want to reduce financial stress by controlling my expenses. To have financial confidence and be free from stress.'
  },
  { 
    id: 2, 
    photo: '/img/trackingapppage/oksana.webp', 
    name: 'Mom Oksana', 
    about: 'Oksana is a mother of two children. Currently, she is facing a challenge in creating a monthly budget, allocating it, and tracking expenses across different categories.',
    jobs: 'When I want to create a personal budget. I want a fixed budget to have saved money. To achieve financial goals, such as paying for their children\'s future education at a prestigious university with saved money.'
  },
  { 
    id: 3, 
    photo: '/img/trackingapppage/david.webp', 
    name: 'Beginner driver David', 
    about: 'David is a beginner driver who has just passed his driving test and wants to save money for his first car. David is facing the challenge of tracking his savings until he reaches the desired amount to purchase the car.',
    jobs: 'When I want to save up a certain amount of money. I want to buy a car, so I\'m saving money for it. To make getting around the city faster and more comfortable.'
  },
]

export default usersData;