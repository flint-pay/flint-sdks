import { d5622 as c0, d5623 as c2, d5624 as c3, d5625 as c4 } from '../descriptors/data/245.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5640 as c1, d5638 as c6, d5639 as c7 } from '../descriptors/data/246.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5580 as c5 } from '../descriptors/data/243.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5417 as c8 } from '../descriptors/data/232.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5417 as d5417 } from '../descriptors/data/232.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5417;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1557"]:c0(),["SharedCodec1558"]:c1(),["SharedCodec1559"]:c2(),["SharedCodec1560"]:c3(),["SharedCodec163"]:c4(),["SharedCodec3"]:c5(),["SharedCodec372"]:c6(),["SharedCodec373"]:c7(),["UpdateAPIKeyRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
