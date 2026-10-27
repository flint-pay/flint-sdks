import { d3462 as c0, d3467 as c1 } from '../descriptors/data/141.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2438 as c2 } from '../descriptors/data/97.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2438 as d2438 } from '../descriptors/data/97.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2438;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryLocationSetConfiguration"]:c0(),["SharedCodec1179"]:c1(),["UpdateDeliveryLocationSetRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
