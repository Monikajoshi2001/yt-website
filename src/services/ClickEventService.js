// subscriptionService.js

const redirectToYouTube = (props) => {
    // Logic to redirect the user to YouTube based on the DOM element clicked
    switch (props.redirectTo) {
        case "YoutubeChannel" : {
            window.location.href = 'https://www.youtube.com/@abcofcommerce7598';
            break;
        }
        case "AccountsPlaylist" : {
            window.location.href = 'https://www.youtube.com/playlist?list=PLGVuk9_JFN-EF5-OtGMACEXsJVYRIwd7V';
            break;
        }
        case "FinancePlaylist" : {
            window.location.href = 'https://www.youtube.com/playlist?list=PLGVuk9_JFN-FX0L3uq2wT2PblA6EbX9gX';
            break;
        }
        case "EconomicsPlaylist" : {
            window.location.href = 'https://www.youtube.com/playlist?list=PLGVuk9_JFN-GcZkBRNLKpmZH9DLRWgJjS';
            break;
        }
        case "ManagementPlaylist" : {
            window.location.href = 'https://www.youtube.com/playlist?list=PLGVuk9_JFN-FwxJzNWGUtcZOLkNRxSKUL';
            break;
        }
        default:
            window.location.href = 'https://www.youtube.com/@abcofcommerce7598';
            break;

    }
  };
  
  export default redirectToYouTube;