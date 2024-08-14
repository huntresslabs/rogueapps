import { RogueApp } from './types';

export async function fetchRogueApps(): Promise<RogueApp[]> {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
    // Load from local file in development
    const res = await fetch('/rogueapps.json');
    return res.json();
  } else {
    // Fetch from remote URL in production
    const res = await fetch('https://raw.githubusercontent.com/huntresslabs/rogueapps/main/public/rogueapps.json');
    return res.json();
  }
}