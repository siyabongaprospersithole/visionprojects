#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🗺️  Google Maps Setup for SubsequentVision Projects\n');

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function setupGoogleMaps() {
  console.log('This script will help you set up Google Maps integration.\n');
  
  const hasApiKey = await askQuestion('Do you have a Google Maps API key? (y/n): ');
  
  if (hasApiKey.toLowerCase() === 'n' || hasApiKey.toLowerCase() === 'no') {
    console.log('\n📋 To get a Google Maps API key:');
    console.log('1. Go to https://console.cloud.google.com/');
    console.log('2. Create or select a project');
    console.log('3. Enable the Maps JavaScript API');
    console.log('4. Create credentials (API Key)');
    console.log('5. Restrict the API key to your domain\n');
    console.log('📖 For detailed instructions, see GOOGLE_MAPS_SETUP.md\n');
    
    const continueSetup = await askQuestion('Continue without API key? The map will show fallback links. (y/n): ');
    
    if (continueSetup.toLowerCase() === 'n' || continueSetup.toLowerCase() === 'no') {
      console.log('Setup cancelled. Run this script again when you have your API key.');
      rl.close();
      return;
    }
  } else {
    const apiKey = await askQuestion('Enter your Google Maps API key: ');
    
    if (apiKey.trim()) {
      const envPath = path.join(process.cwd(), '.env');
      let envContent = '';
      
      // Read existing .env file if it exists
      if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, 'utf8');
      }
      
      // Update or add the API key
      const apiKeyLine = `VITE_GOOGLE_MAPS_API_KEY=${apiKey.trim()}`;
      
      if (envContent.includes('VITE_GOOGLE_MAPS_API_KEY=')) {
        // Replace existing key
        envContent = envContent.replace(/VITE_GOOGLE_MAPS_API_KEY=.*/, apiKeyLine);
      } else {
        // Add new key
        envContent += envContent ? `\n${apiKeyLine}` : apiKeyLine;
      }
      
      fs.writeFileSync(envPath, envContent);
      console.log('\n✅ API key saved to .env file');
    }
  }
  
  console.log('\n🚀 Setup complete!');
  console.log('\nNext steps:');
  console.log('1. Restart your development server: npm run dev');
  console.log('2. Visit the Contact page to see the map');
  console.log('3. For production deployment, add the API key to Netlify environment variables');
  console.log('\n📖 See GOOGLE_MAPS_SETUP.md for deployment instructions');
  
  rl.close();
}

setupGoogleMaps().catch(console.error);