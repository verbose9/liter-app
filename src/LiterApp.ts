import { LitElement, html, property } from 'lit-element';

export class LiterApp extends LitElement {
  @property({ type: String }) title = 'My app';

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        <p>Edit <code>src/LiterApp.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
