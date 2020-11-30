(function($) {
	$.fn.extend({
		toObject: function() {
		    // var result = {}
			// $.each(this.serializeArray(), function(i, v) { 
			// 	result[v.name] = v.value;
			// });
			// return result;
			return this.serializeArray().reduce((obj, v) => ({
				...obj,
				[v.name]: v.value,
			}), {});
		},
		fromObject: function(obj) {
			$.each(this.find(':input'), function(i,v) {
				var name = $(v).attr('name');
				if (obj[name]) {
				     $(v).val(obj[name]);
				 } else {
					$(v).val('');
				 }
			});
		}
	});
})(jQuery);