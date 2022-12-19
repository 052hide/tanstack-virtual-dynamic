/**
 * 全角数字を半角に反感して文字列で返す
 */
export const singleByteStringNumber = (value: string): string => {
  return value.replace(/[０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  })
}
