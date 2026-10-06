import { d1894 as c0, d1895 as c1, d1896 as c2, d1897 as c3, d1898 as c4, d1899 as c5, d1900 as c6 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1900 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1900;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationInputFullAddress"]:c1(),["OrderTaxLocationInputInferredFullAddress"]:c2(),["OrderTaxLocationInputInferredPostalCode"]:c3(),["OrderTaxLocationInputPostalCode"]:c4(),["OrderTaxLocationPostalAddressRequest"]:c5(),["OrderTaxLocationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
