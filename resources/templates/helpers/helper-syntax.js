(function () {
	module.exports.register = function (Handlebars, options) {

		/*
		 * Syntax helper.
		 *
		 * @return encoded html entities
		 */
		Handlebars.registerHelper('syntax', function (context) {
			var content = context.fn(this).replace(/\"/gi, "&quot;").replace(/\"/gi, "&quot;");
			return content;
		});

	};
}).call(this);
