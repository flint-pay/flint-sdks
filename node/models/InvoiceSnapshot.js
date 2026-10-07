import { d59 as c0, d61 as c1, d135 as c2, d726 as c3, d868 as c4, d1639 as c5, d1644 as c6, d1696 as c7, d1697 as c8, d314 as c9, d1802 as c10, d1804 as c11, d1829 as c12, d66 as c13, d1992 as c14, d2268 as c15, d69 as c16, d67 as c17, d1813 as c18, d1970 as c19, d2323 as c20, d2324 as c21, d68 as c22, d2327 as c23, d2331 as c24 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1696 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1696;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["DocumentTaxID"]:c3(),["Image"]:c4(),["InvoiceDiscount"]:c5(),["InvoiceLineItem"]:c6(),["InvoiceSnapshot"]:c7(),["InvoiceTip"]:c8(),["MoneyValue"]:c9(),["OrderCalculatedChargeTax"]:c10(),["OrderCharge"]:c11(),["OrderLineItemModifier"]:c12(),["PostalAddress"]:c13(),["PricingAmounts"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec13"]:c16(),["SharedCodec14"]:c17(),["SharedCodec455"]:c18(),["SignedMoney"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxIdentity"]:c22(),["TaxJurisdiction"]:c23(),["TextModifierRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
