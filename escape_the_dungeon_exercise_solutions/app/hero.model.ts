export class HeroModel {
  name:String = "LLars Bunderchump"
  x:number = 0
  y:number = 0
  moveNorth() {
    this.x++;
  }
  moveSouth() {
    this.x--;
  }
  moveEast() {
    this.y--
  }
  moveWest() {
    this.y++
  }
}
