export class InventoryModel {
  items:Array<any> = []
  addItem(item:any) {
    this.items.push(item);
  }
}
