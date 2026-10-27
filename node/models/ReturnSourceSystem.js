import { d4862 as c0, d4864 as c1, d4865 as c2, d4866 as c3 } from '../descriptors/data/219.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4011 as c4 } from '../descriptors/data/170.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4862 as d4862 } from '../descriptors/data/219.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4862;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnSourceSystem"]:c0(),["SharedCodec1075"]:c1(),["SharedCodec1076"]:c2(),["SharedCodec1077"]:c3(),["SharedCodec150"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnSourceSystem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
