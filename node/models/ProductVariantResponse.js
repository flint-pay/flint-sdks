import { d811 as c0, d1630 as c1, d1631 as c2, d1634 as c3, d56 as c4, d1637 as c5, d69 as c6, d1646 as c7, d1645 as c8, d1858 as c9, d1862 as c10, d1959 as c11, d1960 as c12, d2109 as c13, d353 as c14, d57 as c15, d1636 as c16, d2172 as c17 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1862 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1862;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["Modifier"]:c1(),["ModifierGroup"]:c2(),["ModifierOverride"]:c3(),["ModifierSet"]:c4(),["ModifierSetGroup"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ProductVariant"]:c9(),["ProductVariantResponse"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec125"]:c14(),["SharedCodec15"]:c15(),["SharedCodec437"]:c16(),["TextModifierConfig"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
