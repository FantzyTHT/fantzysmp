document.addEventListener("DOMContentLoaded", function() {
  const localUrl = "http://192.168.1.100:8000";  // Local IP (internal)
  const publicUrl = "http://play.fantzysmp.xyz:8000";  // Public URL

  // Add the event listener to the button
  document.getElementById("mapButton").addEventListener("click", function() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);  // Set a timeout to prevent hanging

    // Try to connect to the local URL
    fetch(localUrl, { mode: 'no-cors', signal: controller.signal })
      .then(() => {
        clearTimeout(timeout);  // If it works, redirect to local IP
        window.location.href = localUrl;
      })
      .catch(() => {
        window.location.href = publicUrl;  // If it fails, fallback to the public URL
      });
  });
});
