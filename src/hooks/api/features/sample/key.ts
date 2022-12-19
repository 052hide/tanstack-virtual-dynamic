import type { GetSampleParams } from './type'

export const sampleKeyFactory = {
  all: [{ scope: 'sample' }] as const,
  sample: ({ params }: { params: GetSampleParams }) =>
    [{ ...sampleKeyFactory.all[0], entity: 'sample', params }] as const,
}
