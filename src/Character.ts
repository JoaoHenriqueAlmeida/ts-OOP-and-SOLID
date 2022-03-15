import Archetype from './Archetypes/Archetype';
import Mage from './Archetypes/Mage';

import Energy from './Energy';
import Fighter from './Fighter';
import Race from './Races/Race';
import Elf from './Races/Elf';
import getRandomInt from './utils';

// Usei uma solução dessa thread para conseguir definir atributos privados enquanto implementava uma interface
// https://stackoverflow.com/questions/37791947/how-to-define-a-private-property-when-implementing-an-interface-in-typescript

export default class Character implements Fighter {
  readonly race:Race;
  readonly archetype:Archetype;
  private maxLifePoints:number;
  private _lifePoints:number;
  private _strength:number;
  private _defense:number;
  private _dexterity:number;
  private _energy: Energy;

  constructor(name:string) {
    this.race = new Elf(name, getRandomInt(1, 10));
    this.archetype = new Mage(name);

    this.maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this.race.dexterity;
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage:number = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    // Verifica se o limite de hp da Raça não é ultrapassado
    const raceMaxHP = this.race.maxLifePoints;
    const levelledMaxLifePoints = this.maxLifePoints + getRandomInt(1, 10);
    if (levelledMaxLifePoints > raceMaxHP) {
      this.maxLifePoints = raceMaxHP;
    } else {
      this.maxLifePoints = levelledMaxLifePoints;
    }
    
    // Restitui hp atual,a tribuindo o novo hp máximo
    this._lifePoints = this.maxLifePoints;

    // Aumenta atributos com número aleatório
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  special(enemy: Fighter): void {
    const specialDamage = this.dexterity * getRandomInt(1, 10);
    enemy.receiveDamage(specialDamage);
  }
}