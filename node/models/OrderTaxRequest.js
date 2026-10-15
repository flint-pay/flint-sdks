import { d323 as c0, d1901 as c1, d1902 as c2, d1904 as c3, d1906 as c4, d1907 as c5, d1908 as c6, d1909 as c7, d1910 as c8, d1911 as c9, d1912 as c10, d1915 as c11, d336 as c12, d1898 as c13, d1900 as c14, d1899 as c15, d1914 as c16, d1913 as c17 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1915 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1915;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxCalculationRequest"]:c1(),["OrderTaxComponentRequest"]:c2(),["OrderTaxJurisdictionRequest"]:c3(),["OrderTaxLocationFullAddressRequest"]:c4(),["OrderTaxLocationInputFullAddress"]:c5(),["OrderTaxLocationInputInferredFullAddress"]:c6(),["OrderTaxLocationInputInferredPostalCode"]:c7(),["OrderTaxLocationInputPostalCode"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxRequest"]:c11(),["SharedCodec104"]:c12(),["SharedCodec481"]:c13(),["SharedCodec482"]:c14(),["SharedCodec483"]:c15(),["SharedCodec484"]:c16(),["SharedCodec485"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
