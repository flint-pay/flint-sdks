import { d227 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2001 as c4, d2002 as c5, d2003 as c6, d2162 as c7, d2163 as c8, d14 as c9, d1819 as c10 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2003 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2003;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountMetric"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentVolumeBucket"]:c4(),["PaymentVolumeTimeseries"]:c5(),["PaymentVolumeTimeseriesResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec466"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentVolumeTimeseriesResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
