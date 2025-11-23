import { formatDate } from '@/app/utils/format-date';

export type DateProps = {
  date: string;
};

export default function Date({ date }: DateProps) {
  return <span>{formatDate(date)}</span>;
}
