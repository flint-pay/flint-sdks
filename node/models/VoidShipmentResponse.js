import { d41 as c0, d744 as c1, d754 as c2, d69 as c3, d1646 as c4, d1645 as c5, d718 as c6, d1843 as c7, d1959 as c8, d1960 as c9, d2071 as c10, d2116 as c11, d753 as c12, d91 as c13, d42 as c14, d717 as c15, d2119 as c16, d2120 as c17, d1666 as c18, d2312 as c19, d2313 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2312 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec225"]:c12(),["SharedCodec26"]:c13(),["SharedCodec7"]:c14(),["Shipment"]:c15(),["ShippingDimensions"]:c16(),["ShippingWeight"]:c17(),["SignedMoney"]:c18(),["VoidShipmentResponse"]:c19(),["VoidShipmentResult"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
