import { d1289 as c0 } from '../descriptors/data/64.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9790 as c1, d9791 as c2, d9792 as c3, d9793 as c4, d9794 as c5, d9795 as c6, d9796 as c7 } from '../descriptors/data/449.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9797 as c8, d9798 as c9, d9799 as c10 } from '../descriptors/data/450.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1289 as d1289 } from '../descriptors/data/64.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1289;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1843"]:c1(),["SharedCodec1844"]:c2(),["SharedCodec1845"]:c3(),["SharedCodec1846"]:c4(),["SharedCodec1847"]:c5(),["SharedCodec1848"]:c6(),["SharedCodec1849"]:c7(),["SharedCodec1850"]:c8(),["SharedCodec1851"]:c9(),["SharedCodec1852"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
