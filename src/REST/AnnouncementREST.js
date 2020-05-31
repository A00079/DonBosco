// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = 'http://localhost:5000/'
const getUserData = {

  postAnnouncementdetails(urls,data) {
    const url = urls;
    return this.requestPostCall(baseUrl + url,data);
  },
  getAnnouncementsList(urls) {
    const url = urls;
    return this.requestGetCall(baseUrl + url);
  },
  requestPostCall(url,data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        return err;
      });
  },
  requestGetCall(url,data) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        return err;
      });
  }
};

export default getUserData;


