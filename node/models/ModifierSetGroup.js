import { d1630 as c0, d1631 as c1, d1634 as c2, d1637 as c3, d69 as c4, d353 as c5, d1636 as c6, d2172 as c7 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1637 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1637;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSetGroup"]:c3(),["MoneyValue"]:c4(),["SharedCodec125"]:c5(),["SharedCodec437"]:c6(),["TextModifierConfig"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
