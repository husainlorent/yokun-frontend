
interface FormattedDateProps {
  date: string | Date;
  className?: string;
}

const formatDateByLocale = (dateObj: Date, locale: string): string => {
  const day = dateObj.getDate();
  const monthIndex = dateObj.getMonth();
  const year = dateObj.getFullYear();

  const uzMonths = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  const krMonths = [
    "Январ",
    "Феврал",
    "Март",
    "Апрел",
    "Май",
    "Июн",
    "Июл",
    "Август",
    "Сентябр",
    "Октябр",
    "Ноябр",
    "Декабр",
  ];

  if (locale === "kr") {
    return `${day} ${krMonths[monthIndex]} ${year}`;
  }

  return `${day} ${uzMonths[monthIndex]} ${year}`;
};

export function FormattedDate({ date, className }: FormattedDateProps) {
  const locale = "uz"; // uz, kr

  const formatDate = (date: string | Date) => {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return "Invalid date";
    }
    return formatDateByLocale(dateObj, locale);
  };

  return (
    <time
      dateTime={typeof date === "string" ? date : date.toISOString()}
      className={className}
    >
      {formatDate(date)}
    </time>
  );
}
