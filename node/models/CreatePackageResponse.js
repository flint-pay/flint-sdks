import { d391 as c0, d392 as c1, d42 as c2, d783 as c3, d793 as c4, d323 as c5, d1820 as c6, d1821 as c7, d756 as c8, d2039 as c9, d2162 as c10, d2163 as c11, d2273 as c12, d2324 as c13, d14 as c14, d92 as c15, d792 as c16, d1819 as c17, d43 as c18, d2327 as c19, d2328 as c20, d2017 as c21 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d391 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d391;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageResponse"]:c0(),["CreatePackageResult"]:c1(),["ExpandedOrderSummary"]:c2(),["FulfillmentEvent"]:c3(),["FulfillmentNotification"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["Package"]:c8(),["PricingAmounts"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["ReturnShipmentLineItemAllocation"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec1"]:c14(),["SharedCodec17"]:c15(),["SharedCodec227"]:c16(),["SharedCodec466"]:c17(),["SharedCodec5"]:c18(),["ShippingDimensions"]:c19(),["ShippingWeight"]:c20(),["SignedMoney"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
