import { d64 as c0, d180 as c1, d780 as c2, d932 as c3, d1697 as c4, d1702 as c5, d1749 as c6, d1750 as c7, d77 as c8, d1853 as c9, d1855 as c10, d1879 as c11, d73 as c12, d2041 as c13, d2319 as c14, d63 as c15, d76 as c16, d74 as c17, d1862 as c18, d41 as c19, d227 as c20, d2379 as c21, d2380 as c22, d75 as c23, d2383 as c24, d2387 as c25 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1749 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["DocumentTaxID"]:c2(),["Image"]:c3(),["InvoiceDiscount"]:c4(),["InvoiceLineItem"]:c5(),["InvoiceSnapshot"]:c6(),["InvoiceTip"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedChargeTax"]:c9(),["OrderCharge"]:c10(),["OrderLineItemModifier"]:c11(),["PostalAddress"]:c12(),["PricingAmounts"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec17"]:c15(),["SharedCodec18"]:c16(),["SharedCodec19"]:c17(),["SharedCodec497"]:c18(),["SharedCodec6"]:c19(),["SignedMoney"]:c20(),["TaxCalculationRequest"]:c21(),["TaxComponentRequest"]:c22(),["TaxIdentity"]:c23(),["TaxJurisdiction"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
