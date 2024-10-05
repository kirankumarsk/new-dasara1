import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import { useLanguage } from "../../components/languageContext";
import GetApi from "../../utils/network";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Loader from "@/components/Loader";
import ImageViewer from 'react-simple-image-viewer';

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Section = {
  title: string;
  photos: Photo[];
};

const PressNote: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [currentViewerImages, setCurrentViewerImages] = useState<string[]>([]);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const resp = await GetApi("gallery?sort=-Id");
        const formattedSections: Section[] = resp.map((item: any) => ({
          title: language === "kn" ? (item.section_title_kn || item.section_title_en) : (item.section_title_en || item.section_title_kn),
          photos: (item.images?.images || []).map((image: string, index: number) => ({
            src: image,
            width: 50,
            height: 25,
            alt: `Image ${index + 1}`,
          }))
        }));
        setSections(formattedSections);
        console.log("Formatted sections : ", formattedSections);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [language]);

  const openImageViewer = (sectionIndex: number, index: number) => {
    setCurrentViewerImages(sections[sectionIndex].photos.map(photo => photo.src));
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
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          <h2 className="text-center text-4xl font-bold text-yellow-300 mb-6">
            {section.title}
          </h2>
          <div className={styles.image_blur}>
            <ColumnsPhotoAlbum
              photos={section.photos}
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

export default PressNote;