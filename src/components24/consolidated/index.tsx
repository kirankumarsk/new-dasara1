import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useLanguage } from "../../components/languageContext";
import GetApi from "../../utils/network";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Loader from "@/components/Loader";
import ImageViewer from "react-simple-image-viewer";
import { useRouter } from "next/router";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Section = {
  title: string;
  photos: Photo[];
  invite: Photo[];
  content: string[];
  location: string;
  location_iframe: string;
};

const consolidated = (param: any) => {
  const [sections, setSections] = useState<Section[]>([]);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [currentViewerImages, setCurrentViewerImages] = useState<string[]>([]);
  const [currentViewerImages2, setCurrentViewerImages2] = useState<string[]>([]);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();
  const params = useSearchParams();

  console.log("The payment : ", param);

  useEffect(() => {
    async function fetchData() {

      // const eventId = params.get('venue');
      const eventId = "consolidated_data?where=(slug%2Ceq%2C"+`${params.get('event')})`;
      console.log("Event venue from url ",params.get('event'));
      console.log("The event id is : ",params.get('event'));
      setLoading(true);
      try {
        const resp = await GetApi(
          eventId
        );
        console.log("getting the consolidated date", resp);
        const formattedSections: Section[] = resp.map((item: any) => ({
          title:
            language === "kn"
              ? item.event_title_kn || item.event_title_en
              : item.event_title_en || item.event_title_kn,
          content:
            language === "kn"
              ? item.event_details_kn || item.event_details_en
              : item.event_details_en || item.event_title_kn,
          location: item?.event_location_link,
          location_iframe: item?.event_loc_iframe,
          invite: (item?.event_invitations?.images || []).map(
            (image: string, index: number) => ({
              src: image,
              width: 50,
              height: 25,
              alt: `Image invite ${index + 1}`,
            })
          ),
          photos: (item?.event_gallery?.images || []).map(
            (image: string, index: number) => ({
              src: image,
              width: 50,
              height: 25,
              alt: `Image gallery ${index + 1}`,
            })
          ),
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
    setCurrentViewerImages(
      sections[sectionIndex].photos.map((photo) => photo.src)
    );
    setCurrentImage(index);
    setIsViewerOpen(true);
  };
  
  const openImageViewer2 = (sectionIndex: number, index: number) => {
    setCurrentViewerImages(
      sections[sectionIndex].invite.map((photo) => photo.src)
    );
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
            <div className={styles.section_invite}>
              <h3 style={{ color: "gold" }}>
                {language == "kn"
                  ? section.title + "ರ ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು"
                  : "Event Details of " + section.title}
              </h3>
              <div className={styles.section_details}>
              <div className={styles.album_holder}>
              <ColumnsPhotoAlbum
                photos={section.invite}
                columns={(containerWidth) => {
                  if (containerWidth < 400) return 2;
                  if (containerWidth < 800) return 3;
                  return 4;
                }}
                onClick={({ index }) => openImageViewer2(sectionIndex, index)}
              />
              </div>
              <p dangerouslySetInnerHTML={{__html: (section.content)}} className={styles.details}></p>
              </div>
            </div>

            <div className={styles.section_invite}>
              <h3 style={{ color: "gold" }}>
                {language == "kn"
                  ? "ಸ್ಥಳ ಮತ್ತು ಮುಖ್ಯಾಂಶಗಳು"
                  : "Venue & Highlights"}
              </h3>
              <a href={section?.location}>
                {language == "kn" ? "ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ" : "Navigate"}↗
              </a>
              <div className={styles.section_details}>
              <div className={styles.album_holder}>
              <ColumnsPhotoAlbum
                photos={section?.photos}
                columns={(containerWidth) => {
                  if (containerWidth < 400) return 2;
                  if (containerWidth < 800) return 3;
                  return 4;
                }}
                onClick={({ index }) => openImageViewer(sectionIndex, index)}
              />
              </div>

              <div>
              <iframe src={section.location_iframe} width="600" height="450" style={{border: "0"}} allowFullScreen={true} loading="lazy" referrerPolicy={"no-referrer-when-downgrade"}></iframe>
              </div>
              </div>
            </div>
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



export default consolidated;
