import { d4493 as c0, d4488 as c1, d4489 as c3 } from '../descriptors/data/197.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4493 as d4493 } from '../descriptors/data/197.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4493;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["ModifierRequest"]:c1(),["MoneyValue"]:c2(),["TextModifierConfigRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInlineModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
