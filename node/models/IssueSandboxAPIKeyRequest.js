import { d901 as c0 } from '../descriptors/data/42.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8154 as c1, d8155 as c2, d8159 as c3, d8160 as c4, d8161 as c5 } from '../descriptors/data/392.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d901 as d901 } from '../descriptors/data/42.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d901;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueSandboxAPIKeyRequest"]:c0(),["SharedCodec369"]:c1(),["SharedCodec370"]:c2(),["SharedCodec939"]:c3(),["SharedCodec940"]:c4(),["SharedCodec941"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueSandboxAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
