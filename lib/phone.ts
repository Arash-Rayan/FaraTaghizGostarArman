export function toTelHref(phone: string) {
  const digits = phone.replace(/[۰-۹]/g, (d) =>
    String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)),
  );
  return `tel:${digits.replace(/\s+/g, "")}`;
}
