export const week = ['일', '월', '화', '수', '목', '금', '토'];

export function handleDday(dateSelected) {
  const today = new Date();
  const gap = new Date(dateSelected).getTime() - today.getTime();
  const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
  if (result === 0)
    return '오늘';
  if (result > 0)
    return `${result}일 후`;
  if (result < 0)
    return `${Math.abs(result)}일 전`;
}

export function formatDate (date = new Date()) {
  return new Date(date).toLocaleDateString('ko-KR').replace(/. /g, '-').replace('.', '')
}

export function formatDateKR (date = new Date()) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('ko-KR').replace(/ /g, '') + `(${week[newDate.getDay()]})`;
}
