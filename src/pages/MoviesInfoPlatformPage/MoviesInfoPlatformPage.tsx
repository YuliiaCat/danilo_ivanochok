import style from './MoviesInfoPlatformPage.module.scss';
import ProjectInfo from "../../components/shared/ProjectInfo/ProjectInfo";
import Image from '../../components/shared/Image/Image';
import Users from '../../components/shared/Users/Users';
import InfoBlock from '../../components/shared/InfoBlock/InfoBlock';
import FinalDesign from '../../components/shared/FinalDesign/FinalDesign';
import Challenges from '../../components/shared/Challenges/Challenges';
import moviesInfoPlatformData from '../../assets/data/moviesInfoPlatformData';
import surveysMoviesData from '../../assets/data/surveysMoviesData';
import analysisData from '../../assets/data/analysisData';
import moviesUsersData from '../../assets/data/moviesUsersData';
import Phones from '../../components/shared/Phones/Phones';
import templateData from '../../assets/data/templateData';
import moviesPageData from '../../assets/data/moviesPageData';
import { useEffect } from 'react';

const MoviesInfoPlatformPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <Image className={style.mainBanner} />
      <ProjectInfo 
        project={moviesInfoPlatformData}
        title='Movies Informational Platform'
        />
      <ProjectInfo
        project={analysisData}
        title='Competitor analysis'
      />
      <div className={style.section}>
        <Image className={style.mackbook} />
      </div>
      <Users
        data={moviesUsersData}
        passageOne={'Before starting the design process, we carefully analyzed user behavior and purchase data to gain a clearer understanding of their needs. This helped us identify important patterns and trends to inform the design direction.'}
        passageTwo={'Our objective was to pinpoint the key tasks users want to accomplish with our product. We identified three main user archetypes and aligned each with their primary jobs-to-be-done.'}
        trackingPage={false}
       />
      <ProjectInfo 
        project={surveysMoviesData}
        title='Surveys and interviews'
      />
      <InfoBlock 
        title={'User flow'}
        text={'Creating a user flow is an essential step in interface design as it clarifies the user journey, streamlines interactions, and boosts usability. It allows for early identification of issues, promotes better communication within the team, and ensures the alignment of user and business goals.'}
        className={style.rombUsers}
      />
      <Image className={style.usersFlow} />
      <InfoBlock 
        title={'Wireframes'}
        text={'Wireframes in UX design represent the basic structure of the interface without detailed elements, enabling a focus on functionality and user flows. They streamline communication, save time and resources, and enhance UX by providing insights into user behavior and allowing early identification of potential issues.'}
        className={style.rombWire}
      />
      <Phones
        data={templateData}
        moviesPage={true}
      />
      <FinalDesign
        data={moviesPageData}
        title={'Final Design'}
        passageOne={'During the development of the final design version, I utilized all the information gathered from the previous stages, which allowed me to effectively address user needs. Based on this data, I began creating the stylistic design of the web service, paying attention to every detail.'}
        passageTwo={'As a result, I created an intuitive and visually appealing interface that enables users to quickly and easily achieve their goals. The app effectively solves specific problems, providing convenience and a positive user experience.'}
      />
      <Challenges
        passageOne={'The main challenge was creating a simple, user-friendly design for users with varying experience levels, ensuring easy navigation between features like searching for movies, creating lists, managing a watchlist, and keeping a viewing diary, without overloading the interface.'}
        passageTwo={'Another task was offering personalization options, allowing users to adjust the app to their preferences and track content, balancing customization with ease of use to keep the app accessible for all.'}
      />
    </div>
  );
}

export default MoviesInfoPlatformPage;