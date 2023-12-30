export function formatDate(date) {
  const sellsFromDate = new Date(date)
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  const monthIndex = sellsFromDate.getMonth()
  const year = sellsFromDate.getFullYear()

  const formattedDate = `${months[monthIndex]} ${year}`

  return formattedDate
}

export function formatDateAndTime(datetime) {
  const date = new Date(datetime)
  const today = new Date()

  const formattedDate = date.toISOString().slice(0, 10)
  const formattedTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return `сегодня в ${formattedTime}`
  } else {
    return `${formattedDate} в ${formattedTime}`
  }
}

export function formatDateTime(date) {
  const sellsFromDate = new Date(date)
  const monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const formattedDate = `${sellsFromDate.getDate()} ${
    monthNames[sellsFromDate.getMonth()]
  }
    `
  return formattedDate
}
