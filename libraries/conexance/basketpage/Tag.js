//:include tagsdk-current.js
var version = "";
var classPath = "conexance.basketpage.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Basket Page",
		async: true,
		description: "Picks up on basket page abandonment",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Conexance.gif",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Web1b1 Function Script URL",
			description: "Full URL of your Web 1b1 script e.g. w1x1.js",
			token: "w1x1_function_url",
			uv: ""
		}, {
			name: "Web1by1 Config Script URL",
			description: "Full URL of your Web1by1 config script",
			token: "w1x1_config_url",
			uv: ""
		}, {
			name: "Basket SKU List",
			description: "Array containg sku codes of items in the user's basket",
			token: "skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Basket Quantities List",
			description: "Array containg quantities of items in the user's basket",
			token: "quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Basket Totals List - No VAT",
			description: "Array containing total values of each item in the users basket - without VAT",
			token: "totals_novat",
			uv: "universal_variable.basket.line_items[#].subtotal"
		}, {
			name: "Basket Totals List - With VAT",
			description: "Array containing total values of each item in the users basket - with VAT",
			token: "totals_vat",
			uv: "universal_variable.basket.line_items[#].subtotal"
		}, {
			name: "Basket Prices List",
			description: "Array containing single-unit values of each item in the users basket",
			token: "prices",
			uv: "universal_variable.basket.line_items[#].product.unit_price"
		}, {
			name: "Basket Voucher",
			description: "Voucher code applied to basket",
			token: "voucher",
			uv: "universal_variable.basket.voucher"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {

			var safeLoad = function(url, variable, cb) {

				var isLoading = function() {
					window._sfloadSrcs = window._sfloadSrcs || [];
					for (var i = 0; i < window._sfloadSrcs; i++) {
						if (i.toLowerCase() == url.toLowerCase()) {
							return true;
						}
					}
					return false;
				};

				var waitForVariable = function() {
					if (window[variable]) {
						cb();
					} else {
						setTimeout(waitForVariable, 200);
					}
				};

				var loadScript = function() {
					var script = document.createElement("script");
					script.type = "text/javascript";
					script.src = url;
					document.getElementsByTagName("head")[0].appendChild(script);
					window._sfloadSrcs.push(url);
					waitForVariable();
				};

				if (window[variable]) {
					cb();
				} else if (isLoading()) {
					waitForVariable();
				} else {
					loadScript();
				}

			};

			var run = function() {
				for (var i = 0, ii = this.valueForToken("skus").length; i < ii; i++) {
					window.w1x1.scAdd(this.valueForToken("skus")[i], this.valueForToken("quantities")[i], this.valueForToken("totals_novat")[i], this.valueForToken("totals_vat")[i], this.valueForToken("prices")[i], this.valueForToken("voucher"));
				}
				window.w1x1.scSend();
			};

			safeLoad("" + this.valueForToken("w1x1_function_url") + "", "_w1x1", function() {
				safeLoad("" + this.valueForToken("w1x1_config_url") + "", "w1x1", function() {
					run();
				});
			});

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