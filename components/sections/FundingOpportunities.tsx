"use client";
const programs = [
  {
    id: "brave1",
    tag: "UA",
    tagColor: "#3B82F6",
    name: "Brave1",
    subtitle: "Державна грантова програма",
    forWhom: "Українські defence-tech та dual-use компанії",
    value: "500 тис. — 900 млн грн",
    desc: "Ключова вхідна точка для більшості компаній. Спецконкурси до 100–150 млн грн, програми масштабування до 900 млн грн. Більше 600 грантів видано.",
  },
  {
    id: "defence-city",
    tag: "UA",
    tagColor: "#3B82F6",
    name: "Defence City",
    subtitle: "Регуляторний режим",
    forWhom: "Оборонні підприємства, масштабування",
    value: "Податкові преференції",
    desc: "Спеціальний режим для структурування бізнесу оборонних компаній, реінвестування прибутку та доступу до пільгових умов.",
  },
  {
    id: "dot-chain",
    tag: "UA",
    tagColor: "#3B82F6",
    name: "DOT-Chain",
    subtitle: "Ланцюг постачань ОПК",
    forWhom: "Постачальники компонентів і рішень",
    value: "Контракти та доступ до держзамовника",
    desc: "Інструмент для інтеграції компаній у ланцюги постачань оборонно-промислового комплексу України.",
  },
  {
    id: "opk-credit",
    tag: "UA",
    tagColor: "#3B82F6",
    name: "5%-кредитування ОПК",
    subtitle: "Пільгове фінансування",
    forWhom: "Виробники оборонної продукції",
    value: "Пільгові кредити",
    desc: "Доступ до кредитних ресурсів за зниженою ставкою для виробників оборонних товарів і технологій.",
  },
  {
    id: "edip",
    tag: "EU",
    tagColor: "#0369A1",
    name: "EDIP / USI",
    subtitle: "European Defence Industry Programme",
    forWhom: "Українські юридичні особи",
    value: "€ Гранти та контракти",
    desc: "Окремий канал ЄС для українських компаній у напрямах UAS/counter-UAS, missiles, ammunition та інших оборонних технологій.",
  },
  {
    id: "bravetech",
    tag: "EU",
    tagColor: "#0369A1",
    name: "BraveTech EU",
    subtitle: "Спільна EU-UA програма",
    forWhom: "Brave1-резиденти з EU-потенціалом",
    value: "€ Гранти + доступ до ринку",
    desc: "Міст між українськими defence-tech рішеннями та євроспільнотою. Прискорений доступ для компаній із підтвердженою валідацією.",
  },
  {
    id: "edf",
    tag: "EU",
    tagColor: "#0369A1",
    name: "EDF",
    subtitle: "European Defence Fund",
    forWhom: "Компанії з EU-партнерами (консорціум)",
    value: "€ до 200 млн на проєкт",
    desc: "Найбільший оборонний грантовий фонд ЄС. Вимагає участі у консорціумі з EU-компаніями. Відкритий для UkR компаній із EU-структурою.",
  },
  {
    id: "horizon",
    tag: "EU",
    tagColor: "#0369A1",
    name: "Horizon Europe / EIC",
    subtitle: "EU R&D та інновації",
    forWhom: "Технологічні компанії, dual-use R&D",
    value: "€ до 2,5 млн (EIC Accelerator)",
    desc: "EIC Accelerator відкритий для Ukrainian eligible companies. Підходить для dual-use технологій з комерційним потенціалом.",
  },
  {
    id: "dfc",
    tag: "US",
    tagColor: "#7C3AED",
    name: "DFC URIF",
    subtitle: "US International Development Finance",
    forWhom: "Ukrainian dual-use компанії",
    value: "$150M+ equity / debt",
    desc: "Канал equity та debt-фінансування через US DFC для українських компаній подвійного використання. Стартовий капітал $150 млн.",
  },
  {
    id: "uk-ifu",
    tag: "UK",
    tagColor: "#059669",
    name: "UK IFU",
    subtitle: "UK International Financing",
    forWhom: "Виробники дронів, РЕБ, розмінування",
    value: "£ Direct investment",
    desc: "Прямий канал через Defence Sourcing Portal. Пріоритетні напрями: FPV/strike drones, EW, mine clearance, ISR.",
  },
  {
    id: "nato",
    tag: "NATO",
    tagColor: "#C9A84C",
    name: "NATO DIANA / NIF",
    subtitle: "DIANA Accelerator + Innovation Fund",
    forWhom: "Deep-tech, dual-use, AI, cyber",
    value: "€ + доступ до полігонів НАТО",
    desc: "DIANA надає доступ до акселераційних програм та полігонів НАТО. NATO Innovation Fund — €1 млрд для deep-tech компаній.",
  },
  {
    id: "vc",
    tag: "VC",
    tagColor: "#475569",
    name: "VC / Strategic Investors",
    subtitle: "Приватний капітал",
    forWhom: "Scale-up з traction та контрактами",
    value: "$1M — $50M+",
    desc: "Глобальний defence-tech ринок: $49.1 млрд у 2025. Україна: $129 млн у 50+ стартапів. Активні фонди: UA, EU, US, UK.",
  },
];

export default function FundingOpportunities() {
  return (
    <section
      id="opportunities"
      className="section"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="container">
        <div data-reveal style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.875rem",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "100px",
              color: "#C9A84C",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "Lato, sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Карта фінансування
          </span>
          <h2
            style={{
              fontFamily: "EB Garamond, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#FFFFFF",
              maxWidth: "680px",
              margin: "0 auto 1rem",
            }}
          >
            12 каналів фінансування для defence-tech компаній
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1rem",
              maxWidth: "560px",
              margin: "0 auto",
              fontFamily: "Lato, sans-serif",
              lineHeight: 1.7,
            }}
          >
            На одну компанію може припадати 30–60 потенційних інструментів. Ми аналізуємо сумісність, пріоритети та дедлайни для вашої конкретної ситуації.
          </p>
        </div>

        {/* Program grid */}
        <div
          data-stagger
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            gap: "1rem",
          }}
        >
          {programs.map((prog) => (
            <div
              key={prog.id}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "1.5rem",
                transition: "border-color 0.25s, background 0.25s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Tag + name */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.875rem" }}>
                <span
                  style={{
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    fontFamily: "Lato, sans-serif",
                    letterSpacing: "0.06em",
                    background: `${prog.tagColor}20`,
                    color: prog.tagColor,
                    border: `1px solid ${prog.tagColor}40`,
                  }}
                >
                  {prog.tag}
                </span>
                <span
                  style={{
                    fontFamily: "EB Garamond, Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {prog.name}
                </span>
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "Lato, sans-serif",
                  marginBottom: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {prog.subtitle}
              </div>

              {/* Description */}
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.875rem",
                  fontFamily: "Lato, sans-serif",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                {prog.desc}
              </p>

              {/* Value badge */}
              <div
                style={{
                  padding: "0.5rem 0.75rem",
                  background: `${prog.tagColor}10`,
                  borderRadius: "8px",
                  borderLeft: `2px solid ${prog.tagColor}`,
                  fontSize: "0.82rem",
                  fontFamily: "Lato, sans-serif",
                  color: prog.tagColor,
                  fontWeight: 700,
                }}
              >
                {prog.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
