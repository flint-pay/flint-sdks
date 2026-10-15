import { d1906 as c0, d1907 as c1, d1908 as c2, d1909 as c3, d1910 as c4, d1911 as c5, d1912 as c6 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1912 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1912;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationInputFullAddress"]:c1(),["OrderTaxLocationInputInferredFullAddress"]:c2(),["OrderTaxLocationInputInferredPostalCode"]:c3(),["OrderTaxLocationInputPostalCode"]:c4(),["OrderTaxLocationPostalAddressRequest"]:c5(),["OrderTaxLocationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
