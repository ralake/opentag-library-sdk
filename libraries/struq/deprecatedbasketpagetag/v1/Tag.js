//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("struq.deprecatedbasketpagetag.v1.Tag", {
	config: {
		/*DATA*/
		name: "[Deprecated] Basket Page Tag",
		async: true,
		description: "To be placed on the Basket Page",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Basket Product ID Listing",
			description: "An array of the product IDs in the basket",
			token: "basket_pid_listing",
			uv: "universal_variable.basket.line_items[#].product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window._struqPI = window._struqPI || [];
		var productArr = [];
		for (var i = 0, ii = this.valueForToken("basket_pid_listing").length; i < ii; i++) {
			productArr.push(this.valueForToken("basket_pid_listing")[i]);
		}
		var productStr = productArr.join(",");

		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: 'PixelID',
			route: '/s/s/',
			collectData: false,
			data: [{
				title: "si",
				pid: productStr
			}],
			options: {
				timeoutMs: 2000
			}
		}]);
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});