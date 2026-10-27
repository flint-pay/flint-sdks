import { d3312 as c0 } from '../descriptors/data/133.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3312 as d3312 } from '../descriptors/data/133.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTaxConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutTaxConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
