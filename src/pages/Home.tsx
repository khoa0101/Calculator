import { IonContent, IonHeader, IonPage, IonToolbar, IonMenuButton, IonButtons, IonIcon, IonTitle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer.js';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons>
            <IonMenuButton auto-hide='false'></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
