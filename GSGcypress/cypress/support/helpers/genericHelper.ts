class Generic {
  ramdomNumberFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  getRandomString = (world: string) => {
    return `${world}${this.ramdomNumberFromInterval(1, 200)}`;
  };
}
export default Generic;
