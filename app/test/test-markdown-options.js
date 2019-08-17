Reveal.addEventListener( 'ready', function() {

	QUnit.module( 'Markdown' );

	QUnit.test( 'Options are set', function( assert ) {
		assert.strictEqual( marked.defaults.smartypants, true );
	});

	QUnit.test( 'Smart quotes are activated', function( assert ) {
		var text = document.querySelector( '.reveal .slides>section>p' ).textContent;

		assert.strictEqual( /['"]/.test( text ), false );
		assert.strictEqual( /[“”‘’]/.test( text ), true );
	});

} );

Reveal.initialize({
	dependencies: [
		{ src: '../plugin/markdown/marked.js' },
		// Test loading JS files with query strings
		{ src: '../plugin/markdown/markdown.js?query=string' },
		// Add the node-js plugin for server-side notes
		{ src: 'socket.io/socket.io.js', async: true },
		{ src: 'plugin/notes-server/client.js', async: true }
	],
	markdown: {
		smartypants: true
	}
});
