const acynchronous = async () => {
  const url = 'https://api.github.com/users/yokoyamada';

  // コールバック地獄の例
  const callbackHell = () => {
    // fetch は非同期処理
    fetch(url)
      .then(
        res
          .json()
          .then(json => {
            console.log('callback hell 1: ', json);
            return json;
          })
          .catch(err => console.error(err)),
      )
      .catch(err => console.error(err));
  };
  const profile1 = callbackHell();
  console.log('callback hell 2: ', profile1);
};
