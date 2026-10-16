import { d59 as c0, d61 as c1, d136 as c2, d757 as c3, d894 as c4, d1686 as c5, d1691 as c6, d1744 as c7, d1745 as c8, d323 as c9, d1850 as c10, d1852 as c11, d1879 as c12, d66 as c13, d2056 as c14, d2334 as c15, d69 as c16, d67 as c17, d2034 as c18, d2423 as c19, d2424 as c20, d68 as c21, d2427 as c22, d2431 as c23 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1744 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1744;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["DocumentTaxID"]:c3(),["Image"]:c4(),["InvoiceDiscount"]:c5(),["InvoiceLineItem"]:c6(),["InvoiceSnapshot"]:c7(),["InvoiceTip"]:c8(),["MoneyValue"]:c9(),["OrderCalculatedChargeTax"]:c10(),["OrderCharge"]:c11(),["OrderLineItemModifier"]:c12(),["PostalAddress"]:c13(),["PricingAmounts"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec13"]:c16(),["SharedCodec14"]:c17(),["SignedMoney"]:c18(),["TaxCalculationRequest"]:c19(),["TaxComponentRequest"]:c20(),["TaxIdentity"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
