import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonList,
  IonItem,
  IonCheckbox,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

interface DetailsProps extends RouteComponentProps {}

const Details: React.FC<DetailsProps> = ({ location }) => {
  const todos = location.state ? (location.state as { todos: string[] }).todos : [];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/app/page1" />
          </IonButtons>
          <IonTitle>My To-Do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Make sure to mark your items as 'Done'!
        <IonList>
          {todos.map((item, index) => (
            <IonItem key={index}>
              <IonCheckbox slot="start" />
              {item}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Details;
