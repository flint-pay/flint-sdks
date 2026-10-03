import { d42 as c0, d794 as c1, d804 as c2, d74 as c3, d1786 as c4, d1785 as c5, d768 as c6, d1996 as c7, d2121 as c8, d2122 as c9, d2233 as c10, d2283 as c11, d803 as c12, d96 as c13, d43 as c14, d2286 as c15, d2287 as c16, d1806 as c17, d2484 as c18, d2485 as c19 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2484 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2484;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec246"]:c12(),["SharedCodec26"]:c13(),["SharedCodec7"]:c14(),["ShippingDimensions"]:c15(),["ShippingWeight"]:c16(),["SignedMoney"]:c17(),["VoidPackageResponse"]:c18(),["VoidPackageResult"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidPackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
