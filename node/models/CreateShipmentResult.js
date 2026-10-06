import { d512 as c0, d45 as c1, d77 as c2, d2008 as c3, d2243 as c4, d2294 as c5, d99 as c6, d772 as c7, d223 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d512 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d512;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentResult"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["ReturnShipmentLineItemAllocation"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec27"]:c6(),["Shipment"]:c7(),["SignedMoney"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
