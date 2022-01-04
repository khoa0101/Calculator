import { IonContent, IonHeader, IonPage, IonToolbar, IonMenu, IonMenuButton, IonButtons, IonTitle, IonItem, IonList} from '@ionic/react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer.js';
import './Home.css';
import Menu from '../components/menu.js';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Menu />
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
