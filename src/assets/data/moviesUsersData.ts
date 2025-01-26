import { User } from "../../types/user";

const moviesUsersData: User[] = [
  { 
    id: 1, 
    photo: '/img/moviesInfoApp/users/maxim-mob.webp', 
    name: 'IT specialist Maxim', 
    about: 'Maxim is a professional in the IT field. In his free time, he enjoys watching movies. Currently, Maxim is facing the challenge of finding new movies that would interest him.',
    jobs: 'When I don\'t know which movie to watch, I want to learn about a specific movie to save time on searching and sorting through films.'
  },
  { 
    id: 2, 
    photo: '/img/moviesInfoApp/users/dmytro-mob.webp', 
    name: 'Accountant Dmytro', 
    about: 'Dmytro is a specialist in the field of accounting. In his free time, he enjoys watching TV series. He is currently facing the challenge of finding new series to watch.',
    jobs: 'When I know which movie to watch, I want to sort movies by specific criteria to quickly find one that matches my preferences.'
  },
]

export default moviesUsersData;