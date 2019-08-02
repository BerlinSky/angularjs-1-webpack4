/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import 'angular/angular.js';

export default (ngModule) => {
  ngModule.controller('HomeController', ($scope, userProfile) => {
    $scope.siteName = 'New Home for Components';

    const formInput = `
      <div class="infoForm">
        <h3>Info Form</h3>
      </div>
    `;

    const additionalInfo = `
      <div class="additionalInfo">
        <h3>Additional Info</h3>
      </div>
    `;

    const homeCompMap = [
      {
        id: '1000',
        composer: formInput
      },
      {
        id: '2000',
        composer: additionalInfo
      }
    ];

    const renderedComponents = userProfile.components
      .map((compId) => {
        const item = homeCompMap.find((comp) => comp.id === compId);
        return item.composer;
      })
      .reduce((html, item) => html + item, '');

    (function initController() {
      console.log('initialize controller', renderedComponents);
      // const newEle = angular.element("<div class='red'>New Content</div>");
      const newEle = angular.element(renderedComponents);
      const target = document.getElementById('home');
      angular.element(target).append(newEle);
    })();
  });
};
