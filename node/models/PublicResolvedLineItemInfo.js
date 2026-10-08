import { d889 as c0, d323 as c1, d2088 as c2, d2089 as c3, d2090 as c4, d2091 as c5, d2092 as c6, d2093 as c7, d2318 as c8 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2090 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2090;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["MoneyValue"]:c1(),["PublicResolvedBundleComponent"]:c2(),["PublicResolvedBundleVariantSummary"]:c3(),["PublicResolvedLineItemInfo"]:c4(),["PublicResolvedModifierGroup"]:c5(),["PublicResolvedModifierOption"]:c6(),["PublicResolvedTextModifier"]:c7(),["SelectedProductOption"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedLineItemInfo(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
