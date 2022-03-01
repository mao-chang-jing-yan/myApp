import {Component, Fragment} from "react";
import {Button} from "@tarojs/components";
import {actionCreators} from "../../store/userStore";
import Taro from "@tarojs/taro";
import {connect} from "react-redux";

class Login extends Component {
    render() {
        return (
            <Fragment>
                <Button onClick={()=>this.props.login()}>
                    登陆
                </Button>
            </Fragment>
        );
    }

}
const mapStateToProps = (state) => {
    const user = state.get("user")
    const login = state.get("login")
    const userInfo = user.get("user_info")
    return {
        // searchStr: home.get("searchStr"),
        isLogin: user.get("is_login"),
        userInfo: userInfo.toJS(),
        // currentPageUrl:state.currentPageUrl7
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        sw(id) {
            Taro.navigateTo({
                url: "/pages/detail/detail?id=" + id
            }).then()
        },
        login(){
            dispatch(actionCreators.handleLogin())
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProp)(Login);
