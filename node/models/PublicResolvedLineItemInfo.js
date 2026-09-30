import { d811 as c0, d69 as c1, d1896 as c2, d1897 as c3, d1898 as c4, d1899 as c5, d1900 as c6, d1901 as c7, d2109 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1898 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1898;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["MoneyValue"]:c1(),["PublicResolvedBundleComponent"]:c2(),["PublicResolvedBundleVariantSummary"]:c3(),["PublicResolvedLineItemInfo"]:c4(),["PublicResolvedModifierGroup"]:c5(),["PublicResolvedModifierOption"]:c6(),["PublicResolvedTextModifier"]:c7(),["SelectedProductOption"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedLineItemInfo(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
