import { d4491 as c0, d4487 as c1, d4492 as c2, d4498 as c5, d4489 as c9 } from '../descriptors/data/197.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3086 as c3, d3089 as c6 } from '../descriptors/data/121.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c4 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4500 as c7, d4501 as c8 } from '../descriptors/data/198.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4492 as d4492 } from '../descriptors/data/197.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4492;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["ModifierOverride"]:c3(),["MoneyValue"]:c4(),["SharedCodec164"]:c5(),["SharedCodec165"]:c6(),["SharedCodec166"]:c7(),["SharedCodec167"]:c8(),["TextModifierConfigRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
