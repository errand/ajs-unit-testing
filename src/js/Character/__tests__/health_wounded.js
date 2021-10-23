import checkHealth from '../check_health';

test('Should show WOUNDED health', ()=> {
  const character = {name: 'Маг', health: 49};
  const expected = 'wounded';
  const received = checkHealth(character);

  expect(received).toBe(expected);
});
