import { useEffect } from 'react';

/**
 * Component that loads the widget.js script dynamically from the chatbot widget project
 * This enables the chat widget on any page where it's inclu *
 *
 * In development: Loads as ES module (type="module") from Vite dev server
 * In production: Loads as regular script from built widget.js
 */
const WidgetScript = () => {
  useEffect(() => {
    // Get widget URL from environment variable
    const widgetBaseUrl =
      import.meta.env.VITE_WIDGET_URL ||
      'http://chatbot-hotel-arti.netlify.app';
    const widgetScriptUrl = `${widgetBaseUrl}/widget.js`;

    // Determine if we're in development mode by checking if URL contains localhost
    const isDevelopment = widgetBaseUrl.includes('localhost');

    // Check if script already exists
    const existingScript = document.getElementById('ai-chat-widget-script');
    if (existingScript) {
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.id = 'ai-chat-widget-script';
    script.src = widgetScriptUrl;
    script.async = true;

    // In development, the widget.js is served as an ES module by Vite
    // In production, it's a built UMD/IIFE bundle - DO NOT use type="module"
    if (isDevelopment) {
      script.type = 'module';
      console.log('Loading widget as ES module (development mode)');
    } else {
      console.log('Loading widget as regular script (production mode)');
    }

    // Add error handling
    script.onerror = () => {
      console.error(
        `Failed to load widget script from ${widgetScriptUrl}. Make sure the chatbot widget is running.`
      );
    };

    // Add success handling
    script.onload = () => {
      console.log('Widget script loaded successfully from', widgetScriptUrl);
    };

    // Add script to document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById('ai-chat-widget-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      // Also remove the widget button and container if they exist
      const button = document.getElementById('ai-chat-widget-button');
      const container = document.getElementById('ai-chat-widget-container');
      if (button) button.remove();
      if (container) container.remove();
    };
  }, []);

  return null;
};

export default WidgetScript;
