import { d7794 as c0 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7153 as c1, d7154 as c2, d7155 as c3, d7156 as c4, d7157 as c5 } from '../descriptors/data/333.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7794 as d7794 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7794;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec1238"]:c1(),["SharedCodec1239"]:c2(),["SharedCodec1240"]:c3(),["SharedCodec1241"]:c4(),["SharedCodec1242"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
