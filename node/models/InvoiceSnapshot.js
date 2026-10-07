import { d64 as c0, d175 as c1, d774 as c2, d926 as c3, d1691 as c4, d1696 as c5, d1743 as c6, d1744 as c7, d77 as c8, d1847 as c9, d1849 as c10, d1873 as c11, d73 as c12, d2035 as c13, d2313 as c14, d63 as c15, d76 as c16, d74 as c17, d1856 as c18, d41 as c19, d226 as c20, d2373 as c21, d2374 as c22, d75 as c23, d2377 as c24, d2381 as c25 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1743 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1743;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["DocumentTaxID"]:c2(),["Image"]:c3(),["InvoiceDiscount"]:c4(),["InvoiceLineItem"]:c5(),["InvoiceSnapshot"]:c6(),["InvoiceTip"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedChargeTax"]:c9(),["OrderCharge"]:c10(),["OrderLineItemModifier"]:c11(),["PostalAddress"]:c12(),["PricingAmounts"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec17"]:c15(),["SharedCodec18"]:c16(),["SharedCodec19"]:c17(),["SharedCodec493"]:c18(),["SharedCodec6"]:c19(),["SignedMoney"]:c20(),["TaxCalculationRequest"]:c21(),["TaxComponentRequest"]:c22(),["TaxIdentity"]:c23(),["TaxJurisdiction"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
