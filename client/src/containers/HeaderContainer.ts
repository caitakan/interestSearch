import { fetchUser } from "../actions/LayoutActions";
import { StoreState, Auth } from "../models/RootState";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Header, HeaderProps } from "../components/Chrome/Header/header";

function mapStateToProps(StoreState: Auth): HeaderProps{
    const mappedProps: HeaderProps = {
        auth: StoreState
    }
    return mappedProps;
}

export default connect(mapStateToProps)(Header);