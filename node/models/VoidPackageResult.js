import { d45 as c0, d812 as c1, d822 as c2, d77 as c3, d785 as c4, d2034 as c5, d2269 as c6, d2320 as c7, d821 as c8, d99 as c9, d46 as c10, d2323 as c11, d2324 as c12, d226 as c13, d2523 as c14 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2523 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2523;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec254"]:c8(),["SharedCodec27"]:c9(),["SharedCodec8"]:c10(),["ShippingDimensions"]:c11(),["ShippingWeight"]:c12(),["SignedMoney"]:c13(),["VoidPackageResult"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidPackageResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
