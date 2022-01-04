import { IonContent, IonHeader, IonToolbar, IonMenu, IonTitle, IonItem, IonList} from '@ionic/react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
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
  )
}

export default Menu;