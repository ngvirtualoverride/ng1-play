define(["require", "exports"], function (require, exports) {
    var DemoCtrl = (function () {
        function DemoCtrl() {
            this.message = "Hallo World!";
        }
        return DemoCtrl;
    })();
    exports.DemoCtrl = DemoCtrl;
});
