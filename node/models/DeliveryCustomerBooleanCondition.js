import { d3551 as c0 } from '../descriptors/data/145.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3551 as d3551 } from '../descriptors/data/145.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3551;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCustomerBooleanCondition"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCustomerBooleanCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
