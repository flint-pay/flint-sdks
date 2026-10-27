import { d3545 as c0, d3546 as c1 } from '../descriptors/data/145.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3565 as c2 } from '../descriptors/data/146.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3545 as d3545 } from '../descriptors/data/145.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3545;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailability"]:c0(),["DeliveryBlackoutInterval"]:c1(),["DeliveryWeeklyInterval"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryAvailability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
