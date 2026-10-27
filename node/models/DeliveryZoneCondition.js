import { d3568 as c0 } from '../descriptors/data/146.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3568 as d3568 } from '../descriptors/data/146.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3568;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryZoneCondition"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
