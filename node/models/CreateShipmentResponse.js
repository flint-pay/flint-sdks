import { d511 as c0, d512 as c1, d45 as c2, d77 as c3, d1797 as c4, d1796 as c5, d2008 as c6, d2131 as c7, d2132 as c8, d2243 as c9, d2294 as c10, d14 as c11, d99 as c12, d1795 as c13, d772 as c14, d223 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d511 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d511;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentResponse"]:c0(),["CreateShipmentResult"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["ReturnShipmentLineItemAllocation"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec1"]:c11(),["SharedCodec27"]:c12(),["SharedCodec485"]:c13(),["Shipment"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
