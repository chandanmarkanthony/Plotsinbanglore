import { formField } from "./PropertyPages/DataJson";

const GTM_ID = formField?.GtmId; 

const initializeGTM = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GTM_ID);
  };
  
  const trackEvent = (eventName) => {
    window.dataLayer.push({
      event: eventName,
    });
  };
  

export { initializeGTM, trackEvent };
