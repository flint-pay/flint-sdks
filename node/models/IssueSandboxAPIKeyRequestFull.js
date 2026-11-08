import { d902 as c0 } from '../descriptors/data/42.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8154 as c1, d8155 as c2 } from '../descriptors/data/392.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d902 as d902 } from '../descriptors/data/42.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d902;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueSandboxAPIKeyRequestFull"]:c0(),["SharedCodec369"]:c1(),["SharedCodec370"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueSandboxAPIKeyRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
