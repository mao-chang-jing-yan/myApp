import {Component, Fragment} from "react";
import {Button, View} from "@tarojs/components";
import {actionCreators} from "../../store/userStore";
import {actionCreators as loginActionCreators} from "../../store/loginStore";
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {AtButton, AtForm, AtInput} from "taro-ui";
import "./login.scss"
// import "taro-ui/dist/style/components/input.scss";
// import "taro-ui/dist/style/components/icon.scss";
// import "taro-ui/dist/style/components/form.scss";

class Login extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.login();
    }

    render() {
        return (
            <View className="page">
                <AtForm
                    className="login-form"
                >
                    <AtInput
                        name='value'
                        title='用户名'
                        type='text'
                        placeholder='单行文本'
                        value={this.props.user_name}
                        onChange={(value, event) => {
                            this.props.changeUserName(value)
                        }}
                    />

                    <AtInput
                        name='value1'
                        title='密码'
                        type='password'
                        placeholder='密码不能少于10位数'
                        value={this.props.password}
                        onChange={(value, event) => {
                            this.props.changePassword(value)
                        }}
                    />

                    {/*<AtInput*/}
                    {/*    name='value5'*/}
                    {/*    title='小数'*/}
                    {/*    type='digit'*/}
                    {/*    placeholder='请输入小数'*/}
                    {/*    value={this.props.password}*/}
                    {/*    onChange={this.props.handleChange.bind(this)}*/}
                    {/*/>*/}
                    {/*<AtInput*/}
                    {/*    name='value6'*/}
                    {/*    border={false}*/}
                    {/*    title='手机号码'*/}
                    {/*    type='phone'*/}
                    {/*    placeholder='手机号码'*/}
                    {/*    value={this.props.password}*/}
                    {/*    onChange={this.props.handleChange.bind(this)}*/}
                    {/*/>*/}
                    <AtButton customStyle={{marginTop: "30px"}}
                              onClick={() => this.props.login(this.props.user_name, this.props.password)}>登陆</AtButton>
                    <AtButton onClick={() => this.props.reset()}>重置</AtButton>
                </AtForm>
                {/*<Button onClick={() => this.props.login()}>*/}
                {/*    登陆*/}
                {/*</Button>*/}
            </View>
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

        login_type: login.get("login_type"),// 登陆方式
        user_name: login.get("user_name"),
        password: login.get("password"),
        phone: login.get("phone"),
        code: login.get("code"),
        // currentPageUrl:state.currentPageUrl7
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        // sw(id) {
        //     Taro.navigateTo({
        //         url: "/pages/detail/detail?id=" + id
        //     }).then()
        // },
        reset() {
            dispatch(loginActionCreators.changeUserName(""))
            dispatch(loginActionCreators.changePassword(""))
        },
        login(user_name, password) {
            dispatch(actionCreators.handleLogin(user_name, password))
        },
        changeUserName(str) {
            dispatch(loginActionCreators.changeUserName(str))
        },
        changePassword(str) {
            dispatch(loginActionCreators.changePassword(str))
        },
        handleChange(key, value) {

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(Login);
