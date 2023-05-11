chrome.webRequest.onBeforeRequest.addListener(function (details) {
    console.log(details.url);
    if (details.url.startsWith('https://wen.geniussis.com/PublicWelcome.aspx?service=')) {
        // console.log("public welcome");
        return { redirectUrl: 'https://wen.geniussis.com/PublicWelcome.aspx?' };
    }
    // this is not needed, leads to conflict with other parts of the website. 
    // else if (details.url.startsWith('https://api.agilixbuzz.com/SSOLogin')) {
    //     console.log("sso");
    //     return { redirectUrl: 'https://wen.geniussis.com/PublicWelcome.aspx?' }
    // }
}, {
    urls: ['https://wen.geniussis.com/PublicWelcome.aspx?service=*'], // or <all_urls>
    types: ['main_frame', 'sub_frame'],
}, [
    'blocking'
]);