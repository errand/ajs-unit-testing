import checkHealth from '../check_health';

test.each([
  [{ name: 'strong', health: 55 }, 'healthy'],
  [{ name: 'silver', health: 40 }, 'wounded'],
  [{ name: 'weak', health: 8 }, 'critical'],
])(
  ('should check health'),
  (obj, expected) => {
    const result = checkHealth(obj);
    expect(result).toBe(expected);
  },
);
