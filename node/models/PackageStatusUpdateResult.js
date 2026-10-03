import { d42 as c0, d794 as c1, d804 as c2, d74 as c3, d768 as c4, d1878 as c5, d1880 as c6, d1996 as c7, d2233 as c8, d2283 as c9, d803 as c10, d96 as c11, d43 as c12, d2286 as c13, d2287 as c14, d1806 as c15 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1880 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1880;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PackageStatusUpdate"]:c5(),["PackageStatusUpdateResult"]:c6(),["PricingAmounts"]:c7(),["ReturnShipmentLineItemAllocation"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec246"]:c10(),["SharedCodec26"]:c11(),["SharedCodec7"]:c12(),["ShippingDimensions"]:c13(),["ShippingWeight"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
