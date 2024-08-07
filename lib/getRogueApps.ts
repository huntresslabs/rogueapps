import fs from 'fs';
import path from 'path';

export function getRogueApps() {
  const filePath = path.join(process.cwd(), 'public', 'rogueapps.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const rogueApps = JSON.parse(jsonData);
  return rogueApps;
}
