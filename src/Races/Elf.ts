import Race from './Race';

export default class Elf extends Race {
  private maxLifePts:number;
  static createdInstances = 0;

  constructor(elfName:string, elfDexterity: number) {
    super(elfName, elfDexterity);
    
    this.maxLifePts = 99;
    Elf.createdInstances += 1;
  }

  static createdRacesInstances():number {
    return this.createdInstances;
  }

  get maxLifePoints(): number {
    return this.maxLifePts;
  }
}