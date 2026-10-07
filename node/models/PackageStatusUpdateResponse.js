import { d45 as c0, d812 as c1, d822 as c2, d77 as c3, d1824 as c4, d1823 as c5, d785 as c6, d1916 as c7, d1917 as c8, d1918 as c9, d2035 as c10, d2158 as c11, d2159 as c12, d2270 as c13, d2321 as c14, d14 as c15, d821 as c16, d99 as c17, d1822 as c18, d46 as c19, d2324 as c20, d2325 as c21, d226 as c22 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1917 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1917;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PackageStatusUpdate"]:c7(),["PackageStatusUpdateResponse"]:c8(),["PackageStatusUpdateResult"]:c9(),["PricingAmounts"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["ReturnShipmentLineItemAllocation"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec254"]:c16(),["SharedCodec27"]:c17(),["SharedCodec488"]:c18(),["SharedCodec8"]:c19(),["ShippingDimensions"]:c20(),["ShippingWeight"]:c21(),["SignedMoney"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
