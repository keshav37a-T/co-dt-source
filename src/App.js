import { useRef, useEffect } from "react";
import cogoToast from "cogo-toast";
import "./App.css";

var newWindow;

function App() {
  useEffect(() => {
    const data = {
      ClientId: "clientId-123",
      ClientSecret: "clientSecret-123",
      "User-profile-id": "User-profile-id-123",
    };

    window.addEventListener(
      "message",
      (event) => {
        if (event.data === "target loaded") {
          newWindow.postMessage(data, "https://co-dt-target.herokuapp.com");
          cogoToast.success("Data sent from source");
        }
      },
      false
    );

    return () => {
      window.removeEventListener("message");
    };
  }, []);

  const clickToSendData = (e) => {
    /* iframeRef.current.contentWindow.postMessage(
      data,
      "https://co-dt-target.herokuapp.com"
      // "*"
    ); */
    newWindow = window.open("https://co-dt-target.herokuapp.com", "_blank");

    /* setTimeout(() => {
      console.log("sending data to popup window after 3 seconds");
      newWindow.postMessage(data, "https://co-dt-target.herokuapp.com");
    }, 3000);

    newWindow.onload = function (e) {
      console.log(e.origin);
      newWindow.postMessage(data, "https://co-dt-target.herokuapp.com");
      newWindow.opener.postMessage(data, "https://co-dt-target.herokuapp.com");
    }; */
    /* newWindow.parent.postMessage(data);
    newWindow.addEventListener("message", (message) => {
      console.log("Message for newWindow only");
      console.log(message);
    }); */
  };

  const iframeRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ cursor: "pointer" }} onClick={clickToSendData}>
          Testing Cross Origin Data Transfer - Source
        </p>
        {/* <iframe
          src="https://co-dt-target.herokuapp.com/"
          title="testing"
          ref={iframeRef}
          style={{ border: "none" }}
          width="600"
          height="400"
        ></iframe> */}
        {/* <object
          data="https://co-dt-target.herokuapp.com/"
          width="600"
          height="400"
        >
          <embed
            src="https://co-dt-target.herokuapp.com/"
            width="600"
            height="400"
          ></embed>
          Error: Embedded data could not be displayed.
        </object> */}
        {/* <embed
          src="https://co-dt-target.herokuapp.com/"
          width="600"
          height="400"
        ></embed> */}
        {/* <embed src="https://www.google.com/" width="600" height="400"></embed> */}
      </header>
    </div>
  );
}

export default App;
