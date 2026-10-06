import { d45 as c0, d77 as c1, d785 as c2, d2034 as c3, d2269 as c4, d2320 as c5, d99 as c6, d2323 as c7, d2324 as c8, d226 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d785 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d785;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["Package"]:c2(),["PricingAmounts"]:c3(),["ReturnShipmentLineItemAllocation"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec27"]:c6(),["ShippingDimensions"]:c7(),["ShippingWeight"]:c8(),["SignedMoney"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackage(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
