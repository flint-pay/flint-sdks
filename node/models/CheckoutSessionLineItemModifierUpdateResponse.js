import { d60 as c0, d152 as c1, d198 as c2, d199 as c3, d811 as c4, d1587 as c5, d1588 as c6, d69 as c7, d1646 as c8, d1645 as c9, d1671 as c10, d1685 as c11, d1686 as c12, d1959 as c13, d1960 as c14, d2109 as c15, d59 as c16, d1679 as c17, d1666 as c18, d2166 as c19, d2167 as c20, d2170 as c21, d2174 as c22 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d199 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d199;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["CheckoutSessionLineItemModifierUpdate"]:c2(),["CheckoutSessionLineItemModifierUpdateResponse"]:c3(),["Image"]:c4(),["LineItemInventoryDemand"]:c5(),["LineItemInventorySnapshot"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["OrderCalculatedLineItemTax"]:c10(),["OrderLineItem"]:c11(),["OrderLineItemModifier"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec16"]:c16(),["SharedCodec441"]:c17(),["SignedMoney"]:c18(),["TaxCalculationRequest"]:c19(),["TaxComponentRequest"]:c20(),["TaxJurisdiction"]:c21(),["TextModifierRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionLineItemModifierUpdateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
