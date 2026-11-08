import { d973 as c0 } from '../descriptors/data/45.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7296 as c1, d7297 as c2, d7298 as c3, d7299 as c4, d7300 as c5 } from '../descriptors/data/340.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7301 as c6, d7302 as c7, d7303 as c8, d7304 as c9, d7305 as c10 } from '../descriptors/data/341.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d973 as d973 } from '../descriptors/data/45.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d973;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec973"]:c1(),["SharedCodec974"]:c2(),["SharedCodec975"]:c3(),["SharedCodec976"]:c4(),["SharedCodec977"]:c5(),["SharedCodec978"]:c6(),["SharedCodec979"]:c7(),["SharedCodec980"]:c8(),["SharedCodec981"]:c9(),["SharedCodec982"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
