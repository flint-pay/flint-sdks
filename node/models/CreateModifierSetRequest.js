import { d4491 as c0, d4487 as c1, d4492 as c2, d4498 as c6, d4489 as c10 } from '../descriptors/data/197.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d184 as c3 } from '../descriptors/data/9.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3086 as c4, d3089 as c7 } from '../descriptors/data/121.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c5 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4500 as c8, d4501 as c9 } from '../descriptors/data/198.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d184 as d184 } from '../descriptors/data/9.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["CreateModifierSetRequest"]:c3(),["ModifierOverride"]:c4(),["MoneyValue"]:c5(),["SharedCodec164"]:c6(),["SharedCodec165"]:c7(),["SharedCodec166"]:c8(),["SharedCodec167"]:c9(),["TextModifierConfigRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
