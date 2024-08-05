import type { NextApiRequest, NextApiResponse } from 'next';
import { RogueApp } from '../../lib/types';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'rogueapps.json');

export default function handler(req: NextApiRequest, res: NextApiResponse<RogueApp[] | { error: string }>) {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const rogueApps: RogueApp[] = JSON.parse(jsonData);
    res.status(200).json(rogueApps);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load data' });
  }
}
