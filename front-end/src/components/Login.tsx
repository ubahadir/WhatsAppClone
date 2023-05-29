import React from "react";
import RightImg from "./RightImg";
import FormLogin from "./FormLogin";
// import {Accounts} from "meteor/accounts-base";

const messageText: string = "Sohbet başlatmak için bağlanın";

const Login = (props: any): JSX.Element => {
  const handleLogin = (state: any): void => {
    const { password, username } = state;
    //   Meteor.call("user.login", state, (err, res) => {
    //     if (err) {
    //       console.log("error login", err);
    //     } else {
    //       console.log("result", res);
    //       Meteor.loginWithPassword(username, password, (err) => {
    //         if (err) {
    //           console.log("err", err);
    //         } else {
    //           console.log("res", res);
    //           props.hitory.push("/chats");
    //         }
    //       });
    //     }
    //   });
  };
  return (
    <RightImg messageText={messageText}>
      <FormLogin />
      {/* <FormLogin onLogin={handleLogin} /> */}
    </RightImg>
  );
};

export default Login;
