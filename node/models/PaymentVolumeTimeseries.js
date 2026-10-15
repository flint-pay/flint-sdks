import { d227 as c0, d323 as c1, d2018 as c2, d2019 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2019 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2019;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountMetric"]:c0(),["MoneyValue"]:c1(),["PaymentVolumeBucket"]:c2(),["PaymentVolumeTimeseries"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentVolumeTimeseries(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
