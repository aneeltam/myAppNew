import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    useIonRouter,
    IonButton,
    IonInput,
} from '@ionic/react';
import { useState } from 'react';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useIonRouter();

    const handleLogin = () => {
        if (username.trim() !== '' || password.trim() !== '') {
            navigation.push('/app', 'forward', 'replace');
        } else {
            alert('Please enter either a username or password.');
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonInput
                    placeholder="Username"
                    value={username}
                    onIonChange={(e) => setUsername(e.detail.value!)}
                />
                <IonInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                />
                <IonButton onClick={handleLogin} expand="full">
                    Login
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;
