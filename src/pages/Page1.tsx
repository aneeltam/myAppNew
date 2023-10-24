import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonInput,
  IonList,
  IonItem,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

interface Page1Props extends RouteComponentProps {}

const Page1: React.FC<Page1Props> = ({ history }) => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const clearPage1Todos = () => {
    setTodos([]);
  };

  const navigateToDetails = () => {
    history.push('/app/page1/details', { todos });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Welcome!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Here you can add your to-do's on a virtual list.
        Let's get organized!
        <IonInput
          value={todo}
          onIonInput={(e) => setTodo((e.target as unknown as HTMLInputElement).value)}
          placeholder="Add a to-do item"
        />
        <IonButton onClick={addTodo} expand="full">
          Add a To-Do
        </IonButton>
        <IonButton onClick={clearPage1Todos} expand="full">
          Clear all
        </IonButton>
        <IonButton onClick={navigateToDetails} expand="full">
          View Your List
        </IonButton>
        <IonList>
          {todos.map((item, index) => (
            <IonItem key={index}>{item}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Page1;
