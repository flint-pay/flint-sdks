import { d430 as c0, d42 as c1, d794 as c2, d804 as c3, d74 as c4, d768 as c5, d1996 as c6, d2233 as c7, d2283 as c8, d803 as c9, d96 as c10, d43 as c11, d2286 as c12, d2287 as c13, d1806 as c14 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d430 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d430;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageResult"]:c0(),["ExpandedOrderSummary"]:c1(),["FulfillmentEvent"]:c2(),["FulfillmentNotification"]:c3(),["MoneyValue"]:c4(),["Package"]:c5(),["PricingAmounts"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec246"]:c9(),["SharedCodec26"]:c10(),["SharedCodec7"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
