<script>
customElements.define(
  "sd-container",
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `
        <style></style>
        <head></head>
      `;
    }
  }
);
</script>