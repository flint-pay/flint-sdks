import { d45 as c0, d77 as c1, d1824 as c2, d1823 as c3, d2035 as c4, d2158 as c5, d2159 as c6, d2270 as c7, d2321 as c8, d14 as c9, d99 as c10, d1822 as c11, d784 as c12, d2322 as c13, d226 as c14 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2322 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2322;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PricingAmounts"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec1"]:c9(),["SharedCodec27"]:c10(),["SharedCodec488"]:c11(),["Shipment"]:c12(),["ShipmentListResponse"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShipmentListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
