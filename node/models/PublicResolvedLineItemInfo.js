import { d907 as c0, d74 as c1, d2049 as c2, d2050 as c3, d2051 as c4, d2052 as c5, d2053 as c6, d2054 as c7, d2275 as c8 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2051 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2051;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["MoneyValue"]:c1(),["PublicResolvedBundleComponent"]:c2(),["PublicResolvedBundleVariantSummary"]:c3(),["PublicResolvedLineItemInfo"]:c4(),["PublicResolvedModifierGroup"]:c5(),["PublicResolvedModifierOption"]:c6(),["PublicResolvedTextModifier"]:c7(),["SelectedProductOption"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedLineItemInfo(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
