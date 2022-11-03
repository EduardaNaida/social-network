import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, StoreType} from './redux/store'

export type AppStateType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
    //state: RootStateType
    // addPostCallback: (postMessage: string) => void
    // updateNewPostText: (newTextValue: string) => void
}

function App(props: AppStateType) {
    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                               dialogsData={state.dialogsPage.dialogsData}
                               messageData={state.dialogsPage.messageData}
                           newMessage={state.dialogsPage.newMessage}
                           dispatch={props.dispatch}
                           />}/>
                    <Route path={'/profile'} render={() => <Profile
                        postData={state.profilePage.postData}
                        /*addPostCallback={props.store.addPost.bind(props.store)}*/
                        newTextValue={state.profilePage.newTextValue}
                        dispatch={props.dispatch}
                        /*updateNewPostText={props.store.updateNewPostText.bind(props.store)}*/
                    />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
