/*! Formstone v0.0.1 [toggle.js] 2014-12-06 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b.enabled=!1,b.active=!1,b.target=this.data(k+"-target"),b.$target=a(b.target).addClass(l.raw.target),b.group=this.data(k+"-group"),b.$group=a("[data-"+k+'-group="'+b.group+'"]'),b.$toggles=a().add(this).add(b.$target),this.touch({tap:!0}).on(n.tap,b,i),a.mediaquery("bind","(max-width:"+(1/0===b.maxWidth?"100000px":b.maxWidth)+")",{enter:function(){g.call(b.$el,b)},leave:function(){h.call(b.$el,b)}}),this.data(k+"-active")?e.call(b.$el,b):b.collapse&&f.call(b.$el,b)}function d(a){a.$toggles.removeClass([m.enabled,m.active].join(" ")).off(n.namespace)}function e(a){if(a.enabled&&!a.active){var b=a.group?a.$group.index(a.$el):null;a.$toggles.addClass(m.active),this.trigger(n.activate,[b]),a.active=!0}}function f(a){a.enabled&&a.active&&(a.$toggles.removeClass(m.active),this.trigger(n.deactivate),a.active=!1)}function g(a){a.enabled||(a.$toggles.addClass(m.enabled),a.enabled=!0,a.active=!0,f.call(this,a))}function h(a){a.enabled&&(a.$toggles.removeClass([m.enabled,m.active].join(" ")),a.enabled=!1)}function i(a){o.killEvent(a);var b=a.data;b.$group.not(b.$el)[j.namespace]("deactivate"),b.active&&b.collapse?f.call(b.$el,b):e.call(b.$el,b)}var j=b.Plugin("toggle",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{tap:"tap",activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:c,_destruct:d,activate:e,deactivate:f,enable:g,disable:h}}),k=j.namespace,l=j.classes,m=l.raw,n=j.events,o=j.functions}(jQuery,Formstone);