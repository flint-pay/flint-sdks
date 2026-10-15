import { d480 as c0, d481 as c1, d42 as c2, d323 as c3, d1823 as c4, d1824 as c5, d2056 as c6, d2178 as c7, d2179 as c8, d2289 as c9, d2340 as c10, d14 as c11, d92 as c12, d1822 as c13, d765 as c14, d2034 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d480 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d480;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentResponse"]:c0(),["CreateShipmentResult"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["ReturnShipmentLineItemAllocation"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec1"]:c11(),["SharedCodec17"]:c12(),["SharedCodec467"]:c13(),["Shipment"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
