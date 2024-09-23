class BrowserHistory {
  private history: string[];
  private activeIndex: number;

  constructor(homepage: string) {
    this.history = [homepage];
    this.activeIndex = 0;
  }

  visit(url: string): void {
    this.history = [...this.history.slice(0, this.activeIndex + 1), url];
    this.activeIndex = this.activeIndex + 1;
  }

  back(steps: number): string {
    let x = steps > this.activeIndex ? this.activeIndex : steps;
    this.activeIndex -= x;
    return this.history[this.activeIndex];
  }

  forward(steps: number): string {
    let x = this.activeIndex + steps;
    this.activeIndex = x < this.history.length ? x : this.history.length - 1;
    return this.history[this.activeIndex];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * let obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * let param_2 = obj.back(steps)
 * let param_3 = obj.forward(steps)
 */
