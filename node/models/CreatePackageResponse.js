import { d393 as c0, d394 as c1, d42 as c2, d793 as c3, d803 as c4, d323 as c5, d1823 as c6, d1824 as c7, d766 as c8, d2056 as c9, d2178 as c10, d2179 as c11, d2289 as c12, d2340 as c13, d14 as c14, d92 as c15, d802 as c16, d1822 as c17, d43 as c18, d2343 as c19, d2344 as c20, d2034 as c21 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d393 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d393;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageResponse"]:c0(),["CreatePackageResult"]:c1(),["ExpandedOrderSummary"]:c2(),["FulfillmentEvent"]:c3(),["FulfillmentNotification"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["Package"]:c8(),["PricingAmounts"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["ReturnShipmentLineItemAllocation"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec1"]:c14(),["SharedCodec17"]:c15(),["SharedCodec233"]:c16(),["SharedCodec467"]:c17(),["SharedCodec5"]:c18(),["ShippingDimensions"]:c19(),["ShippingWeight"]:c20(),["SignedMoney"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
