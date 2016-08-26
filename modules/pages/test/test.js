/**
 * Created by 平常大哥 on 2016/8/24.
 */
require('common/alerts/alerts');
require('common/widget/widget');

module.exports = {
    url: '/test',
    template: __inline('./test.html'),
    controller : ["$scope","$injector",function($scope, $injector) {

        var tmp = (new Date().valueOf());
        console.log(tmp);
        $scope.a = (tmp);

        $scope.data = [

            {name:'B', age:4},

            {name:'A', age:1},

            {name:'D', age:3},

            {name:'C', age:3},

        ];
       //深拷贝
        var a1 = [{'x': '123'},{'x': '123456'}];
        var b1 = angular.copy(a1);//深拷贝
        a1[1].x ='456';
        console.log(b1[1]);

        //对象聚合
        var a2 = {'x': '123'};
        var b2 = {'xx': '456'};
        angular.extend(b2, a2);
        console.log(a2);
        console.log(b2);

        //测试
        var a3 = {name:"hello"};
        var b3 = a3;
        a3.name = "change";
        console.log(b3);




    }]
};