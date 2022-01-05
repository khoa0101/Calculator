import React from 'react';
import {IonPage, IonToolbar, IonButtons, IonMenuButton, IonContent, IonItem, IonSelect, IonSelectOption, IonLabel} from '@ionic/react';
import Menu from '../components/menu';
import { StoreContext } from '../helper/Store.js';

class Converter extends React.Component{
  static contextType = StoreContext;

  constructor(props){
    super(props);
  }

  render(){
    const color = this.context.color[0];
    
    return (
      <IonPage>
        <Menu />
        <IonToolbar color={color} id="first">
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
        <IonContent fullscreen>
          <div>
            <h1>Convert</h1>
            <input type="number" />
            <select>
              <option value="USD">USD</option>
            </select>
            <h1>=</h1>
            <input type="number" />
            <select>
              <option value="USD">USD</option>
            </select>
          </div>
        </IonContent>
      </IonPage>
    )
  }
}

export default Converter;