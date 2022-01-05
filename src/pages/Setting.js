import React from 'react';
import {IonPage, IonToolbar, IonButtons, IonMenuButton, IonContent, IonItem, IonSelect, IonSelectOption, IonLabel} from '@ionic/react';
import Menu from '../components/menu';
import { StoreContext } from '../helper/Store.js';

class SettingForm extends React.Component{
  static contextType = StoreContext; 

  constructor(props){
    super(props);
  }

  render(){
    const color = this.context.color[0];
    const setColor = this.context.color[1];

    return (
      <IonPage>
        <Menu />
        <IonToolbar color={color} id="first">
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
        <IonContent fullscreen>
          <IonItem>
            <IonLabel>Select Color</IonLabel>
            <IonSelect onIonChange={e => setColor(e.target.value)}>
              <IonSelectOption value="primary">Purple</IonSelectOption>
              <IonSelectOption value="tertiary">Blue</IonSelectOption>
              <IonSelectOption value="dark">Dark</IonSelectOption>
              <IonSelectOption value="warning">Yellow</IonSelectOption>
            </IonSelect>
          </IonItem>
            {/* <IonItem>
            <IonLabel>Select Font</IonLabel>
            <IonSelect>
              <IonSelectOption value="brown">Brown</IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
          </IonItem> */}
        </IonContent>
      </IonPage>
    )
  }
}

export default SettingForm;