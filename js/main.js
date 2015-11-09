import angular from 'angular';

import MyLikeButton from './controllers/likebtn';

angular.module("likeapp", [])

.controller('MyLikeButton', MyLikeButton);
