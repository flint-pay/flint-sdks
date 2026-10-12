import { d1804 as c0, d1805 as c1, d323 as c2, d2413 as c3 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1805 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1805;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["MoneyValue"]:c2(),["TextModifierConfig"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
