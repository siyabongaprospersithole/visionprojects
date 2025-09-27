# Google Maps Integration Setup

This project includes Google Maps integration for displaying the office location. The map will work with or without an API key, providing fallback options.

## Getting a Google Maps API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create or Select a Project**
   - Create a new project or select an existing one

3. **Enable Required APIs**
   - Go to "APIs & Services" > "Library"
   - Search for and enable:
     - **Maps JavaScript API** (required)
     - **Places API** (optional, for enhanced features)

4. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

5. **Secure Your API Key (Recommended)**
   - Click on your API key to edit it
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain(s):
     - `localhost:*` (for development)
     - `your-domain.com/*` (for production)
     - `*.netlify.app/*` (if using Netlify)

## Local Development Setup

1. **Create Environment File**
   ```bash
   cp .env.example .env
   ```

2. **Add Your API Key**
   ```env
   VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. **Restart Development Server**
   ```bash
   npm run dev
   ```

## Netlify Deployment Setup

### Method 1: Netlify Dashboard (Recommended)

1. **Go to Your Site Settings**
   - Log into Netlify
   - Go to your site dashboard
   - Click "Site settings"

2. **Add Environment Variable**
   - Go to "Environment variables"
   - Click "Add a variable"
   - Key: `VITE_GOOGLE_MAPS_API_KEY`
   - Value: Your Google Maps API key
   - Click "Create variable"

3. **Redeploy Your Site**
   - Go to "Deploys" tab
   - Click "Trigger deploy" > "Deploy site"

### Method 2: Netlify CLI

```bash
# Install Netlify CLI if you haven't
npm install -g netlify-cli

# Login to Netlify
netlify login

# Set environment variable
netlify env:set VITE_GOOGLE_MAPS_API_KEY "your_api_key_here"

# Deploy
netlify deploy --prod
```

### Method 3: netlify.toml File (Not Recommended for API Keys)

Create a `netlify.toml` file in your project root:

```toml
[build.environment]
  VITE_GOOGLE_MAPS_API_KEY = "your_api_key_here"
```

**⚠️ Warning**: Don't commit API keys to your repository. Use Netlify's environment variables instead.

## Fallback Behavior

If no API key is provided or the Google Maps API fails to load, the component will show:

- A styled fallback interface with the address
- Links to open the location in Google Maps and Apple Maps
- Clear instructions for users to get directions

## Troubleshooting

### Map Not Loading
1. Check if your API key is correctly set
2. Verify the Maps JavaScript API is enabled
3. Check browser console for error messages
4. Ensure your domain is added to API key restrictions

### API Key Errors
- **Invalid API key**: Double-check the key in your environment variables
- **Quota exceeded**: Check your Google Cloud Console for usage limits
- **Referer denied**: Add your domain to the API key restrictions

### Development Issues
- Make sure to restart your dev server after adding the API key
- Check that the environment variable name starts with `VITE_`
- Verify the `.env` file is in your project root

## Cost Considerations

- Google Maps JavaScript API has a free tier with generous limits
- Monitor usage in Google Cloud Console
- Set up billing alerts to avoid unexpected charges
- Consider implementing usage limits if needed

## Security Best Practices

1. **Restrict Your API Key**
   - Always add domain restrictions
   - Only enable required APIs
   - Regularly rotate API keys

2. **Monitor Usage**
   - Set up billing alerts
   - Review usage reports regularly
   - Implement rate limiting if needed

3. **Environment Variables**
   - Never commit API keys to version control
   - Use different keys for development and production
   - Regularly audit access to your keys

## Address Information

**Current Address**: 15 White Road, Ladysmith 3370, South Africa
**Coordinates**: Approximately -28.5665, 29.7804

To update the address, modify the `coordinates` and `address` props in the `GoogleMap` component.