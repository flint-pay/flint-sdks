import { d688 as c0, d692 as c1 } from '../descriptors/data/39.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c2 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1975 as c3 } from '../descriptors/data/98.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8864 as c4, d8865 as c5 } from '../descriptors/data/398.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d688 as d688 } from '../descriptors/data/39.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d688;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcomeUnavailable"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec1065"]:c3(),["SharedCodec205"]:c4(),["SharedCodec206"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcomeUnavailable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
