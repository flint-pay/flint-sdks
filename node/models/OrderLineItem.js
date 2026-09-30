import { d60 as c0, d152 as c1, d811 as c2, d1587 as c3, d1588 as c4, d69 as c5, d1671 as c6, d1685 as c7, d1686 as c8, d2109 as c9, d59 as c10, d1679 as c11, d1666 as c12, d2166 as c13, d2167 as c14, d2170 as c15, d2174 as c16 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1685 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1685;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["LineItemInventoryDemand"]:c3(),["LineItemInventorySnapshot"]:c4(),["MoneyValue"]:c5(),["OrderCalculatedLineItemTax"]:c6(),["OrderLineItem"]:c7(),["OrderLineItemModifier"]:c8(),["SelectedProductOption"]:c9(),["SharedCodec16"]:c10(),["SharedCodec441"]:c11(),["SignedMoney"]:c12(),["TaxCalculationRequest"]:c13(),["TaxComponentRequest"]:c14(),["TaxJurisdiction"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
