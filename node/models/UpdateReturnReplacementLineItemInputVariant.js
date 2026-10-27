import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4919 as c1, d4920 as c2 } from '../descriptors/data/223.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2485 as c3 } from '../descriptors/data/101.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2485 as d2485 } from '../descriptors/data/101.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1107"]:c1(),["SharedCodec1108"]:c2(),["UpdateReturnReplacementLineItemInputVariant"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
