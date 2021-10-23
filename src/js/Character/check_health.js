export  default function checkHealth(obj) {
  let result = '';
  if(obj.health > 51) {
    result = 'healthy';
  } else if(obj.health < 50 && obj.health > 16){
    result = 'wounded';
  } else {
    result = 'critical';
  }

  return result;
}
