
import type { PaymentVolumeBucket } from './PaymentVolumeBucket.js';

export type PaymentVolumeTimeseries = { "buckets": Array<PaymentVolumeBucket>; "currencies"?: Array<string>; "has_multiple_currencies": boolean; "range": "today" | "last_7_days" | "last_30_days" | (string & {}); "timezone": string; };
