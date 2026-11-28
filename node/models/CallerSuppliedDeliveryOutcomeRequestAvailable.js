import { d135 as c0 } from '../descriptors/data/7.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8857 as c1, d8858 as c3, d8859 as c4, d8861 as c5, d8862 as c6 } from '../descriptors/data/398.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c2 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d135 as d135 } from '../descriptors/data/7.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestAvailable"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec199"]:c3(),["SharedCodec200"]:c4(),["SharedCodec202"]:c5(),["SharedCodec203"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
