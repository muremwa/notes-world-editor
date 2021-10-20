import { LitElement, html } from 'lit-element';
import { customElement } from 'lit/decorators';



@customElement('markdown-editor')
class MarkdownEditor extends LitElement {
    render () { 
        return html`
            <div id="editor-grp">
                
            </div>
        `
    }
};