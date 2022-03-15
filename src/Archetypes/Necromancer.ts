import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static createdArchInstances = 0;
  necromancerEnergyType:EnergyType = 'mana';

  constructor(necromancerName: string) {
    super(necromancerName);

    Necromancer.createdArchInstances += 1;
  }

  static createdArchetypeInstances():number {
    return this.createdArchInstances;
  }

  get energyType(): EnergyType {
    return this.necromancerEnergyType;
  }
}