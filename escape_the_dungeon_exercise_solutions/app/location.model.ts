
export class LocationModel {
  name:string = "Nondescript Corridor"
  description:string = "It is very dark. To the north you can just make out a faint glimmer of golden light."
  exits:any = {
    north:true
  }
  removeItem(item:any) {
    this.items.splice(this.items.indexOf(item), 1)
  }
  items:Array<any> = [
    {
      name: "Rusty Sword",
      type: "weapon",
      damage: 1,
      description: "A Rusty old Sword, knocked and well used"
    },
    {
      name: "Cheese",
      type: "food",
      health: 0.5,
      description: "A Piece of Mouldy Cheese"
    }
  ]
}
