import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static createdArchInstances = 0;
  warriorEnergyType:EnergyType = 'stamina';

  constructor(warriorName: string) {
    super(warriorName);

    Warrior.createdArchInstances += 1;
  }

  static createdArchetypeInstances():number {
    return this.createdArchInstances;
  }

  get energyType(): EnergyType {
    return this.warriorEnergyType;
  }
}