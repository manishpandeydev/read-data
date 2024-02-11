import React, { useState } from "react";

import { getAuth } from "firebase/auth";
import "./Home.css";
import { saveAs } from "file-saver";
import mypdf1 from "../assets/Image.jpg";
import {
  getStorage,
  ref as storageReference,
  getDownloadURL,
} from "firebase/storage";
import { storageRef } from "./firebase";
import {
  getDatabase,
  ref as databaseref,
  onValue,
  ref,
} from "firebase/database";

const Home = () => {
  const [selected, setSelected] = useState("Home");

  const db = getDatabase();
  const scienceRef = databaseref(db, "user/science");
  const mathRef = databaseref(db, "user/math");
  const sstRef = databaseref(db, "user/sst");
  const hindiRef = databaseref(db, "user/hindi");
  const englishRef = databaseref(db, "user/english");
  const computerRef = databaseref(db, "user/computer");

  onValue(scienceRef, (snapshot) => {
    const data = snapshot.val();
    const mytitle = document.getElementById("science");
    mytitle.innerHTML = data;
  });

  onValue(mathRef, (snapshot) => {
    const data = snapshot.val();
    const mytitle = document.getElementById("math");
    mytitle.innerHTML = data;
  });

  onValue(sstRef, (snapshot) => {
    const data = snapshot.val();
    const mytitle = document.getElementById("sst");
    mytitle.innerHTML = data;
  });
  onValue(englishRef, (snapshot) => {
    const data = snapshot.val();
    const mytitle = document.getElementById("english");
    mytitle.innerHTML = data;
  });
  onValue(hindiRef, (snapshot) => {
    const data = snapshot.val();
    const mytitle = document.getElementById("hindi");
    mytitle.innerHTML = data;
  });
  onValue(computerRef, (snapshot) => {
    const data = snapshot.val();
    const mytitle = document.getElementById("computer");
    mytitle.innerHTML = data;
  });
  // Create a reference to the file we want to download
  const storage = getStorage();
  const sciencefileRef = storageReference(storage, "files/Science.pdf");
  const mathfileRef = storageReference(storage, "files/Math.pdf");
  const sstfileRef = storageReference(storage, "files/SST.pdf");
  const englishfileRef = storageReference(storage, "files/English.pdf");
  const hindifileRef = storageReference(storage, "files/Hindi.pdf");
  const computerfileRef = storageReference(storage, "files/Computer.pdf");

  // Get the download URL

  const downloadScience = () => {
    getDownloadURL(sciencefileRef)
      .then((url) => {
        const am = document.getElementById("science-file");
        am.setAttribute("href", url);
        // Insert url into an <img> tag to "download"
      })
      .catch(
        (error) => {}
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-error
      );
  };
  const downloadMath = () => {
    getDownloadURL(mathfileRef)
      .then((url) => {
        const am = document.getElementById("math-file");
        am.setAttribute("href", url);
        // Insert url into an <img> tag to "download"
      })
      .catch(
        (error) => {}
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-error
      );
  };
  const downloadSST = () => {
    getDownloadURL(sstfileRef)
      .then((url) => {
        const am = document.getElementById("sst-file");
        am.setAttribute("href", url);
        // Insert url into an <img> tag to "download"
      })
      .catch(
        (error) => {}
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-error
      );
  };
  const downloadEnglish = () => {
    getDownloadURL(englishfileRef)
      .then((url) => {
        const am = document.getElementById("english-file");
        am.setAttribute("href", url);
        // Insert url into an <img> tag to "download"
      })
      .catch(
        (error) => {}
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-error
      );
  };
  const downloadHindi = () => {
    getDownloadURL(hindifileRef)
      .then((url) => {
        const am = document.getElementById("hindi-file");
        am.setAttribute("href", url);
        // Insert url into an <img> tag to "download"
      })
      .catch(
        (error) => {}
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-error
      );
  };
  const downloadComputer = () => {
    getDownloadURL(computerfileRef)
      .then((url) => {
        const am = document.getElementById("computer-file");
        am.setAttribute("href", url);
        // Insert url into an <img> tag to "download"
      })
      .catch(
        (error) => {}
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-error
      );
  };

  const auth = getAuth();
  const userEmail = auth.currentUser.email;



  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">
              <b>Welcome</b>,{userEmail}
            </span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item" onClick={() => setSelected("Home")}>
              <a
                href="/home"
                className={`nav-link ${selected === "Home" && "active"}`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => setSelected("Question Paper")}
            >
              <a
                href="/features"
                className={`nav-link ${
                  selected === "Question Paper" && "active"
                }`}
              >
                Features
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelected("Signout")}>
              <a
               href="/login"
                className={`nav-link ${selected === "Signout" && "active"}`}
              >
                Sign Out
              </a>
            </li>
          </ul>
        </header>
      </div>
      <h5 >
        Download Most Important Questions For your BOARD EXAM 2024 For className
        10th
      </h5>
      <div className="Content">
        <div className="card" style={{ width: "18rem" }}>
          <img src={mypdf1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 id="science" className="card-title">
              Loading.....
            </h5>
            <a
              className="btn btn-primary"
              id="science-file"
              target="_blank"
              onClick={downloadScience}
            >
              View File
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={mypdf1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 id="math" className="card-title">
              Loading.....
            </h5>
            <a
              className="btn btn-primary"
              id="math-file"
              target="_blank"
              onClick={downloadMath}
            >
              View File
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={mypdf1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 id="sst" className="card-title">
              Loading.....
            </h5>
            <br></br>
            <a
              className="btn btn-primary"
              id="sst-file"
              target="_blank"
              onClick={downloadSST}
            >
              View File
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={mypdf1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 id="english" className="card-title">
              Loading.....
            </h5>
            <br></br>

            <a
              className="btn btn-primary"
              id="english-file"
              target="_blank"
              onClick={downloadEnglish}
            >
              View File
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={mypdf1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 id="hindi" className="card-title">
              Loading.....
            </h5>

            <a
              className="btn btn-primary"
              id="hindi-file"
              target="_blank"
              onClick={downloadHindi}
            >
              View File
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={mypdf1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 id="computer" className="card-title">
              Loading.....
            </h5>

            <a
              className="btn btn-primary"
              id="computer-file"
              target="_blank"
              onClick={downloadComputer}
            >
              View File
            </a>
          </div>
        </div>
      </div>
    </>

  );

};



export default Home;
