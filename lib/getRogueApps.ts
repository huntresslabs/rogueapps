import fs from 'fs';
import path from 'path';
import { RogueApp } from './types';

export async function getRogueApps(): Promise<RogueApp[]> {
  const filePath = path.join(process.cwd(), 'public', 'rogueapps.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const rogueApps: RogueApp[] = JSON.parse(jsonData);
  return rogueApps;
}