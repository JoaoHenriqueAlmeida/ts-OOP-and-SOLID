import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static createdArchInstances = 0;
  mageEnergyType:EnergyType = 'mana';

  constructor(mageName: string) {
    super(mageName);

    Mage.createdArchInstances += 1;
  }

  static createdArchetypeInstances():number {
    return this.createdArchInstances;
  }

  get energyType(): EnergyType {
    return this.mageEnergyType;
  }
}