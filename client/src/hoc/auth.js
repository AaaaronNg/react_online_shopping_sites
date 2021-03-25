import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../actions/user_actions";
import CircularProgress from "./CircularProgress";

export default function (ComposedClass, reload, adminRoute = null) {
  class AuthenticationCheck extends Component {
    state = {
      loading: false,
    };

    componentDidMount() {
      this.props.dispatch(auth()).then((response) => {
        let user = this.props.user.userData;
        console.log(user);
        if (!user.isAuth) {
          if (reload) {
            this.props.history.push("/login");
          }
        } else {
          if (adminRoute && !user.isAdmin) {
            this.props.history.push("/user/dashboard");
          } else {
            if (reload === false) {
              this.props.history.push("/user/dashboard");
            }
          }
        }
        this.setState({ loading: false });
      });
    }

    render() {
      if (this.state.loading) {
        return (
          <>
            <CircularProgress />
          </>
        );
      }
      return (
        <div>
          <ComposedClass {...this.props} user={this.props.user} />
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }

  return connect(mapStateToProps)(AuthenticationCheck);
}