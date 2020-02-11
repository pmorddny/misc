(function(window, document, videojs) {

    // map and indexOf polyfills for obsolete browsers
    Array.prototype.map||(Array.prototype.map=function(r,t){var n,e,o;if(null==this)throw new TypeError(" this is null or not defined");var i=Object(this),a=i.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(n=t),e=new Array(a),o=0;a>o;){var f,p;o in i&&(f=i[o],p=r.call(n,f,o,i),e[o]=p),o++}return e});
    Array.prototype.indexOf||(Array.prototype.indexOf=function(r,t){var n;if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),i=e.length>>>0;if(0===i)return-1;var a=+t||0;if(1/0===Math.abs(a)&&(a=0),a>=i)return-1;for(n=Math.max(a>=0?a:i-Math.abs(a),0);i>n;){if(n in e&&e[n]===r)return n;n++}return-1});
  
    var gacustom = function(settings) {
        var getDomain;
        
        debugger;
        window.ga('gaTracker.set', 'dimension1', getDomain( HelpCenter.user.email ) );        
        
        getDomain = function(email) {
           if ( email === null ) { return ''; }

            const split = email.split('@');

            if (split.length > 1 ) {
                const domain = split[1];
                return domain;
                }

            return '';
        }
    }
  
    videojs.registerPlugin('ga-custom', gacustom );
  })(window, document, videojs);
