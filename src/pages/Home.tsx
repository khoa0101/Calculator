import { IonContent, IonHeader, IonPage, IonToolbar, IonMenu, IonMenuButton, IonButtons, IonTitle, IonItem, IonList} from '@ionic/react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer.js';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
        <IonMenu side="start" contentId="first">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Menu</IonTitle>
          </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem><Link to='/home'>Calculator</Link></IonItem>
              <IonItem><Link to='/converter'>Converter</Link></IonItem>
              <IonItem><Link to='/setting'>Setting</Link></IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
      <IonToolbar color='primary' id="first">
        <IonButtons slot='start'>
          <IonMenuButton></IonMenuButton>
        </IonButtons>
      </IonToolbar>
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
