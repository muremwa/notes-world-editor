import { LitElement, html } from 'lit-element';
import { customElement } from 'lit/decorators';




@customElement('editor-switch')
export default class ContextSwitch extends LitElement {
    render () {
        return html`
        <div class="row">
            <ul id="nav-tabs-sec" class="nav nav-tabs col-md-10">
                <!-- The ids of the anchor tags should never start with the same letter ever! -->
                <li class="nav-item">
                <span class="nav-link tab-nav active" data-section-to="editor" data-section-from="" id="editor-open">Editor</span>
                </li>

                <li class="nav-item">
                    <span class="nav-link tab-nav" data-section-to="preview" data-section-from="" id="preview-open">Preview</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link tab-nav" data-section-to="help" data-section-from="" id="help-open">Help</span>
                </li>
            </ul>
            <span class="fullscreen-home col-md-2">
                <img title="Enter fullscreen" id="fullscreen-toogle" src="SVG/fullscreen.svg" data-enter-icon="SVG/fullscreen.svg" data-exit-icon="SVG/fullscreen_exit.svg" data-state="0">
            </span>
        </div>
        `
    };
};



