export default abstract class Race {
  constructor(readonly name:string, readonly dexterity:number) { }
  
  static createdRacesInstances():void {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
}