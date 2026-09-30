import { d41 as c0, d69 as c1, d1646 as c2, d1645 as c3, d1843 as c4, d1959 as c5, d1960 as c6, d2071 as c7, d2116 as c8, d91 as c9, d717 as c10, d1666 as c11, d2296 as c12, d2297 as c13 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2296 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PricingAmounts"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec26"]:c9(),["Shipment"]:c10(),["SignedMoney"]:c11(),["UpdateShipmentResponse"]:c12(),["UpdateShipmentResult"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
