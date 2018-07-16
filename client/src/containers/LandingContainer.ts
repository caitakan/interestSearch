import { fetchUser } from "../actions/LayoutActions";
import { StoreState, Auth } from "../models/RootState";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { LandingProps, Landing } from "../components/Landing/Landing";

function mapStateToProps(StoreState: Auth): LandingProps{
    const mappedProps: LandingProps = {
        auth: StoreState
    }
    return mappedProps;
}

export default connect(mapStateToProps)(Landing);