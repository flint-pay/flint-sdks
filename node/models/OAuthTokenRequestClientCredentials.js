import { d1293 as c0 } from '../descriptors/data/64.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9847 as c1, d9848 as c2, d9849 as c3, d9850 as c4 } from '../descriptors/data/456.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1293 as d1293 } from '../descriptors/data/64.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestClientCredentials"]:c0(),["SharedCodec1849"]:c1(),["SharedCodec1850"]:c2(),["SharedCodec1851"]:c3(),["SharedCodec1852"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestClientCredentials(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
