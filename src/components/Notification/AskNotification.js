import React from "react";
import { messaging } from "../../init-fcm.js";
import { compose, lifecycle, withHandlers, withState } from "recompose";
import SubscribeUserToken from "../../REST/Subscribe.js";

const renderNotification = (notification, i) => <li key={i}>{notification}</li>;

const App = ({ token, notifications }) => (
  <React.Fragment>
  </React.Fragment>
);

export default compose(
  withState("token", "setToken", ""),
  withState("notifications", "setNotifications", []),
  withHandlers({
    pushNotification: ({
      setNotifications,
      notifications
    }) => newNotification =>
        setNotifications(notifications.concat(newNotification))
  }),
  lifecycle({
    async componentDidMount() {
      const { pushNotification, setToken } = this.props;

      messaging
        .requestPermission()
        .then(async function () {
          const token = await messaging.getToken();
          const data = {
            token
          }
          let api_url = "api/users/subscribe";
          SubscribeUserToken
            .subscribeUser(api_url, data)
            .then(response => {
              console.log("Response Data...", response);
            });
          setToken(token);
        })
        .catch(function (err) {
          console.log("Unable to get permission to notify.", err);
        });
    }
  })
)(App);