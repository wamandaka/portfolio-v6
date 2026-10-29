import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Services Section */}
      <motion.section
        id="services"
        aria-labelledby="services-title"
        className="resume-section"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div>
          <h2 id="services-title" className="resume-section-title">
            {t.services.sectionTitle}
          </h2>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          {t.services.items.map((service) => (
            <div
              key={service.title}
              className="space-y-1 rounded-lg border border-[#334155]/60 bg-[#1e293b]/25 p-3.5 transition-colors hover:border-[#7733ff]/40"
            >
              <h3 className="resume-content-title">{service.title}</h3>
              <p className="text-xs leading-relaxed text-[#cbd5e1] sm:text-[13px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Services;
