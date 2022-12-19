const COLUMN = (column?: string) => {
  return column ? `${column}を` : ''
}

export const REQUIRED = (column?: string) => {
  return `${COLUMN(column)}入力してください`
}
