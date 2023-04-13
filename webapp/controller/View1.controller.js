sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/DateFormat"
    // "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel,DateFormat) {
        "use strict";

        var Data =
        {
            "userdata": [{

                "username": "Disha",
                "Date":"March 25 2001",
                "Text":"Hello"

            }]
        }

        return Controller.extend("assignment2.controller.View1", {
            onInit: function () {
                var oModel = new JSONModel();
                oModel.setData(Data);
                this.getView().setModel(oModel);
                // console.log(this.getView().getModel().getData());

            },

            onPost: function (oEvent) {
                var oFormat = DateFormat.getDateTimeInstance({ style: "medium" });
                var oDate = new Date();
                var sDate = oFormat.format(oDate);
                // create new entry

                var sValue = oEvent.getParameter("value");
                
                var oEntry = {
                    username: "Disha",
                    Date: "" + sDate,
                    Text:sValue
                };

                // update model
                var oModel = this.getView().getModel();
                var aEntries = oModel.getData().userdata;
                aEntries.push(oEntry);
                oModel.setData({
                    userdata: aEntries
                });
               
            }
        });
    });