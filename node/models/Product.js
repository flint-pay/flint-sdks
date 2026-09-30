import { d152 as c0, d811 as c1, d1630 as c2, d1631 as c3, d1634 as c4, d56 as c5, d1637 as c6, d69 as c7, d1850 as c8, d1852 as c9, d1855 as c10, d2109 as c11, d353 as c12, d57 as c13, d1636 as c14, d1847 as c15, d1848 as c16, d1849 as c17, d2172 as c18 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1850 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1850;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["Image"]:c1(),["Modifier"]:c2(),["ModifierGroup"]:c3(),["ModifierOverride"]:c4(),["ModifierSet"]:c5(),["ModifierSetGroup"]:c6(),["MoneyValue"]:c7(),["Product"]:c8(),["ProductOption"]:c9(),["ProductOptionValue"]:c10(),["SelectedProductOption"]:c11(),["SharedCodec125"]:c12(),["SharedCodec15"]:c13(),["SharedCodec437"]:c14(),["SharedCodec469"]:c15(),["SharedCodec470"]:c16(),["SharedCodec471"]:c17(),["TextModifierConfig"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
