import s from './GuaranteePage.module.scss';

function GuaranteePage() {
  return (
    <section className={s.guarantee}>
      <div className={s.guaranteeContainer}>
        <h2 className={s.guaranteeTitle}>Гарантія на дитяче взуття</h2>
        <h3 className={s.guaranteeSubtitle}>ГОСТ26165:2009 «Взуття дитяче»</h3>
        <p> - для всього взуття незалежно від типів підошви - 30 днів</p>
        <ul>
          <span>Гарантійний термін </span>
          носіння вважається з дня продажу через роздрібну мережу або початок
          сезону, у разі придбання товару у несезонний час:
          <li> - Зимовий сезон – з 15 листопада по 15 березня;</li>
          <li> - Літній сезон - з 15 травня до 15 вересня;</li>
          <li>
            - Весняно-осінній сезон – з 15 березня по 15 травня та з 15 вересня
            по 15 листопада.
          </li>
        </ul>
        <p>
          <span>Претензії </span>
          до якості взуття приймаються протягом гарантійного терміну з моменту
          покупки, крім цього дня, або початку сезону (дивіться вище) за
          наявності фабричної упаковки та чека.
        </p>
        <ul>
          <h3>Гарантія на взуття не надається у таких випадках:</h3>
          <li> - при недотриманні умов експлуатації та зберігання;</li>
          <li>
            - при неправильному підборі розміру взуття за повнотою, з
            нестандартною формою стопи або розміром;
          </li>
          <li>
            - при придбанні зниженого в ціні взуття у зв&apos;язку з частковою
            втратою якості, або очевидними дефектами, на які продавець вказав
            покупцю при купівлі;
          </li>
          <li>
            - на змінні деталі (устілки, шнурки, набійки, декоративну фурнітуру
            та ін.);
          </li>
          <li>
            - на дрібні дефекти, що виникли в процесі експлуатації, але не
            змінили функціонального призначення взуття, упродовж гарантійного
            терміну усуваються покупцем шляхом ремонту з подальшим пересиланням
            чека на ремонт магазину для відшкодування.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GuaranteePage;
