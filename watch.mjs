import watch from 'node-watch';
import { execSync } from 'child_process';

watch('./', { recursive: true }, function (evt, name) {
  execSync('npm run build & npm run start');
  console.log('[⚡] Live Reload');
});
