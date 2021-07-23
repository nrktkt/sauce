import hljs from 'https://cdn.skypack.dev/highlight.js@11.1.0';

class Sauce extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		let repo = this.getAttribute('repo');
		let file = this.getAttribute('file');
		let branch = this.hasAttribute('branch') ? this.getAttribute('branch') : 'master';
		let lines = this.hasAttribute('lines') ? this.getAttribute('lines').split(':') : [1, Number.MAX_VALUE];
		let startLine = Math.max(lines[0] -1, 0);
		let endLine = lines[1];
		let lang = this.getAttribute('lang');

		let pre = document.createElement('pre');
		pre.style.marginLeft = '1em';
		let code = document.createElement('code');
		pre.appendChild(code);
		if (lang) {
			code.classList.add('lang-'+lang);
		}
			
		let theme = this.hasAttribute('theme') ? this.getAttribute('theme') : 'base16/tomorrow';
		let style = document.createElement('link');
		style.setAttribute('rel', 'stylesheet');
		style.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/' + theme + '.min.css');

		let srcDiv = document.createElement('div');
		let srcLink = document.createElement('a');
		srcDiv.appendChild(srcLink);
		srcLink.setAttribute('href', 'https://github.com/' + repo + '/blob/' + branch + '/' + file + '#L' + (startLine +1) + '-L' + endLine);
		srcLink.innerText = file;
		srcDiv.style.marginBottom = '1em';
		this.shadowRoot.append(style, pre, srcDiv);

		fetch('https://raw.githubusercontent.com/' + repo + '/' + branch + '/' + file)
			.then(response => response.text())
			.then(src => src.split('\n').slice(startLine, endLine).join('\n'))
			.then(src => code.innerText = src)
			.then(_ => hljs.highlightBlock(code));
	}
}

customElements.define('sauce-code', Sauce);
