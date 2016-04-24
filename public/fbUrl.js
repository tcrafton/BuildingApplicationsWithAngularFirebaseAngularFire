angular.module('app').constant('FirebaseUrl', 'http//twc-expense-tracker.firebaseio.com')
    .service('rootRef', ['FirebaseUrl', Firebase]);