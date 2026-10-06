import { d1780 as c0, d1781 as c1, d1784 as c2, d60 as c3, d1787 as c4, d77 as c5, d403 as c6, d1786 as c7, d2352 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d60 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d60;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["MoneyValue"]:c5(),["SharedCodec148"]:c6(),["SharedCodec484"]:c7(),["TextModifierConfig"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSet(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
