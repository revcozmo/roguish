/**
 * @name Widget
 * @class
 */

/**
 * Widget is a 'abstract class used to construct Dom based ui element classes and control their position on screen'
 * @param {Object} options object with x, y, container and el
 */
var Widget = function(options) {
	this.x = options.x || null;
	this.y = options.y || null;
	this.cssClass = null;
	this.cssId = null;
	this.container = $('body');
	this.el = {}; // going to reset slightly later in the code

	/**
	 * Returns a string with position information in css form
	 * @return {string} 
	 */
	this.getPositionCSS = function() {
		if (!this.x && !this.y) {
			return "";
		} else {
			return "style='position:absolute; top:" + this.y + "px; left: " + this.x + "px;'";
		}
	};

	// ugly hack to have to move this declaration here, since we want to use the getPositionCSS method:
	this.el = $("<div class='forms forms-default' " + this.getPositionCSS() + "></div>");

	/**
	 * Hides element
	 * @return {Widget}
	 */
	this.hide = function() {
		this.el.hide();
		return this
	};

	/**
	 * Shows element
	 */
	this.show = function() {
		this.el.show();
	};

	/**
	 * Removes element
	 */
	this.destroy = function() {
		this.el.remove();
	}
}