import { singleByteStringNumber } from './text'

describe('singleByteStringNumber', () => {
  test('全角数字が半角数字に変換される', async () => {
    const requestValue = 'あア亜１２３４５６７８９０abc123'
    const expectedRes = 'あア亜1234567890abc123'

    expect(singleByteStringNumber(requestValue)).toBe(expectedRes)
  })
})
