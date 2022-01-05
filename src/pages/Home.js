import { IonContent, IonPage, IonToolbar, IonMenuButton, IonButtons} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer.js';
import './Home.css';
import Menu from '../components/menu.js';
import { StoreContext } from '../helper/Store.js';


const Home = () => {
  const {color} = React.useContext(StoreContext);

  return (
    <IonPage>
      <Menu />
      <IonToolbar color={color[0]} id="first">
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
