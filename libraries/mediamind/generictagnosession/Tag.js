//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mediamind.generictagnosession.Tag", {
	config: {
		/*DATA*/
		name: "Generic Tag (no session)",
		async: true,
		description: "",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "MediaMind ID",
			description: "The ID that relates this pixel to MediaMind",
			token: "id",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function () {
  var r = (Math.random() * 1000000) + "";
  var s = document.createElement("script");
  s.src = "//bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=" + this.valueForToken("id") + "&rnd=" + r;
  document.body.appendChild(s);
}());
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
