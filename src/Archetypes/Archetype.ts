import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly name:string;
  readonly special: number;
  readonly cost:number;

  constructor(n: string) {
    this.name = n;
    this.special = 0;
    this.cost = 0;
  }

  static createdArchetypeInstances():void {
    throw new Error('Not implemented');
  }

  abstract get energyType():EnergyType;
}