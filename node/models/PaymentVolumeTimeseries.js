import { d227 as c0, d323 as c1, d2001 as c2, d2002 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2002 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2002;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountMetric"]:c0(),["MoneyValue"]:c1(),["PaymentVolumeBucket"]:c2(),["PaymentVolumeTimeseries"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentVolumeTimeseries(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
