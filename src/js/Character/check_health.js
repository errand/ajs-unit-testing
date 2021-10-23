export default function checkHealth(obj) {
  let result = obj.health >= 50 ? 'healthy' : 'wounded';
  if (obj.health < 15) {
    result = 'critical';
  }
  return result;
}
