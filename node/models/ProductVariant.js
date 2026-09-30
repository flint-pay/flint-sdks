import { d811 as c0, d1630 as c1, d1631 as c2, d1634 as c3, d56 as c4, d1637 as c5, d69 as c6, d1858 as c7, d2109 as c8, d353 as c9, d57 as c10, d1636 as c11, d2172 as c12 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1858 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1858;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["Modifier"]:c1(),["ModifierGroup"]:c2(),["ModifierOverride"]:c3(),["ModifierSet"]:c4(),["ModifierSetGroup"]:c5(),["MoneyValue"]:c6(),["ProductVariant"]:c7(),["SelectedProductOption"]:c8(),["SharedCodec125"]:c9(),["SharedCodec15"]:c10(),["SharedCodec437"]:c11(),["TextModifierConfig"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
