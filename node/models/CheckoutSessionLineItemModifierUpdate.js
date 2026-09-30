import { d60 as c0, d152 as c1, d198 as c2, d811 as c3, d1587 as c4, d1588 as c5, d69 as c6, d1671 as c7, d1685 as c8, d1686 as c9, d2109 as c10, d59 as c11, d1679 as c12, d1666 as c13, d2166 as c14, d2167 as c15, d2170 as c16, d2174 as c17 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d198 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["CheckoutSessionLineItemModifierUpdate"]:c2(),["Image"]:c3(),["LineItemInventoryDemand"]:c4(),["LineItemInventorySnapshot"]:c5(),["MoneyValue"]:c6(),["OrderCalculatedLineItemTax"]:c7(),["OrderLineItem"]:c8(),["OrderLineItemModifier"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec16"]:c11(),["SharedCodec441"]:c12(),["SignedMoney"]:c13(),["TaxCalculationRequest"]:c14(),["TaxComponentRequest"]:c15(),["TaxJurisdiction"]:c16(),["TextModifierRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionLineItemModifierUpdate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
