import { d3230 as c0 } from '../descriptors/data/129.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3230 as d3230 } from '../descriptors/data/129.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutPromotionConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutPromotionConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
