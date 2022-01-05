import React from 'react';
import {IonPage, IonToolbar, IonButtons, IonMenuButton, IonContent, IonItem, IonSelect, IonSelectOption, IonLabel} from '@ionic/react';
import Menu from '../components/menu';

class SettingForm extends React.Component{
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
          <IonItem>
            <IonLabel>Select Color</IonLabel>
            <IonSelect>
              <IonSelectOption value="brown">Brown</IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
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