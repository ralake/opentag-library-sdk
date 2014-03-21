//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("criteo.onetagproduct.Tag", {
	config: {
		/*DATA*/
		name: "OneTag - Product",
		async: true,
		description: "This must be placed on all the advertiser product pages.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
		locationDetail: "",
		priv: false,
		url: "static.criteo.net/js/ld/ld.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "Criteo Partner ID",
			description: "The ID assigned to you by Criteo",
			token: "partner_id",
			uv: ""
		},
		{
			name: "Customer ID",
			description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		},
		{
			name: "Site Type",
			description: "\"m\" for mobile or \"t\" for tablet or \"d\" for desktop",
			token: "site_type",
			uv: ""
		},
		{
			name: "Product ID",
			description: "The ID of the product currently being viewed",
			token: "product_id",
			uv: "universal_variable.product.id"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
(function() {

  var user_id = "" + this.valueForToken("customer_id") + "";
  //Remove email if present.
  if (user_id.indexOf("@") > -1){
    user_id = "";
  }

  window.criteo_q = window.criteo_q || [];
  window.criteo_q.push(
    { event: "setAccount", account: this.valueForToken("partner_id") },
    { event: "setCustomerId", id: user_id },
    { event: "setSiteType", type: "" + this.valueForToken("site_type") + "" },
    { event: "viewItem", product: "" + this.valueForToken("product_id") + "" }
  );

}());
		/*~POST*/
	}
});
