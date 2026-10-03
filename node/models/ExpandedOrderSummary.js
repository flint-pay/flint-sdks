import { d42 as c0, d74 as c1, d1993 as c2, d2280 as c3, d1804 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d42 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d42;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["PricingAmounts"]:c2(),["SettlementAmounts"]:c3(),["SignedMoney"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedOrderSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
