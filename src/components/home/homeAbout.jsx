// src/components/home/HomeAbout.jsx
import React from "react";
// Option A - recommended: put dummyimg.png inside src/assets and import it
import aboutImage from "../../../public/dummyimg.png";

// Option B - if you prefer to keep it in the public folder, comment out the import above
// and use the string path '/dummyimg.png' in the <img /> src (see commented src below).

export default function HomeAbout() {
  return (
    <section className="bg-[#0A175C80] py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left content */}
        <div className="lg:w-1/2 text-white flex flex-col justify-center">
          <p
            className="text-base font-medium mb-2"
            style={{ fontFamily: "Work Sans" }}
          >
            About
          </p>

          <h2
            className="mb-6 leading-snug"
            style={{
              fontFamily: "Outfit",
              fontSize: "39px",
              maxWidth: "900px", // ensures line breaks like Figma
              fontWeight: "bold",
            }}
          >
            Transforming{" "}
            <span className="text-[#F05023]">Manufacturing</span> <br />
            with <span className="text-[#F05023]">Innovative</span> Solutions
          </h2>

          <p
            className="mb-6"
            style={{
              fontFamily: "Work Sans",
              fontSize: "18px",
              color: "#E5E7EB",
            }}
          >
            Sure Supply is a leading manufacturing solutions provider dedicated
            to driving industrial innovation through advanced technologies and
            strategic partnerships.
          </p>

          <ul
            className="list-disc list-inside mb-6 text-gray-200"
            style={{ gap: "16px", display: "flex", flexDirection: "column" }}
          >
            <li>Commitment to quality</li>
            <li>Cutting-edge technology integration</li>
            <li>Global industry expertise</li>
          </ul>

          <button
            className="text-[#F05023] hover:bg-[#F05023] hover:text-white transition"
            style={{
              border: "1px solid #F05023",
              width: "100px",
              height: "44px",
              borderRadius: "4px",
              fontWeight: "600",
            }}
          >
            Discover
          </button>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
          <img
            // If you used Option A (src/assets), use the imported aboutImage
            src={aboutImage}
            // If you used Option B (public folder), use: src="/dummyimg.png"
            // src="/dummyimg.png"
            alt="About illustration"
            width={406}
            height={428}
            className="object-contain rounded-lg"
            style={{ display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
