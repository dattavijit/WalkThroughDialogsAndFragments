sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"WalkThroughDialogsAndFragments/WalkThroughDialogsAndFragments/model/models"
], function (UIComponent, Device, JSONModel, ResourceModel, models) {
	"use strict";

	return UIComponent.extend("WalkThroughDialogsAndFragments.WalkThroughDialogsAndFragments.Component", {

		metadata: {
			manifest: "json",
			rootView: "WalkThroughDialogsAndFragments.WalkThroughDialogsAndFragments.view.App"
			
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);


			//set data model
			var oData = {
				recipient : {
					name : "world"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel); 
			
			//set Resource Model
			var i18nModel = new sap.ui.model.resource.ResourceModel({
					bundleName: "WalkThroughDialogsAndFragments.WalkThroughDialogsAndFragments.i18n.i18n" // string
				});
			this.setModel(i18nModel, "i18n");
				
			
			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});