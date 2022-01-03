import { IonContent, IonHeader, IonPage, IonToolbar, IonMenu, IonMenuButton, IonButtons, IonTitle, IonItem, IonList, IonMenuToggle, IonButton} from '@ionic/react';
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
              <IonItem>Converter</IonItem>
              <IonItem>Settings</IonItem>
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
