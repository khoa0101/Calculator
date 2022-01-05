import React from 'react';
import {IonPage, IonToolbar, IonButtons, IonMenuButton, IonContent, IonItem, IonSelect, IonSelectOption, IonLabel} from '@ionic/react';
import Menu from '../components/menu';

class Converter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <IonPage>
        <Menu />
        <IonToolbar color='primary' id="first">
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
        <IonContent fullscreen>
        </IonContent>
      </IonPage>
    )
  }
}

export default Converter;