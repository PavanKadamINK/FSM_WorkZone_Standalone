sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("winslow.workzone.sap.com.workzoneapplication.controller.View1", {
        onInit() {
            var oData = [
                {
                    Ref: "VIC",
                    Items: [
                        { Text: "Occupational Health and Safety Act 2004" ,Url:"https://content.legislation.vic.gov.au/sites/default/files/2024-03/04-107aa044-authorised.pdf",Traget:"_self"},
                        { Text: "Occupational Health and Safety Regulations 2017",Url:"https://content.legislation.vic.gov.au/sites/default/files/9b708566-9b49-380f-a258-4ab48af1c5bd_17-22sra005%20authorised.pdf" ,Traget:"_self"},
                        { Text: "How WorkSafe applies the Law in relation to Identifying and Understanding Hazards and Risks 2007" ,Url:"https://content-v2.api.worksafe.vic.gov.au/sites/default/files/2018-06/ISBN-Identifying-and-understanding-hazards-and-risks-how-WorkSafe-applies-the-law-2007-11.pdf",Traget:"_self"},
                        { Text: "How WorkSafe applies the Law in relation to Reasonably Practicable 2007" ,Url:"https://content-v2.api.worksafe.vic.gov.au/sites/default/files/2018-06/ISBN-Reasonably-practicable-how-WorkSafe-applies-the-law-2007-11.pdf",Traget:"_self"}
                    ]
                },
                {
                    Ref: "QLD",
                    Items: [
                        { Text: "Work Health and Safety Act 2011" ,Url:"https://www.legislation.qld.gov.au/view/pdf/inforce/current/act-2011-018",Traget:"_self"},
                        { Text: "Work Health and Safety Act Amendment 2023",Url:"https://www.legislation.qld.gov.au/view/html/bill.first/bill-2023-016" ,Traget:"_self"},
                        { Text: "Work Health and Safety Regulation 2011" ,Url:"https://www.legislation.qld.gov.au/view/html/inforce/current/sl-2011-0240",Traget:"_blank"}
                    ]
                },
                {
                    Ref: "NSW",
                    Items: [
                        { Text: "Work Health and Safety Act 2011",Url:"https://legislation.nsw.gov.au/view/html/inforce/current/act-2011-010" ,Traget:"_self"},
                        { Text: "Work Health and Safety Act Amendment 2023" ,Url:"https://legislation.nsw.gov.au/view/pdf/asmade/act-2023-34",Traget:"_self"},
                        { Text: "Occupational Health and Safety Regulation 2001",Url:"https://legislation.nsw.gov.au/view/whole/html/2006-02-03/sl-2001-0648",Traget:"_self" },
                        { Text: "How to Manage work health and safety risks" ,Url:"https://www.safework.nsw.gov.au/__data/assets/pdf_file/0012/50070/How-to-manage-work-health-and-safety-risks-COP.pdf",Traget:"_self"},
                        { Text: "Work health and safety consultation, cooperation and coordination",Url:"https://www.safework.nsw.gov.au/__data/assets/pdf_file/0013/50071/Code-of-practice_WHS-consultation-cooperation-and-coordination_February-2022.pdf" ,Traget:"_self"}
                    ]
                },
                {
                    Ref: "SA",
                    Items: [
                        { Text: "Work Health and Safety Act – 2012" ,Url:"https://www.legislation.sa.gov.au/__legislation/lz/c/a/work%20health%20and%20safety%20act%202012/current/2012.40.auth.pdf",Traget:"_self"},
                        { Text: "Work Health and Safety Act (Psychosocial Risks) Amendment – 2023",Url:"https://www.legislation.sa.gov.au/__legislation/lz/v/r/2023/work%20health%20and%20safety%20(psychosocial%20risks)%20amendment%20regulations%202023_92/2023.92.un.pdf" ,Traget:"_self"},
                        { Text: "Work Health and Safety (Industrial Manslaughter) Amendment Act – 2023" ,Url:"https://www.legislation.sa.gov.au/__legislation/lz/v/a/2023/work%20health%20and%20safety%20(industrial%20manslaughter)%20amendment%20act%202023_43/2023.43.un.pdf",Traget:"_self"},
                        { Text: "Planning, Development and Infrastructure Act – 2016" ,Url:"https://www.legislation.sa.gov.au/__legislation/lz/c/a/planning%20development%20and%20infrastructure%20act%202016/current/2016.14.auth.pdf",Traget:"_self"},
                        { Text: "How to manage work health and safety risks",Url:"https://www.safework.sa.gov.au/__data/assets/pdf_file/0007/136267/How-to-manage-work-health-and-safety-risks.pdf",Traget:"_self" },
                        { Text: "Managing the risk of plant in the workplace",Url:"https://www.safework.sa.gov.au/__data/assets/pdf_file/0006/136275/Managing-risks-of-plant-in-the-workplace.pdf" ,Traget:"_self"},
                        { Text: "Managing the work environment and facilities" ,Url:"https://www.safework.sa.gov.au/__data/assets/pdf_file/0007/136276/Managing-the-work-environment-and-facilities.pdf",Traget:"_self"},
                        { Text: "Work health and safety consultation, cooperation, and coordination.",Url:"https://www.safework.sa.gov.au/__data/assets/pdf_file/0020/136280/Consultation-cooperation-coordination.pdf" ,Traget:"_self"},
                        { Text: "Heavy Vehicle National Law (South Australia) Act – 2013",Url:"https://www.legislation.sa.gov.au/__legislation/lz/c/a/heavy%20vehicle%20national%20law%20(south%20australia)%20act%202013/current/2013.36.auth.pdf",Traget:"_self" }
                    ]
                }
            ]
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "WorkZoneModel");

            var oData = {
                Forms: [
                    { FormCode: "WINBMS-OP-11-A", Description: "Permit – Working at Heights", Selected: false },
                    { FormCode: "WINBMS-OP-11-B", Description: "Permit – Hot Works", Selected: false },
                    { FormCode: "WINBMS-OP-04-C", Description: "Winslow Permit to Work", Selected: false },
                    { FormCode: "WINBMS-OP-09-A", Description: "Permit to Work – Crane", Selected: false },
                    { FormCode: "WINBMS-EP-13-A", Description: "Permit to Work – Clearing", Selected: false },
                    { FormCode: "WINBMS-OP-13-A", Description: "Permit to Work – Demolition", Selected: true }
                ]
            };

            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "FormsModel");

            var oData = {
                Procedures: [
                    { Title: "Permit to Work" },
                    { Title: "Confined Spaces" },
                    { Title: "Excavation and Trenching" },
                    { Title: "Crane Safety Operations" }
                ]
            };
            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "ProceduresModel");
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

            // Attach scroll events
            oLeft.attachBrowserEvent("scroll", function (oEvent) {
                const scrollTop = oEvent.target.scrollTop;
                const rightScrollContainer = oRight.getDomRef();
                if (rightScrollContainer && rightScrollContainer.scrollTop !== scrollTop) {
                    rightScrollContainer.scrollTop = scrollTop;
                }
            });

            oRight.attachBrowserEvent("scroll", function (oEvent) {
                const scrollTop = oEvent.target.scrollTop;
                const leftScrollContainer = oLeft.getDomRef();
                if (leftScrollContainer && leftScrollContainer.scrollTop !== scrollTop) {
                    leftScrollContainer.scrollTop = scrollTop;
                }
            });
        }


    });
});