import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    IonImg,
} from '@ionic/react';

const Page2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/app/page1" />
                    </IonButtons>
                    <IonTitle>Read On</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonImg src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlzdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" /> {/* Replace with the URL of your image */}
                <div className="ion-text-wrap">
                    <p>How to stay on top of things in 15 steps</p>
                    <ol>
                        <li>Plan your day</li>
                        <li>Do the most difficult tasks first</li>
                        <li>Set time blocks for your tasks</li>
                        <li>Don’t multitask</li>
                        <li>Know when to say no</li>
                        <li>Don’t overwhelm yourself and take breaks!</li>
                        <li>Keep your workspace clean</li>
                        <li>Keep most of your work in just one place</li>
                        <li>Set goals and celebrate your accomplishments</li>
                        <li>Get enough sleep</li>
                        <li>Avoid all distractions</li>
                        <li>Minimize meetings</li>
                        <li>Don’t check your e-mail consistently</li>
                        <li>Take care of yourself</li>
                        <li>Track your time!</li>
                    </ol>
                    <p><a href="https://timeular.com/blog/how-stay-on-top-things/" target="_blank">Read more about these amazing tips here</a></p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page2;
