import { d257 as c0, d77 as c1, d1830 as c2, d1829 as c3, d2004 as c4, d2005 as c5, d2006 as c6, d2164 as c7, d2165 as c8, d14 as c9, d1828 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2006 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2006;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountMetric"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentVolumeBucket"]:c4(),["PaymentVolumeTimeseries"]:c5(),["PaymentVolumeTimeseriesResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec492"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentVolumeTimeseriesResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
