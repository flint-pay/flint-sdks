import { d348 as c0 } from '../descriptors/data/20.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8154 as c1, d8155 as c2, d8156 as c3, d8157 as c6, d8158 as c7 } from '../descriptors/data/392.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5638 as c4, d5639 as c5 } from '../descriptors/data/246.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d348 as d348 } from '../descriptors/data/20.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec369"]:c1(),["SharedCodec370"]:c2(),["SharedCodec371"]:c3(),["SharedCodec372"]:c4(),["SharedCodec373"]:c5(),["SharedCodec374"]:c6(),["SharedCodec375"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
