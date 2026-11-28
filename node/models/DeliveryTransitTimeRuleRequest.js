import { d8671 as c0 } from '../descriptors/data/387.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8693 as c1 } from '../descriptors/data/389.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8693 as d8693 } from '../descriptors/data/389.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8693;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBusinessDayRangeRequest"]:c0(),["DeliveryTransitTimeRuleRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTransitTimeRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
