import { d61 as c0, d169 as c1, d757 as c2, d905 as c3, d1656 as c4, d1663 as c5, d1710 as c6, d1711 as c7, d74 as c8, d1808 as c9, d1810 as c10, d1833 as c11, d70 as c12, d1993 as c13, d2272 as c14, d60 as c15, d73 as c16, d71 as c17, d1817 as c18, d38 as c19, d1804 as c20, d2331 as c21, d2332 as c22, d72 as c23, d2335 as c24, d2339 as c25 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1710 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1710;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["DocumentTaxID"]:c2(),["Image"]:c3(),["InvoiceDiscount"]:c4(),["InvoiceLineItem"]:c5(),["InvoiceSnapshot"]:c6(),["InvoiceTip"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedChargeTax"]:c9(),["OrderCharge"]:c10(),["OrderLineItemModifier"]:c11(),["PostalAddress"]:c12(),["PricingAmounts"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec16"]:c15(),["SharedCodec17"]:c16(),["SharedCodec18"]:c17(),["SharedCodec482"]:c18(),["SharedCodec5"]:c19(),["SignedMoney"]:c20(),["TaxCalculationRequest"]:c21(),["TaxComponentRequest"]:c22(),["TaxIdentity"]:c23(),["TaxJurisdiction"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
