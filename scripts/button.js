class Button {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text).class("button-screen-initial");
    this.button.mousePressed(() => this._alterScenario());
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center("horizontal");
  }

  _alterScenario() {
    this.button.remove();
    scenarioAtual = "game";
  }
}
