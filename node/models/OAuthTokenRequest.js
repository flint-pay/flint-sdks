import { d1293 as c0 } from '../descriptors/data/64.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9932 as c1, d9933 as c2, d9934 as c3, d9935 as c4, d9936 as c5, d9937 as c6, d9938 as c7, d9939 as c8 } from '../descriptors/data/460.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9940 as c9, d9941 as c10 } from '../descriptors/data/461.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1293 as d1293 } from '../descriptors/data/64.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1874"]:c1(),["SharedCodec1875"]:c2(),["SharedCodec1876"]:c3(),["SharedCodec1877"]:c4(),["SharedCodec1878"]:c5(),["SharedCodec1879"]:c6(),["SharedCodec1880"]:c7(),["SharedCodec1881"]:c8(),["SharedCodec1882"]:c9(),["SharedCodec1883"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
