/**
 * mPopup
 * 
 * Let you create mobile overlays easily
 */
mAnimate = require('../../utils/mAnimate.js');

module.exports = Backbone.Marionette.ItemView.extend({
	events: {
		"click .btnHide": "hide",
		"hide" : "hide"
	},
	className: "popin",
	render: function() {
		var self = this,
			// overlay html 
			$overlay = $("<div class='overayContent' style='position:fixed; top:0; left:0; width:100%; height:100%; background:#000; opacity:0;z-index:9998;'></div>"),
			// overlay content
			content = (this.template) ? this.template({data: this.options}) : this.options.content;
		// put data in view elmen and set css for animation
		this.$el.html(content).css({
			"opacity": 0,
			"scale": 0.5
		});
		// put the overlay in the page
		$("body")
			.append($overlay)
			.append(this.$el);
		// position it
		this.$el.css({top:this.$el.height()/2- 40});
		// animate back overlay
		mAnimate.go({
            to:$overlay,
            speed:0.25,
            attrs : {opacity: 0.5}
        });
        // animate content
		mAnimate.go({
            to:this.$el,
            speed:0.35,
            attrs : {scale: 1, opacity:1},
            onComplete: function() {
                // execute after render function if it exist
				self.afterRender && self.afterRender();
            }
        });
	},
	// hide and remove popup, at this point do not call it back, create another one
	hide: function(e, complete) {
		e && e.preventDefault();
		var self = this;
		mAnimate.go({
            to:$(".overayContent"),
            speed:0.25,
            ease: Power1.easeIn,
            attrs : {opacity: 0},
            onComplete: function() {
				$(".overayContent").remove();
			}
        });
		mAnimate.go({
            to:$(".popin"),
            speed:0.25,
            ease: Power1.easeOut,
            attrs : {scale: 0.5, opacity:0},
            onComplete: function() {
				$(".popin").remove();
				self.$el.remove();
				complete && complete();
			}
        });
	}
});