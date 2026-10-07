import { d437 as c0, d438 as c1, d45 as c2, d812 as c3, d822 as c4, d77 as c5, d1824 as c6, d1823 as c7, d785 as c8, d2035 as c9, d2158 as c10, d2159 as c11, d2270 as c12, d2321 as c13, d14 as c14, d821 as c15, d99 as c16, d1822 as c17, d46 as c18, d2324 as c19, d2325 as c20, d226 as c21 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d437 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d437;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageResponse"]:c0(),["CreatePackageResult"]:c1(),["ExpandedOrderSummary"]:c2(),["FulfillmentEvent"]:c3(),["FulfillmentNotification"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["Package"]:c8(),["PricingAmounts"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["ReturnShipmentLineItemAllocation"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec1"]:c14(),["SharedCodec254"]:c15(),["SharedCodec27"]:c16(),["SharedCodec488"]:c17(),["SharedCodec8"]:c18(),["ShippingDimensions"]:c19(),["ShippingWeight"]:c20(),["SignedMoney"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
