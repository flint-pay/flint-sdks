import { d152 as c0, d811 as c1, d1630 as c2, d1631 as c3, d1634 as c4, d56 as c5, d1637 as c6, d69 as c7, d1646 as c8, d1645 as c9, d1850 as c10, d1851 as c11, d1852 as c12, d1855 as c13, d1959 as c14, d1960 as c15, d2109 as c16, d353 as c17, d57 as c18, d1636 as c19, d1847 as c20, d1848 as c21, d1849 as c22, d2172 as c23 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1851 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1851;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["Image"]:c1(),["Modifier"]:c2(),["ModifierGroup"]:c3(),["ModifierOverride"]:c4(),["ModifierSet"]:c5(),["ModifierSetGroup"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["Product"]:c10(),["ProductListResponse"]:c11(),["ProductOption"]:c12(),["ProductOptionValue"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SelectedProductOption"]:c16(),["SharedCodec125"]:c17(),["SharedCodec15"]:c18(),["SharedCodec437"]:c19(),["SharedCodec469"]:c20(),["SharedCodec470"]:c21(),["SharedCodec471"]:c22(),["TextModifierConfig"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
