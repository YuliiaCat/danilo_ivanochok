import { Page } from "../../types/page";

const pageData: Page[] = [
  {
    id: 1,
    title: 'Operations page',
    description: 'In the final version of the operations page, I implemented the core features through a dashboard. The page includes widgets for an overview of balances, expenses, and income, a tool for tracking accounts, and a transactions widget. The data can be adjusted by time frames and more',
    image: '/img/trackingapppage/page/operations.webp',
    height: '387px',
    deskHeight: '978px',
    widthDesk: '848px'
  },
  {
    id: 2,
    title: 'Plans page',
    description: 'The "Plans" tab includes two features — "Budgets" and "Goals." On the "Goals" page, users can easily create widgets to track progress and receive notifications. On the "Budgets" page, users can create budgets with categories, subcategories, and customizable settings for convenience.',
    image: '/img/trackingapppage/page/plans.webp',
    height: '185px',
    deskHeight: '623px',
  },
  {
    id: 3,
    title: 'Report page',
    description: 'Convenient report viewing is one of the most essential user needs I identified during previous stages. Therefore, I implemented this feature using a chart, which helps with easier report familiarization, along with a wide range of filters that allow for generating more targeted reports.',
    image: '/img/trackingapppage/page/report.webp',
    height: '291px',
    deskHeight: '735px',
    widthDesk: '848px'
  },
  {
    id: 4,
    title: 'Page for adding income or expenses',
    description: 'The page for adding expenses or income is one of the most frequently used by users. Therefore, I made this feature as convenient and intuitive as possible. I added the ability to specify various expense characteristics that users can include in a transaction to enable more precise filtering.',
    image: '/img/trackingapppage/page/adjusment.webp',
    height: '183px',
    deskHeight: '620px'
  },
]

export default pageData;