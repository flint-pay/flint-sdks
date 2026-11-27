import { d8237 as c0, d8235 as c3, d8236 as c4 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d236 as c1 } from '../descriptors/data/10.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11208 as c2 } from '../descriptors/data/537.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d236 as d236 } from '../descriptors/data/10.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d236;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["ConnectTaxConnectionRequest"]:c1(),["SellerTaxAttestationRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConnectTaxConnectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
