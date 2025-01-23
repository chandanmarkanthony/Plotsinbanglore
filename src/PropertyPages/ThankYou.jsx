import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet

const ThankYou = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <Helmet>
        <title>Thank You - Your Submission Was Successful</title>
        <meta name="description" content="Thank you for submitting the form. Our representative will reach out to you shortly." />
        <link rel="icon" href="../Assets/Images/favicon.ico" /> 
      </Helmet>

      {/* Google Tag Manager */}
      <script>
        {(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l !== "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-MGVCQKX3")}
      </script>
      {/* End Google Tag Manager */}

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center border border-gray-300">
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 109.76"
            className="w-20 h-20"
          >
            <g>
              <path
                fill="#01A601"
                d="M0,52.88l22.68-0.3c8.76,5.05,16.6,11.59,23.35,19.86C63.49,43.49,83.55,19.77,105.6,0h17.28 
                C92.05,34.25,66.89,70.92,46.77,109.76C36.01,86.69,20.96,67.27,0,52.88L0,52.88z"
              />
            </g>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h1>
        <p className="text-gray-600 text-sm mb-4">
          Thank you for submitting the form. Your representative will connect with you
          shortly.
        </p>
        <button
          onClick={goBack}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none"
        >
          Back
        </button>
      </div>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MGVCQKX3"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </div>
  );
};

export default ThankYou;
