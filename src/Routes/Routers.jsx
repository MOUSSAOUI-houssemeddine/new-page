import ProfileLayout from "../Layout/ProfileLayout";
import MainLayout from "../Layout/MainLayout";
import WhiteHeaderLayout from "../Layout/WhiteHeaderLayout";
import Home from "../pages/Home";
 import Services from "../pages/Services";
 import Login from "../pages/Login";
 import Signup from "../pages/Signup";
 import Contact from "../pages/Contacts";
 import Doctors from "../pages/Doctors/Doctors";
import ProfileInfos from "../pages/Doctors/ProfileInfos";
import DoctorDetails from "../pages/Doctors/DoctorsDetails";
 import SchedulesPage from "../pages/Doctors/SchedulesPage";
import { Routes, Route } from "react-router-dom";
import UserInfoPage from "../pages/User/UserInfoPage";
import UserLayout from "../Layout/UserLayout";
import NurseLayout from "../Layout/NurseLayout";
import NurseInfosPage from "../pages/Nurses/NurseInfosPage";
import Homev2 from "../pages/Homev2";
import HomeMOB from "../pages/HomeMOB";
import BarSlide from "../pages/BarSlide"
import ParameterMOB from "../pages/ParameterMOB";
import ChngPassword from "../pages/old/ChngPassword";
import DeleteAccount from "../pages/old/DeleteAccount"
import MyResults from "../pages/MyResults";
import WhoWeAre from "../pages/WhoWeAre"
import ChangePassword from "../pages/ChangePassword";
import DeleteAccountModal from "../pages/DeleteAccountModal"
import LanguageSwitcher from "../pages/LanguageSwitcher"

const Routers = ()=>{
return (
<Routes>
<Route path="/HomeMOB" element={<HomeMOB/>} />

<Route path="/LanguageSwitcher" element={<LanguageSwitcher/>} />
<Route path="/ChangePassword" element={<ChangePassword/>}/>
<Route path="/DeleteAccountModal" element={<DeleteAccountModal/>}/>
    <Route path="/Homev2" element={<Homev2/>} />
    <Route path="/BarSlide" element={<BarSlide/>}/>
    <Route path="/ChngPassword" element={<ChngPassword/>}/>
    <Route path="/ParameterMOB" element={<ParameterMOB/>}/>
    
    <Route path="/DeleteAccount" element={<DeleteAccount/>}/>
    <Route path="/MyResults" element={<MyResults/>}/>
    <Route path="/WhoWeAre" element={<WhoWeAre/>}/>
<Route path="/" element={<MainLayout><Home /></MainLayout>} />
<Route path="/home" element={<MainLayout><Home /></MainLayout>} />
<Route path="/doctors" element={<WhiteHeaderLayout><Doctors /></WhiteHeaderLayout>} />
<Route path="/doctors/:id" element={<MainLayout><DoctorDetails/></MainLayout>} />
<Route path="/login" element={<WhiteHeaderLayout><Login /></WhiteHeaderLayout>}/>
<Route path="/register" element={<WhiteHeaderLayout><Signup/></WhiteHeaderLayout>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/services" element={<Services/>} />
<Route path="/docProfile" element={<ProfileLayout type="PROFILE"><ProfileInfos /></ProfileLayout>} />
<Route path="/schedules" element={<ProfileLayout type="SCHEDULES"><SchedulesPage /></ProfileLayout>} />
<Route path="/userProfile" element={<UserLayout type="PROFILE"><UserInfoPage /></UserLayout>} />
<Route path="/NurseProfile" element={<NurseLayout type="Profile"><NurseInfosPage /></NurseLayout>} />
</Routes>
);
};
export default Routers;