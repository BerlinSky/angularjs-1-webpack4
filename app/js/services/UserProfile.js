import 'angular/angular.js';

export default angular.module('userProfileService', [])
  .service('userProfile', function () {
    const model = this,

      userProfile = {
        "access": true,
        "components": ["1000", "2000"]
        // "components": ["1000"]
      };

    model.getUserProfile = function () {
      return userProfile;
    }
  })

