import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LectureDetailPage from "../pages/LectureDetailPage";
import ProfilePage from "../pages/ProfilePage";
import LectureListPage from "../pages/LectureListPage";
import MentoringPage from "../pages/MentoringPage";
import DashboardPage from "../pages/DashboardPage";

function RootRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignupPage}  />
        <Route path="course/" element={<LectureDetailPage />} />
        <Route path="settings/account" element={<ProfilePage />} />
        <Route path="courses" element={<LectureListPage/>} />
        <Route path="mentors" element={<MentoringPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Switch>
    </Router>
  );
}

export default RootRoute;
