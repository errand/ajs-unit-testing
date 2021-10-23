import checkHealth from '../check_health';

test('Should show CRITICAL health', ()=> {
  const character = {name: 'Маг', health: 14};
  const expected = 'critical';
  const received = checkHealth(character);

  expect(received).toBe(expected);
});
