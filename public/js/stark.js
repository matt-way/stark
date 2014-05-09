// Basic javascript logic for stark page

var openEl = document.getElementById('open-button');
var closeEl = document.getElementById('close-button');
var contentEl = document.getElementById('rhs');

// loading process to init the menu correctly
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var minOpen = 500;
var transitionEnd = whichTransitionEvent();

var lastScroll = 0;

toggleMenu(x > minOpen, true);

function toggleMenu(_open, _init) {
	if(_open){
		closeEl.style.display = 'block';
		openEl.style.display = 'none';

		// dont want to show any transition on first load
		if(_init) {
			addClass(contentEl, 'menu-show');
			addClass(contentEl, 'menu-trans');
		}else{
			// store the scroll position
			lastScroll = document.body.scrollTop;

			// add the open class to the menu
			addClass(contentEl, 'menu-trans');
			contentEl.addEventListener(transitionEnd, openEnd, false);
		}
	}else{
		closeEl.style.display = 'none';
		openEl.style.display = 'block';

		// remove the open class
		removeClass(contentEl, 'menu-show');
		// scroll the item to the correct location
		document.body.scrollTop = lastScroll;
		// start the transition
		setTimeout(function(){
			removeClass(contentEl, 'menu-trans');
		}, 20);		
	}
}

var openEnd = function(e) {
	addClass(contentEl, 'menu-show');
	contentEl.removeEventListener(transitionEnd, openEnd, false);
};

openEl.addEventListener('click', function(){
	toggleMenu(true);
});

closeEl.addEventListener('click', function(){
	toggleMenu(false);	
});

// Helper functions
function removeClass(elem, _class) {	
	elem.className = elem.className.replace(_class, '').trim();
}

function addClass(elem, _class) {
	elem.className += ' ' + _class;
}

function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}