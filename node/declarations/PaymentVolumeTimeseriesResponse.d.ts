
import type { PaymentVolumeTimeseries } from './PaymentVolumeTimeseries.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PaymentVolumeTimeseriesResponse = { "data": PaymentVolumeTimeseries; "meta"?: ResponseMeta; "request_id"?: string; };
