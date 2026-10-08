import { d227 as c0, d323 as c1, d2001 as c2, d2002 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2002 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2002;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountMetric"]:c0(),["MoneyValue"]:c1(),["PaymentVolumeBucket"]:c2(),["PaymentVolumeTimeseries"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentVolumeTimeseries(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
