import { d978 as c0 } from '../descriptors/data/46.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7296 as c1, d7297 as c2, d7298 as c3, d7299 as c4 } from '../descriptors/data/340.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7305 as c5 } from '../descriptors/data/341.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d978 as d978 } from '../descriptors/data/46.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d978;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestTokenExchange"]:c0(),["SharedCodec973"]:c1(),["SharedCodec974"]:c2(),["SharedCodec975"]:c3(),["SharedCodec976"]:c4(),["SharedCodec982"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestTokenExchange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
