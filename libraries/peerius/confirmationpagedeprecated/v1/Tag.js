//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("peerius.confirmationpagedeprecated.v1.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Page - DEPRECATED",
		async: true,
		description: "Peerius tag for the confirmation page",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Language",
			description: "Language of the page the tag is on",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Transaction Currency",
			description: "The currency of the confirmation page the tag is on",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Peerius Subtotal",
			description: "The total value of the products at the confirmation page stage, minus any shipping",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Peerius Shipping Cost",
			description: "The cost of shipping at the confirmation page stage",
			token: "shipping",
			uv: "universal_variable.transaction.shipping_cost"
		}, {
			name: "Peerius Checkout Total",
			description: "The total of item and shipping cost in confirmation page",
			token: "total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Peerius Client Name",
			description: "The name of the client for which the tag is to be implemented",
			token: "client_id",
			uv: ""
		}, {
			name: "Peerius Product IDs List",
			description: "A list of product IDs on the confirmation page",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Peerius Product Quantities List",
			description: "A list of quantities for items on the confirmation page",
			token: "product_quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Peerius Unit Sale Price List",
			description: "A list of unit sale prices for items on the confirmation page",
			token: "price_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.PeeriusCallbacks = {
			track: {
				type: "checkout",
				lang: "" + this.valueForToken("lang"),
				checkout: {
					items: [],
					currency: "" + this.valueForToken("currency"),
					subtotal: "" + this.valueForToken("subtotal"),
					shipping: "" + this.valueForToken("shipping"),
					total: "" + this.valueForToken("total")
				}
			}
		};
		var ii = this.valueForToken("product_ids").length;
		for (var i = 0; i < ii; i++) {
			PeeriusCallbacks.track.checkout.items.push({
				refCode: this.valueForToken("product_ids")[i],
				qty: this.valueForToken("product_quantities")[i],
				price: this.valueForToken("price_list")[i]
			});
		}
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});