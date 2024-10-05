import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useLanguage } from "@/components/languageContext";
import getApiData from "@/utils/network";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Loader from "@/components/Loader";
import ImageViewer from 'react-simple-image-viewer';
import DasaraTimeline from "@/components/DasaraTimeline";

interface OtherSection {
  heading_en: string;
  heading_kn: string;
  type: string;
  content_en: string;
  content_kn: string;
  images: { images: string[] };
}

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const DasaraEvents: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [otherSections, setOtherSections] = useState<OtherSection[]>([]);
  const [currentViewerImages, setCurrentViewerImages] = useState<string[]>([]);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const timelineResp = await getApiData("dasaraprog");
        const otherEventsResp = await getApiData("other_events");
        
        setData(timelineResp);
        setOtherSections(otherEventsResp.filter((section: OtherSection) => section.images.images.length > 0));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const openImageViewer = (sectionIndex: number, index: number) => {
    setCurrentViewerImages(otherSections[sectionIndex].images.images);
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.bg}>
      <h1 className="text-center text-5xl font-bold text-yellow-300 mt-20 mb-10">
        {language === "kn" ? "ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರ" : "Events & Details"}
      </h1>

      {data.map((item, index) => (
        <div key={index}>
          <DasaraTimeline items={item} />
          <br />
        </div>
      ))}

      {otherSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          <h2 className="text-center text-4xl font-bold text-yellow-300 mb-6">
            {language === "kn" ? section.heading_kn : section.heading_en}
          </h2>
          <p className="text-center mb-6">
            {language === "kn" ? section.content_kn : section.content_en}
          </p>
          <div className={styles.image_blur}>
            <ColumnsPhotoAlbum
              photos={section.images.images.map((image, index) => ({
                src: image,
                width: 50,
                height: 25,
                alt: `Image ${index + 1}`,
              }))}
              columns={(containerWidth) => {
                if (containerWidth < 400) return 2;
                if (containerWidth < 800) return 3;
                return 4;
              }}
              onClick={({ index }) => openImageViewer(sectionIndex, index)}
            />
          </div>
        </div>
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={currentViewerImages}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default DasaraEvents;