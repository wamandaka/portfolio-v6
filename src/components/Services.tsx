import { useLanguage } from "../i18n/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line bg-surface py-section">
      <div className="page-container grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">{t.services.eyebrow}</p>
          <h2 id="services-title" className="text-4xl font-extrabold sm:text-5xl">
            {t.services.title}
          </h2>
        </div>

        <ul className="divide-y divide-line border-y border-line lg:col-span-7">
          {t.services.items.map((service, index) => (
            <li key={service.title} className="grid gap-2 py-7 sm:grid-cols-[3rem_1fr]">
              <span className="font-display text-sm font-bold text-accent-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 max-w-[56ch] text-muted">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
