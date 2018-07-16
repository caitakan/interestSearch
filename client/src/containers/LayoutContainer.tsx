import { fetchUser } from "../actions/LayoutActions";
import { Auth } from "../models/RootState";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout, LayoutProps } from "../components/Chrome/Layout/Layout";

export function mapDispatchToProps(dispapatch: (action: any) => void): any{
    return {
        actions: bindActionCreators({ fetchUser }, dispapatch)
    }
}

// function mapStateToProps(StoreState: Auth): LayoutProps{
//     const mappedProps: LayoutProps = {
//         auth: StoreState
//     }
//     return mappedProps;
// }

export default connect(null, mapDispatchToProps)(Layout);