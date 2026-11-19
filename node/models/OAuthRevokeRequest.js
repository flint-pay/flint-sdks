import { d1288 as c0 } from '../descriptors/data/63.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9790 as c1, d9791 as c2, d9792 as c3, d9793 as c4 } from '../descriptors/data/449.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1288 as d1288 } from '../descriptors/data/63.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthRevokeRequest"]:c0(),["SharedCodec1843"]:c1(),["SharedCodec1844"]:c2(),["SharedCodec1845"]:c3(),["SharedCodec1846"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthRevokeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
