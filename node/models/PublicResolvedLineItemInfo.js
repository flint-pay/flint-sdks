import { d868 as c0, d314 as c1, d2039 as c2, d2040 as c3, d2041 as c4, d2042 as c5, d2043 as c6, d2044 as c7, d2268 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2041 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2041;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["MoneyValue"]:c1(),["PublicResolvedBundleComponent"]:c2(),["PublicResolvedBundleVariantSummary"]:c3(),["PublicResolvedLineItemInfo"]:c4(),["PublicResolvedModifierGroup"]:c5(),["PublicResolvedModifierOption"]:c6(),["PublicResolvedTextModifier"]:c7(),["SelectedProductOption"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedLineItemInfo(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
