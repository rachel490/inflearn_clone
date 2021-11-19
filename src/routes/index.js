import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LectureDetailPage from "../pages/LectureDetailPage";
import ProfilePage from "../pages/ProfilePage";
import LectureListPage from "../pages/LectureListPage";
import MentoringPage from "../pages/MentoringPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";
import ChatPage from "../pages/ChatPage";
import QuestionPage from "../pages/QuestionPage";
import StudyPage from "../pages/StudyPage";

function RootRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignupPage}  />
        <Route path="/course" component={LectureDetailPage} />
        <Route path="/settings/account" component={ProfilePage} />
        <Route path="/courses" component={LectureListPage} />
        <Route path="/mentors" component={MentoringPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path='/' exact component={HomePage} />
        <Route path='/carts' component={CartPage} />
        <Route path='/wishlist' component={WishlistPage} />
        <Route path='/community/chats' component={ChatPage} />
        <Route path='/community/questions' component={QuestionPage} />
        <Route path='/community/studies' component={StudyPage} />
      </Switch>
    </Router>
  );
}

export default RootRoute;
