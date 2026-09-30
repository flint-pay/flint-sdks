
import type { PaymentVolumeBucketInput } from './PaymentVolumeBucketInput.js';

export type PaymentVolumeTimeseriesInput = { "buckets": Array<PaymentVolumeBucketInput>; "currencies"?: Array<string>; "has_multiple_currencies": boolean; "range": "today" | "last_7_days" | "last_30_days"; "timezone": string; };
