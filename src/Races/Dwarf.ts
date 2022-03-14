import Race from './Race';

export default class Dwarf extends Race {
  private maxLifePts:number;
  static createdInstances = 0;

  constructor(dwarfName:string, dwarfDexterity: number) {
    super(dwarfName, dwarfDexterity);
    
    this.maxLifePts = 80;
    Dwarf.createdInstances += 1;
  }

  static createdRacesInstances():number {
    return this.createdInstances;
  }

  get maxLifePoints(): number {
    return this.maxLifePts;
  }
}