import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('world'); // Estado inicial para el saludo

  const updateGreeting = () => {
    if (userName) {
      setGreeting(userName); // Actualiza el saludo con el valor introducido
    } else {
      setGreeting('world'); // Si no hay valor, vuelve a "world"
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello App!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Saludo inicial */}
        <div className="greeting-container">
          <span style={{ color: 'cornflowerblue' }}>Hello </span>
          <span style={{ color: 'white' }}>{greeting}!</span>
        </div>

        {/* Campo de texto para ingresar el nombre */}
        <IonItem className='spacing'>
          <IonLabel position="floating">Introduce tu nombre</IonLabel>
          <IonInput
            value={userName}
            onIonChange={(e) => setUserName(e.detail.value!)}
            placeholder="Your name"
          />
        </IonItem>

        {/* Botón para actualizar el saludo */}
        <IonButton expand="full" onClick={updateGreeting}>
          Actualizar Saludo
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
