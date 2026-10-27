import { d4524 as c0 } from '../descriptors/data/199.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4524 as d4524 } from '../descriptors/data/199.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4524;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDigitalFulfillmentDetails"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDigitalFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
