export interface Iservice {
  icon: string;
  title: string;
  description: string;
  number?: string; // اختياري - لو مش موجودة هيتحسب تلقائي من الـ index
}
