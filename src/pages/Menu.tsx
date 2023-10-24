import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSplitPane,
    IonMenu,
    IonRouterOutlet,
    IonItem,
    IonMenuToggle,
    IonIcon,
    IonButton,
} from '@ionic/react'
import { homeOutline, newspaperOutline, logOutOutline } from 'ionicons/icons'
import { Redirect, Route } from 'react-router'
import Page1 from './Page1'
import Page2 from './Page2'
import Details from './Details'

const Menu: React.FC = () => {

const paths = [
    { name: 'To-do Central', url: '/app/page1', icon: homeOutline },
    { name: 'Read On', url: '/app/page2', icon: newspaperOutline },
]

    return (
        <IonPage>
        <IonSplitPane contentId="main">
            <IonMenu contentId="main">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    {paths.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="none">
                                <IonIcon icon={item.icon} slot="start"></IonIcon>
                                {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}
                    <IonButton routerLink='/' routerDirection='back' expand="full">
                    <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                    Logout
                    </IonButton>
                </IonContent>
            </IonMenu>

            <IonRouterOutlet id="main">
                <Route exact path="/app/page1" component={Page1} />
                <Route exact path="/app/page1/details" component={Details} />
                <Route exact path="/app/page2" component={Page2} />
                
                <Route exact path="/app">
                <Redirect to="/app/page1" />
                </Route>
            </IonRouterOutlet>
        </IonSplitPane>
        </IonPage>
    )
}

export default Menu;