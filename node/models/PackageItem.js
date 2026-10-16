import { d42 as c0, d323 as c1, d1926 as c2, d2056 as c3, d2340 as c4, d92 as c5, d2034 as c6 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1926 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1926;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["PackageItem"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec17"]:c5(),["SignedMoney"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
