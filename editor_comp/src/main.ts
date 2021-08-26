import { LitElement, html, css } from 'lit-element';
import { customElement, property } from 'lit/decorators';


@customElement('markdown-editor')
class MarkdownEditor extends LitElement {
    render () { 
        return html`
            <div id="editor-grp">
                Markdown Editor
            </div>
        `
    }
};