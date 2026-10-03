import { d905 as c0, d74 as c1, d2046 as c2, d2047 as c3, d2048 as c4, d2049 as c5, d2050 as c6, d2051 as c7, d2272 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2048 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2048;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["MoneyValue"]:c1(),["PublicResolvedBundleComponent"]:c2(),["PublicResolvedBundleVariantSummary"]:c3(),["PublicResolvedLineItemInfo"]:c4(),["PublicResolvedModifierGroup"]:c5(),["PublicResolvedModifierOption"]:c6(),["PublicResolvedTextModifier"]:c7(),["SelectedProductOption"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedLineItemInfo(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
