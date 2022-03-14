import Race from './Race';

export default class Orc extends Race {
  private maxLifePts:number;
  static createdInstances = 0;

  constructor(orcName:string, orcDexterity: number) {
    super(orcName, orcDexterity);
    
    this.maxLifePts = 74;
    Orc.createdInstances += 1;
  }

  static createdRacesInstances():number {
    return this.createdInstances;
  }

  get maxLifePoints(): number {
    return this.maxLifePts;
  }
}