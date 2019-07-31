export default (ngModule) => {
  ngModule.service('userProfile', () => {

    const userProfile = {
      "access": true,
      "components": ["1000", "2000"]
      // "components": ["1000"]
    };

    return userProfile;
  })
}
