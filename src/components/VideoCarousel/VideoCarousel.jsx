import React, { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../../constants";
import { pauseImg, playImg, replayImg } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

function VideoCarousel() {
  const videosRef = useRef([]);
  const videosSpanRef = useRef([]);
  const videosDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    videoCurent: 0,
    startPlay: false,
    isLastVido: false,
    isPlaying: false,
  });

  const [laodedData, setlaodedData] = useState([]);
  const { isEnd, videoCurent, startPlay, isLastVido, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoCurent}%)`,
      duration: 2,
      ease: "power2.inOut", // show visualizer https://gsap.com/docs/v3/Eases
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prevVideo) => ({
          ...prevVideo,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoCurent]);

  const handelLoadedMetaData = (i, e) => {
    setlaodedData((laodedData) => [...laodedData, e]);
  };

  useEffect(() => {
    if (laodedData.length > 3) {
      if (!isPlaying) {
        videosRef.current[videoCurent].pause();
      } else {
        startPlay && videosRef.current[videoCurent].play();
      }
    }
  }, [startPlay, videoCurent, isPlaying, laodedData]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videosSpanRef.current;
    if (span[videoCurent]) {
      // animate the progrees of video
      let anim = gsap.to(span[videoCurent], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress != currentProgress) {
            currentProgress = progress;
            gsap.to(videosDivRef.current[videoCurent], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            gsap.to(span[videoCurent], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          console.log("video with id : " + videoCurent + "ended");
          if (isPlaying) {
            gsap.to(videosDivRef.current[videoCurent], {
              width: "12px",
            });
            gsap.to(span[videoCurent], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      if (videoCurent == 0) {
        anim.restart();
      }
      const animUpdate = () => {
        anim.progress(
          videosRef.current[videoCurent].currentTime /
            hightlightsSlides[videoCurent].videoDuration
        );
      };
      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoCurent, startPlay]);

  const handelProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isEnd: true,
          videoCurent: i + 1,
        }));
        break;

      case "video-last":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isLastVido: true,
        }));
        break;
      case "video-reset":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isLastVido: false,
          videoCurent: 0,
        }));
        break;
      case "play":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isPlaying: !prevVideo.isPlaying,
        }));
        break;
      case "pause":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isPlaying: !prevVideo.isPlaying,
        }));
        break;
      default:
        return video;
    }
  };
  return (
    <>
      <div className="flex items-center ">
        {hightlightsSlides.map((video, i) => (
          <div key={i} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center overflow-hidden bg-black rounded-3xl">
                <video
                  id="video"
                  playsInline={true}
                  autoPlay
                  preload="auto"
                  muted
                  ref={(ele) => {
                    videosRef.current[i] = ele;
                  }}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                  onLoadedMetadata={(e) => handelLoadedMetaData(i, e)}
                  onEnded={() => {
                    i !== hightlightsSlides.length - 1
                      ? handelProcess("video-end", i)
                      : handelProcess("video-last");
                  }}
                >
                  <source src={video.video} type="video/mp4"></source>
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {video.textLists.map((text, itext) => (
                  <p className="md:text-2xl text-xl font-medium" key={itext}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="realtive flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videosRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videosDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videosSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
        <button className="control-btn">
          <img
            src={isLastVido ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVido ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVido
                ? () => {
                    handelProcess("video-reset");
                  }
                : !isPlaying
                ? () => {
                    handelProcess("play");
                  }
                : () => {
                    handelProcess("pause");
                  }
            }
          />
        </button>
      </div>
    </>
  );
}

export default VideoCarousel;
