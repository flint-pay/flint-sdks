import { d218 as c0, d314 as c1, d1775 as c2, d1776 as c3, d1954 as c4, d1955 as c5, d1956 as c6, d2112 as c7, d2113 as c8, d14 as c9, d1774 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1956 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1956;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountMetric"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentVolumeBucket"]:c4(),["PaymentVolumeTimeseries"]:c5(),["PaymentVolumeTimeseriesResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec448"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentVolumeTimeseriesResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
