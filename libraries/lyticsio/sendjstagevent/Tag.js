//:include tagsdk-current.js
var version = "";
var classPath = "lyticsio.sendjstagevent.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Send JSTag event",
		async: true,
		description: "Requires the Initiate JSTag script to be on the page first.\nIt sends an event to JSTag in the form of valid JSON.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "JSTag Data",
			description: "JSON stringified valid JSON data to send to Lytics i.e. \"{\\\"event-happened\\\":true}\"",
			token: "event_json",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			if (window.jstag && jstag.send && window.JSON) {
				try {
					var data = this.valueForToken("event_json");
					jstag.send(data);
				} catch (e) {}
			}
		})();
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});