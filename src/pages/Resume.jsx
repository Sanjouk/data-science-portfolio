import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { useLang } from '../context/LanguageContext';
import { setSEO } from '../utils/seo';
import { Waves, Gamepad2, Trophy, Download } from 'lucide-react';

// PDF Viewer Imports
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Import PDF File
import cvFile from '../assets/cv/Oleksandr_VLASOV_CV_AI _Engineer.pdf';

// Configure PDFJS Worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const interestIcons = [Waves, Gamepad2, Trophy];

export default function Resume() {
  const { t } = useLang();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setSEO(t.nav.resume, t.profile.summary);
  }, [t]);

  return (
    <div className="page">
      {/* Resume Viewer Section */}
      <section className="section resume-view-section">
        <div className="resume-viewer-container">
          <Document 
            file={cvFile} 
            className="pdf-document"
            loading={<div className="loading-pdf">Loading PDF...</div>}
          >
            <Page 
              pageNumber={1} 
              scale={width > 1200 ? 1.4 : width > 786 ? 1.0 : 0.6} 
              className="pdf-page"
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </Document>
        </div>
      </section>

      {/* Download Button */}
      <div className="resume-actions">
        <Button 
          variant="outline" 
          href={cvFile} 
          download="Oleksandr_VLASOV_CV.pdf"
          target="_blank"
        >
          <Download size={20} className="download-icon" />
          {t.hero.cta2}
        </Button>
      </div>
    </div>
  );
}
