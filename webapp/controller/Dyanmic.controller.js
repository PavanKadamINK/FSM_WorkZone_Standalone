sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("winslow.workzone.sap.com.workzoneapplication.controller.Dyanmic", {
        onInit() {
            this._setSelectedApplication("PermitToWork");
        },

        _setSelectedApplication: function (sAppID) {
            var oMainModel = this.getOwnerComponent().getModel("WorkZoneModel");
            var aApps = oMainModel.getProperty("/Applications");

            // Find matching application
            var oSelectedApp = aApps.find(function (oApp) {
                return oApp.AppID === sAppID;
            });

            if (oSelectedApp) {
                // Set filtered app model to view
                var oAppModel = new sap.ui.model.json.JSONModel(oSelectedApp);
                this.getView().setModel(oAppModel, "SelectedApp");
            }
        },

        onNavClick: function (oEvent) {
            const sSectionKey = oEvent.getSource().getText();
            const oScroll = this.byId("leftScroll");

            let oTarget = null;
            switch (sSectionKey) {
                case "WORKFLOW":
                    oTarget = this.byId("workflowSection");
                    break;
                case "WORKFLOW DIAGRAM":
                    oTarget = this.byId("workflowDiagramSection");
                    break;
                case "LEGAL REQUIREMENTS":
                    oTarget = this.byId("legalRequirementsSection");
                    break;
                case "KEY POINTS":
                    oTarget = this.byId("keyPointsSection");
                    break;
            }
            if (oTarget) {
                setTimeout(() => {
                    oScroll.scrollToElement(oTarget.getDomRef(), 1000);
                }, 200);
            }
        },

        onAfterRendering: function () {
            const oLeft = this.byId("leftScroll");
            const oRight = this.byId("rightScroll");

            // Function to sync scroll proportionally
            function syncScroll(source, target) {
                const sourceRef = source.getDomRef();
                const targetRef = target.getDomRef();

                if (!sourceRef || !targetRef) return;

                const sourceScrollTop = sourceRef.scrollTop;
                const sourceMaxScroll = sourceRef.scrollHeight - sourceRef.clientHeight;
                const targetMaxScroll = targetRef.scrollHeight - targetRef.clientHeight;

                if (sourceMaxScroll > 0) {
                    const scrollRatio = sourceScrollTop / sourceMaxScroll;
                    targetRef.scrollTop = scrollRatio * targetMaxScroll;
                }
            }

            // Attach scroll listeners
            oLeft.attachBrowserEvent("scroll", function () {
                syncScroll(oLeft, oRight);
            });

            oRight.attachBrowserEvent("scroll", function () {
                syncScroll(oRight, oLeft);
            });
        }



    });
});