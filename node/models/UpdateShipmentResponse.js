import { d45 as c0, d77 as c1, d1797 as c2, d1796 as c3, d2008 as c4, d2131 as c5, d2132 as c6, d2243 as c7, d2294 as c8, d14 as c9, d99 as c10, d1795 as c11, d772 as c12, d223 as c13, d2483 as c14, d2484 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2483 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2483;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PricingAmounts"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec1"]:c9(),["SharedCodec27"]:c10(),["SharedCodec485"]:c11(),["Shipment"]:c12(),["SignedMoney"]:c13(),["UpdateShipmentResponse"]:c14(),["UpdateShipmentResult"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
