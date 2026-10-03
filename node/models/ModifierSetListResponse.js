import { d1770 as c0, d1771 as c1, d1774 as c2, d57 as c3, d1777 as c4, d1779 as c5, d74 as c6, d1786 as c7, d1785 as c8, d2121 as c9, d2122 as c10, d399 as c11, d1776 as c12, d2340 as c13 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1779 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1779;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["ModifierSetListResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec145"]:c11(),["SharedCodec478"]:c12(),["TextModifierConfig"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
