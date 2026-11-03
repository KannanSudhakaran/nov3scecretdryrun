const fs = require('fs');

// Load .env into process.env (built into Node 20.12+)
process.loadEnvFile('.env');

// Get the key names defined in .env
const keys = fs.readFileSync('.env', 'utf8')
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(line => line && !line.startsWith('#'))
  .map(line => line.split('=')[0].trim());

console.log('=== Environment variables loaded from .env ===\n');
keys.forEach(key => console.log(`${key.padEnd(25)} = ${process.env[key]}`));