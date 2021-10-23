import checkHealth from '../check_health';

test('Should show HEALTHY health', ()=> {
  const character = {name: 'Маг', health: 90};
  const expected = 'healthy';
  const received = checkHealth(character);

  expect(received).toBe(expected);
});
