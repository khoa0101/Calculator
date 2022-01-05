import { IonContent, IonHeader, IonToolbar, IonMenu, IonTitle, IonItem, IonList} from '@ionic/react';
import { Link } from 'react-router-dom';
import React from 'react';
import { StoreContext } from '../helper/Store';

const Menu = () => {
    const {color} = React.useContext(StoreContext);
    
    return (
    <IonMenu side="start" contentId="first">
      <IonHeader>
        <IonToolbar color={color[0]}>
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
  )
}

export default Menu;