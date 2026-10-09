import { d323 as c0, d2091 as c1, d2092 as c2, d2093 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2091 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2091;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublicResolvedModifierGroup"]:c1(),["PublicResolvedModifierOption"]:c2(),["PublicResolvedTextModifier"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
