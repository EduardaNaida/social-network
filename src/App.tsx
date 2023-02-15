import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {AppStateType} from "./redux/reduxStore";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloder";
import {WithSuspense} from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const SuspendedDialogs = WithSuspense(DialogsContainer);
const SuspendedProfile = WithSuspense(ProfileContainer);


type MapDispatchPropsType = {
  initializeApp: () => void
}

type MapStatePropsType = {
  initialized: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    initialized: state.app.initialized
  }
}

export type AppPagePropsType = AppStateType & MapDispatchPropsType & MapStatePropsType

class App extends React.Component<AppPagePropsType> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Route path={'/dialogs'} render={()=> <SuspendedDialogs/>}/>
            <Route path={'/profile/:userId?'} render={() => <SuspendedProfile/>}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <Route path={'/login'}
                   render={() => <Login/>}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
)(App)

