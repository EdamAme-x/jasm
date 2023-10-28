import watch from 'node-watch';
import { exec } from 'child_process';

let isScheduled = false;

watch('./src', { recursive: true }, function (evt, name) {
  if (!isScheduled) {
    console.log('[⚡ ] Live Reload');
    isScheduled = true;

    setTimeout(() => {
      exec('npm run build', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error building: ${error.message}`);
        } else {
          console.log(`Build success: ${stdout}`);

          exec('npm run start', (error, stdout, stderr) => {
            if (error) {
              console.error(`Error starting: ${error.message}`);
            } else {
              console.log(`Start success: ${stdout}`);
            }
            isScheduled = false;
          });
        }
      });
    }, 1000);
  }
});
