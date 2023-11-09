import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import PlanYourTrip from "../PlanYourType/PlanYourType";
import TourType from "../TourTrip/TourTrip";

const Home = () => {
    return (
        <div>
            <Banner /> 
            <TourType />
            <PlanYourTrip />
            <Destination />
            hello this is home section
        </div>
    );
};

export default Home;