(function ($) {
	$.fn.highlightMenu = function (options) {
		var defaults = $.extend(
			{
				bgColor: '#32CD32',
				color: '#FF6347',
				hoverBgColor: '#cccccc',
				hoverColor: '#000000',
				linkWidth: '125px',
				radius:'2px',
				
			},
			options
		);
		return this.each(function () {
			var items = $('li a');
			var o = defaults;
			items
				.css('font-family', 'arial, helvetica, sans-serif')
				.css('font-weight', 'bold')
				.css('text-decoration', 'none')
				.css('background-color', o.bgColor)
				.css('color', o.color)
				.css('width', o.linkWidth)
				.css('border-radius',o.radius);
				
			items.mouseover(function () {
				$(this)
					.css('background-color', o.hoverBgColor)
					.css('color', o.hoverColor);
			});
			items.mouseout(function () {
				$(this).css('background-color', o.bgColor).css('color', o.color);
			});
		});
	};
})(jQuery);
