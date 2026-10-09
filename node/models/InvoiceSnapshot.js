import { d59 as c0, d61 as c1, d136 as c2, d747 as c3, d889 as c4, d1684 as c5, d1689 as c6, d1741 as c7, d1742 as c8, d323 as c9, d1847 as c10, d1849 as c11, d1874 as c12, d66 as c13, d2039 as c14, d2318 as c15, d69 as c16, d67 as c17, d1858 as c18, d2017 as c19, d2407 as c20, d2408 as c21, d68 as c22, d2411 as c23, d2415 as c24 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1741 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1741;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["DocumentTaxID"]:c3(),["Image"]:c4(),["InvoiceDiscount"]:c5(),["InvoiceLineItem"]:c6(),["InvoiceSnapshot"]:c7(),["InvoiceTip"]:c8(),["MoneyValue"]:c9(),["OrderCalculatedChargeTax"]:c10(),["OrderCharge"]:c11(),["OrderLineItemModifier"]:c12(),["PostalAddress"]:c13(),["PricingAmounts"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec13"]:c16(),["SharedCodec14"]:c17(),["SharedCodec473"]:c18(),["SignedMoney"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxIdentity"]:c22(),["TaxJurisdiction"]:c23(),["TextModifierRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
