import { d438 as c0, d45 as c1, d812 as c2, d822 as c3, d77 as c4, d785 as c5, d2035 as c6, d2270 as c7, d2321 as c8, d821 as c9, d99 as c10, d46 as c11, d2324 as c12, d2325 as c13, d226 as c14 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d438 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d438;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageResult"]:c0(),["ExpandedOrderSummary"]:c1(),["FulfillmentEvent"]:c2(),["FulfillmentNotification"]:c3(),["MoneyValue"]:c4(),["Package"]:c5(),["PricingAmounts"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec254"]:c9(),["SharedCodec27"]:c10(),["SharedCodec8"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
