import { d3546 as c0 } from '../descriptors/data/145.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3546 as d3546 } from '../descriptors/data/145.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3546;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBlackoutInterval"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBlackoutInterval(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
