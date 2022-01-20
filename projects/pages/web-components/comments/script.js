// Create a new UserComment element
class UserComment extends HTMLElement {
  constructor() {
    super();

    // Create an open shadow DOM that this component can use
    this.attachShadow({ mode: "open" });
  }

  // What to do when the component gets connected
  connectedCallback() {
    // Find the required template
    const template = document.getElementById("user-comment-template");

    // Copy the template content
    const node = document.importNode(template.content, true);

    // Apply it to the shadow DOM
    this.shadowRoot.appendChild(node);
  }
}

// Tell the browser that the `user-comment` element should use this component class
customElements.define("user-comment", UserComment);
