/*

Plugin Name: InView

Plugin Author: Anamul [http://anamul.net/]

Plugin URL: https://github.com/anamulhaquemohan/inview

License: MIT License

*/

;(function ($) {
    "use strict";

    $.fn.inView = function (ops) {
        ops = $.extend({
            selector: false,
            offset: 0
        }, ops);

        ops.$el = $(this);

        ops.selector = ops.selector ? ops.$el.children( ops.selector ) : ops.$el.children();

        if ( ops.selector.length ) {
            ops.selector.waypoint({
                handler: function (dir) {
                    var $t = $(this.element);

                    ops.selector.removeClass('in--view');

                    if ( dir === 'up' ) {
                        $t.prev().addClass('in--view');
                    } else if ( dir === 'down' ) {
                        $t.addClass('in--view');
                    }
                },
                offset: ops.offset
            });
        }

        return ops.$el;
    };
}(jQuery));
