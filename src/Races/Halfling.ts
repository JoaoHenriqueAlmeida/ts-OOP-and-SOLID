import Race from './Race';

export default class Halfling extends Race {
  private maxLifePts:number;
  static createdInstances = 0;

  constructor(halflingName:string, halflingDexterity: number) {
    super(halflingName, halflingDexterity);
    
    this.maxLifePts = 60;
    Halfling.createdInstances += 1;
  }

  static createdRacesInstances():number {
    return this.createdInstances;
  }

  get maxLifePoints(): number {
    return this.maxLifePts;
  }
}