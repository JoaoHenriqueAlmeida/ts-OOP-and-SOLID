import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static createdArchInstances = 0;
  rangerEnergyType:EnergyType = 'stamina';

  constructor(rangerName: string) {
    super(rangerName);

    Ranger.createdArchInstances += 1;
  }

  static createdArchetypeInstances():number {
    return this.createdArchInstances;
  }

  get energyType(): EnergyType {
    return this.rangerEnergyType;
  }
}