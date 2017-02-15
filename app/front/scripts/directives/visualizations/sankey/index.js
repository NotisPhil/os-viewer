'use strict';

var ngModule = require('../../../module');
var downloader = require('../../../services/downloader');
var visualizationsService = require('../../../services/visualizations');

require('../controls/breadcrumbs');

ngModule.directive('sankeyVisualization', [
  '$timeout', 'Configuration',
  function($timeout, Configuration) {
    return {
      template: require('./template.html'),
      replace: false,
      restrict: 'E',
      scope: {
        params: '='
      },
      link: function($scope) {
        $scope.downloader = downloader;
        $scope.isVisible = true;
        $scope.state = visualizationsService
          .paramsToBabbageStateSankey($scope.params);

        $scope.formatValue = Configuration.formatValue;

        $scope.$watch('params', function(newValue, oldValue) {
          if (newValue !== oldValue) {
            $scope.state = visualizationsService
              .paramsToBabbageStateSankey($scope.params);
            $scope.isVisible = false;
            $timeout(function() {
              $scope.isVisible = true;
            });
          }
        }, true);

        $scope.$on('babbage-ui.click',
          function($event, component, item) {
            $event.stopPropagation();
            if (item.isLink) {
              $scope.$emit(Configuration.events.visualizations.drillDown,
                item.source.key);
            }
          });

        $scope.$on('babbage-ui.ready', function() {
          Configuration.sealerHook(200); // Wait for rendering
        });
      }
    };
  }
]);
