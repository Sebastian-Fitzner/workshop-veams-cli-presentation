// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	width: 1280,
	height: 700,
	controls: true,
	progress: true,
	history: true,
	center: true,
	fragments: true,
	overview: true,

	// Transition style
	transition: 'zoom', // default/cube/page/concave/zoom/linear/fade/none

	// Transition speed
	transitionSpeed: 'fast', // default/fast/slow

	// Transition style for full page slide backgrounds
	backgroundTransition: 'zoom', // default/none/slide/concave/convex/zoom

	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

	// Parallax scrolling
	// parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
	// parallaxBackgroundSize: '2100px 900px',

	// Optional libraries used to extend on reveal.js
	dependencies: [{
		src: 'js/vendor/libs/classList.js',
		condition: function() {
			return !document.body.classList;
		}
	}, {
		src: 'js/vendor/plugins/markdown/marked.js',
		condition: function() {
			return !!document.querySelector('[data-markdown]');
		}
	}, {
		src: 'js/vendor/plugins/markdown/markdown.js',
		condition: function() {
			return !!document.querySelector('[data-markdown]');
		}
	}, {
		src: 'js/vendor/plugins/highlight/highlight.pack.js',
		async: true,
		callback: function() {
			hljs.initHighlightingOnLoad();
		}
	}, {
		src: 'js/vendor/plugins/zoom-js/zoom.js',
		async: true,
		condition: function() {
			return !!document.body.classList;
		}
	}, {
		src: 'js/vendor/plugins/notes/notes.js',
		async: true,
		condition: function() {
			return !!document.body.classList;
		}
	}]
});

(function() {
	var el = document.getElementById('toggle');

	el.addEventListener("click", function(e) {
		var wrapper = document.getElementById('site-nav');

		e.preventDefault();

		if (wrapper.classList) {
			wrapper.classList.toggle('js-show-nav');
		} else {
			var classes = wrapper.className.split(' ');
			var existingIndex = classes.indexOf('js-show-nav');

			if (existingIndex >= 0)
				classes.splice(existingIndex, 1);
			else
				classes.push(className);

			wrapper.className = classes.join(' ');
		}

	}, false);
})();
