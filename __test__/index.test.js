import Character from '../index';

describe('Character class', () => {
  test('should create a Bowman character with valid name and type', () => {
    const character = new Character('Legolas', 'Bowman');
    expect(character.name).toBe('Legolas');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should create a Swordsman character with valid name and type', () => {
    const character = new Character('Aragorn', 'Swordsman');
    expect(character.name).toBe('Aragorn');
    expect(character.type).toBe('Swordsman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });

  test('should create a Magician character with valid name and type', () => {
    const character = new Character('Gandalf', 'Magician');
    expect(character.name).toBe('Gandalf');
    expect(character.type).toBe('Magician');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  test('should create a Undead character with valid name and type', () => {
    const character = new Character('Valera', 'Undead');
    expect(character.name).toBe('Valera');
    expect(character.type).toBe('Undead');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should create a Zombie character with valid name and type', () => {
    const character = new Character('Shaun', 'Zombie');
    expect(character.name).toBe('Shaun');
    expect(character.type).toBe('Zombie');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });

  test('should create a Daemon character with valid name and type', () => {
    const character = new Character('Lucifer', 'Daemon');
    expect(character.name).toBe('Lucifer');
    expect(character.type).toBe('Daemon');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  test('should throw an error for invalid name', () => {
    expect(() => new Character('L', 'Bowman')).toThrow('Invalid name. Name should be a string with length between 2 and 10 characters.');
  });

  test('should throw an error for invalid type', () => {
    expect(() => new Character('Legolas', 'Archer')).toThrow('Invalid type. Type should be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
  });
});
