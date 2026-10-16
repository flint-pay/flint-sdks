import { d323 as c0, d1854 as c1, d1881 as c2, d1901 as c3, d1902 as c4, d1904 as c5, d1906 as c6, d1907 as c7, d1908 as c8, d1909 as c9, d1910 as c10, d1911 as c11, d1912 as c12, d1919 as c13, d336 as c14, d1898 as c15, d1900 as c16, d1899 as c17, d1917 as c18, d1916 as c19, d1918 as c20, d2423 as c21, d2424 as c22, d2427 as c23 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1919 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1919;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderChargeTaxAssignment"]:c1(),["OrderLineItemTaxAssignment"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxJurisdictionRequest"]:c5(),["OrderTaxLocationFullAddressRequest"]:c6(),["OrderTaxLocationInputFullAddress"]:c7(),["OrderTaxLocationInputInferredFullAddress"]:c8(),["OrderTaxLocationInputInferredPostalCode"]:c9(),["OrderTaxLocationInputPostalCode"]:c10(),["OrderTaxLocationPostalAddressRequest"]:c11(),["OrderTaxLocationRequest"]:c12(),["OrderTaxUpdateRequest"]:c13(),["SharedCodec104"]:c14(),["SharedCodec481"]:c15(),["SharedCodec482"]:c16(),["SharedCodec483"]:c17(),["SharedCodec486"]:c18(),["SharedCodec487"]:c19(),["SharedCodec488"]:c20(),["TaxCalculationRequest"]:c21(),["TaxComponentRequest"]:c22(),["TaxJurisdiction"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
