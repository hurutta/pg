async function loadContentWithHeaders() {
    try {
      const response = await fetch("https://casual-master-dingo.ngrok-free.app", {
        method: 'GET',
        headers: new Headers({
            "ngrok-skip-browser-warning": "true",
          }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
  
      const blob = await response.text();
  
      document.getElementById('content').innerHTML = blob;
  
    } catch (error) {
      console.error('Failed to load content:', error);
    }
  }
  
  loadContentWithHeaders();
  