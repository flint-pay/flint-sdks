import { d64 as c0, d172 as c1, d765 as c2, d912 as c3, d1665 as c4, d1670 as c5, d1717 as c6, d1718 as c7, d77 as c8, d1820 as c9, d1822 as c10, d1846 as c11, d73 as c12, d2008 as c13, d2286 as c14, d63 as c15, d76 as c16, d74 as c17, d1829 as c18, d41 as c19, d223 as c20, d2346 as c21, d2347 as c22, d75 as c23, d2350 as c24, d2354 as c25 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1717 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1717;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["DocumentTaxID"]:c2(),["Image"]:c3(),["InvoiceDiscount"]:c4(),["InvoiceLineItem"]:c5(),["InvoiceSnapshot"]:c6(),["InvoiceTip"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedChargeTax"]:c9(),["OrderCharge"]:c10(),["OrderLineItemModifier"]:c11(),["PostalAddress"]:c12(),["PricingAmounts"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec17"]:c15(),["SharedCodec18"]:c16(),["SharedCodec19"]:c17(),["SharedCodec490"]:c18(),["SharedCodec6"]:c19(),["SignedMoney"]:c20(),["TaxCalculationRequest"]:c21(),["TaxComponentRequest"]:c22(),["TaxIdentity"]:c23(),["TaxJurisdiction"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
