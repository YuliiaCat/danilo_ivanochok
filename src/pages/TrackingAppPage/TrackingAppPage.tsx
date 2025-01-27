import style from './TrackingAppPage.module.scss';
import Image from "../../components/shared/Image/Image";
import ProjectInfo from '../../components/shared/ProjectInfo/ProjectInfo';
import trackingAppData from '../../assets/data/trackingAppData';
import surveysData from '../../assets/data/surveysData';
import InfoBlock from '../../components/shared/InfoBlock/InfoBlock';
import Phones from '../../components/shared/Phones/Phones';
import FinalDesign from '../../components/shared/FinalDesign/FinalDesign';
import Challenges from '../../components/shared/Challenges/Challenges';
import Users from '../../components/shared/Users/Users';
import usersData from '../../assets/data/usersData';
import imageData from '../../assets/data/imageData';
import pageData from '../../assets/data/pageData';
import { useEffect } from 'react';

const TrackingAppPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <Image className={style.mainBanner} />
      <ProjectInfo 
        project={trackingAppData}
        title='Transaction tracking app'
        />
      <div className={style.section}>
        <Image className={style.mockup} />
      </div>
      <Users
        data={usersData}
        passageOne={'Before starting the design process, we conducted an in-depth analysis of existing user behavior and purchase data to gain a deeper understanding of their needs. Additionally, we carried out a series of customer interviews.'}
        passageTwo={'Our goal was to identify the specific tasks users aim to accomplish with our product.We defined three primary user archetypes and matched each of them to their core jobs-to-be-done.'}
        trackingPage={true}
      />
      <div className={style.section}>
        <Image className={style.iphone} />
      </div>
      <ProjectInfo 
        project={surveysData}
        title='Surveys and interviews'
      />
      <InfoBlock 
        title={'User flow'}
        text={'Creating a user flow is a crucial stage of interface design as it enhances understanding of the user journey, optimizes interactions, and improves usability. It helps identify issues early, facilitates team communication, and ensures both user and business goals are met.'}
        className={style.rombUsers}
      />
      <Image className={style.usersFlow} />
      <InfoBlock 
        title={'Wireframes'}
        text={'Wireframes in UX design visualize the interface structure without details, allowing a focus on functionality and user flows. They simplify communication, save time and resources, and improve UX by helping understand user behavior and identify issues in the early stages.'}
        className={style.rombWire}
      />
      <Phones
        data={imageData}
        moviesPage={false}
      />
      <FinalDesign
        data={pageData}
        title={'Final Design'}
        passageOne={'In the process of developing the final version of the design, I utilized all the information gathered from the previous stages, which allowed me to address user needs and business goals effectively. Based on this data, I began creating the app’s stylistic design, paying close attention to every detail.'}
        passageTwo={'As a result, I successfully designed an intuitive and visually appealing interface that enables users to quickly and easily achieve their goals. The app effectively helps solve specific financial issues, providing convenience and a positive user experience.'}
      />
      <Challenges
        passageOne={'The main challenge was creating an intuitive design for users with varying levels of technical expertise. It was essential to ensure easy navigation between features like transactions, budgets, and reports while avoiding an overloaded interface and maintaining access to advanced functionalities.'}
        passageTwo={'Another challenge was enabling personalization, allowing users to tailor the app to their needs, such as adjusting expense categories or report formats. This required finding a balance between flexibility in customization and simplicity in use to ensure the app remained user-friendly for everyone.'}
      />
    </div>
  );
}

export default TrackingAppPage;