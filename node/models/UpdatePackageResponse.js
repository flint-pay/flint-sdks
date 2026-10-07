import { d45 as c0, d812 as c1, d822 as c2, d77 as c3, d1824 as c4, d1823 as c5, d785 as c6, d2035 as c7, d2158 as c8, d2159 as c9, d2270 as c10, d2321 as c11, d14 as c12, d821 as c13, d99 as c14, d1822 as c15, d46 as c16, d2324 as c17, d2325 as c18, d226 as c19, d2470 as c20, d2471 as c21 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2470 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2470;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec1"]:c12(),["SharedCodec254"]:c13(),["SharedCodec27"]:c14(),["SharedCodec488"]:c15(),["SharedCodec8"]:c16(),["ShippingDimensions"]:c17(),["ShippingWeight"]:c18(),["SignedMoney"]:c19(),["UpdatePackageResponse"]:c20(),["UpdatePackageResult"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
