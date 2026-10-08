import { d323 as c0, d1894 as c1, d1895 as c2, d1897 as c3, d1899 as c4, d1900 as c5, d1901 as c6, d1902 as c7, d1903 as c8, d1904 as c9, d1905 as c10, d1908 as c11, d336 as c12, d1891 as c13, d1893 as c14, d1892 as c15, d1907 as c16, d1906 as c17 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1908 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1908;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxCalculationRequest"]:c1(),["OrderTaxComponentRequest"]:c2(),["OrderTaxJurisdictionRequest"]:c3(),["OrderTaxLocationFullAddressRequest"]:c4(),["OrderTaxLocationInputFullAddress"]:c5(),["OrderTaxLocationInputInferredFullAddress"]:c6(),["OrderTaxLocationInputInferredPostalCode"]:c7(),["OrderTaxLocationInputPostalCode"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxRequest"]:c11(),["SharedCodec104"]:c12(),["SharedCodec479"]:c13(),["SharedCodec480"]:c14(),["SharedCodec481"]:c15(),["SharedCodec482"]:c16(),["SharedCodec483"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
