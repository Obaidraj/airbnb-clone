import "./App.css";
import clsx from "clsx";
import Header from "./common-components/header";
import MenuCarousel from "./common-components/menu-carousel";
import PropertyCard from "./common-components/property-card";
import { LoadingPosts } from "./common-components/loading-lazy-content";
import Footer from "./common-components/footer";
import { wrapper } from "./core/wrapper/wrapper";
import { useEffect, useState, useRef } from "react";

import { v4 as uuidv4 } from "uuid";
import useLazyLoad from "./core/hooks/useLazyLoad";
import { FiFilter, FiSearch } from "react-icons/fi";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const App = () => {
  const triggerRef = useRef(null);
  const [listingProperty, setlistingProperty] = useState([]);

  useEffect(() => {
    GetPropertyImages();
    window.addEventListener("scroll", onScrollLoadMoreContent);

    return () => {
      window.removeEventListener("scroll", onScrollLoadMoreContent);
    };
  }, []);

  const onScrollLoadMoreContent = (event) => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement.scrollHeight
    ) {
      console.log("Get Me Down");
      GetPropertyImages();
    }
  };
  const onGrabData = (currentPage) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      wrapper
        .get(
          `https://pixabay.com/api/?key=30605728-dccf2355fa85fefa2c2d3abd4&q=real+estate&image_type=photo`
        )
        .then((response) => {
          console.log("listingRecord", response?.hits);
          var index = 0,
            listingRecord = [];
          while (index < response?.hits?.length) {
            listingRecord.push({
              id: uuidv4(),
              rating: Math.floor(Math.random() * (6 - 1 + 1) + 1),
              title: "Pakistan, Islamabad",
              images: response?.hits.slice(index, index + 3),
              address: "E-14 Islamabad",
              date_created: "Oct 16 – 21",
              price: Math.floor(Math.random() * 1000) + 500,
            });
            index += 3;
          }
          console.log("listingRecord", listingRecord);
          setlistingProperty([...listingProperty, ...listingRecord]);
          resolve([...listingProperty, ...listingRecord]);
        });
    });
  };
  const GetUpdateValueOnMenuChanged = (value) => {
    setlistingProperty([]);
    GetPropertyImages();
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  const GetPropertyImages = () => {
    wrapper
      .get(
        `https://pixabay.com/api/?key=30605728-dccf2355fa85fefa2c2d3abd4&q=real+estate&image_type=photo`
      )
      .then((response) => {
        console.log("listingRecord", response?.hits);
        var index = 0,
          listingRecord = [];
        while (index < response?.hits?.length) {
          listingRecord.push({
            id: uuidv4(),
            rating: Math.floor(Math.random() * (6 - 1 + 1) + 1),
            title: "Pakistan, Islamabad",
            images: response?.hits.slice(index, index + 3),
            address: "E-14 Islamabad",
            date_created: "Oct 16 – 21",
            price: Math.floor(Math.random() * 1000) + 500,
          });
          index += 3;
        }
        console.log("listingRecord", listingRecord);
        setlistingProperty([...listingProperty, ...listingRecord]);
      });
  };
  return (
    <>
      <div className="sticky top-0 z-40 bg-white">
        <div className="mb-2 border-b-2 d-none d-lg-block">
          <Header />
        </div>
        <div className="flex justify-center mb-2 border-b-2 d-md-none d-block w-96 pl-4">
          <div>
            <div className="header-centerlized-menu">
              <button className="right" type="button">
                <div className="px-3">
                  <FiSearch size={38} className="my-auto" />
                </div>
              </button>
              <span></span>
              <div className="left" type="button">
                <div className="px-3">
                  Where to? <br />
                  Anywhere . Any week . Add guests
                </div>
              </div>
              <span></span>
              <button className="right" type="button">
                <div className="px-3">
                  <BsArrowUpRightCircleFill size={38} className="my-auto" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-white">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-11 col-sm-12">
                <MenuCarousel
                  GetUpdatedValue={(event) =>
                    GetUpdateValueOnMenuChanged(event)
                  }
                />
              </div>
              <div className="col-1 mt-2 d-none d-lg-block">
                <div className="row">
                  <div className="col-10 border p-1 rounded-2 fs-4 text-center">
                    <i class="fa-solid fa-filter"></i> Filter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="grid gap-4 grid-cols-1 m-5 md:grid-cols-4">
          {listingProperty?.map((listing, index) => {
            return <PropertyCard key={index} property={listing} />;
          })}
        </div>
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
          <LoadingPosts />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
