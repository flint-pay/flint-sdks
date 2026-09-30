import { d1630 as c0, d1631 as c1, d69 as c2, d2172 as c3 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1631 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1631;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["MoneyValue"]:c2(),["TextModifierConfig"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
