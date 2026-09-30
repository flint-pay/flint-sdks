import { d41 as c0, d744 as c1, d754 as c2, d69 as c3, d1646 as c4, d1645 as c5, d718 as c6, d1728 as c7, d1729 as c8, d1730 as c9, d1843 as c10, d1959 as c11, d1960 as c12, d2071 as c13, d2116 as c14, d753 as c15, d91 as c16, d42 as c17, d2119 as c18, d2120 as c19, d1666 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1729 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1729;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PackageStatusUpdate"]:c7(),["PackageStatusUpdateResponse"]:c8(),["PackageStatusUpdateResult"]:c9(),["PricingAmounts"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["ReturnShipmentLineItemAllocation"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec225"]:c15(),["SharedCodec26"]:c16(),["SharedCodec7"]:c17(),["ShippingDimensions"]:c18(),["ShippingWeight"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
