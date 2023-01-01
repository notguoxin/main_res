function rd(url) {
    const blockedDomain = ['google.com'];
    const parsedUrl = new URL(url);
    if (blockedDomain.includes(parsedUrl.host)) {
      return false
    }else{}
    try {
      const response = fetch(url);
      return response;
    } catch (error) {
      console.log(`Error making request to ${url}: ${error.message}`);
    }
  }
  
  const rd = blockRequest('https://google.com');