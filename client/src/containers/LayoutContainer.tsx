import { fetchUser } from "../actions/LayoutActions";
import { StoreState } from "../types/index";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout } from "../components/Chrome/Layout";

export function mapDispatchToProps(dispapatch: (action: any) => void): any{
    return {
        actions: bindActionCreators({ fetchUser }, dispapatch)
    }
}

export default connect<{}>(null, mapDispatchToProps)(Layout);