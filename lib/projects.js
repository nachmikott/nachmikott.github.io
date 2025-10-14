import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import {
  faGithub,
  faLinkedin,
  faAppStore,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import { faEarth, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  github: faGithub,
  linkedin: faLinkedin,
  website: faEarth,
  site: faEarth,
  appstore: faAppStore,
  'app store': faAppStore,
  googleplay: faGooglePlay,
  'google play': faGooglePlay,
  external: faArrowUpRightFromSquare,
};

function normalizeIcon(label = '') {
  const key = label.toLowerCase().trim();
  return iconMap[key] || faArrowUpRightFromSquare;
}

export function loadProjects() {
  const filePath = path.join(process.cwd(), 'projects.yaml');

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const parsed = YAML.parse(fileContents);
    const items = Array.isArray(parsed?.projects) ? parsed.projects : [];

    return items.map((project) => ({
      ...project,
      icons: Array.isArray(project.icons)
        ? project.icons.map((icon) => ({
            icon: normalizeIcon(icon.label || icon.name || icon.type || ''),
            link: icon.url || icon.link || '#',
            label: icon.label || icon.name || icon.type || '',
          }))
        : [],
    }));
  } catch (error) {
    console.error('Failed to load projects.yaml', error);
    return [];
  }
}
