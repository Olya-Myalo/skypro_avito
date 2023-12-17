export function formatDateAndTime(datetime) {
    const date = new Date(datetime);
    const today = new Date();

    const formattedDate = date.toISOString().slice(0, 10);
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return `сегодня в ${formattedTime}`;
    } else {
      return `${formattedDate} в ${formattedTime}`;
    }
  }