import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

// Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/playFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in Ambala</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/2-india-movie-poster-design-hindi-bjirao-mastani.jpg"
                title="Bajirao Mastani"
                subtitle="Comedy Shows | English, Kannada | 18 yrs+ | 2hrs 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                title="I shahaani"
                subtitle="Comedy Shows | English, Kannada | 18 yrs+ | 2hrs 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                title="The Laugh Store"
                subtitle="Comedy Shows | English, Kannada | 18 yrs+ | 2hrs 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-arena-ft-dj-snake-delhi-ncr-0-2022-8-19-t-11-31-17.jpg"
                title="DJ"
                subtitle="Comedy Shows | English, Kannada | 18 yrs+ | 2hrs 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://latestbollywoodcelebrityphotos.files.wordpress.com/2013/07/189843_437393269660184_696001941_n.jpg"
                title="Bhaag Milkha Bhaag"
                subtitle="Comedy Shows | English, Kannada | 18 yrs+ | 2hrs 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://i.pinimg.com/originals/9c/d7/8b/9cd78b335d13699778349aaf11c637c6.jpg"
                title="Dear Zindagi"
                subtitle="Comedy Shows | English, Kannada | 18 yrs+ | 2hrs 30 mins"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Language"
              tags={["English", "Punjabi", "Hindi", "Tamil"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
