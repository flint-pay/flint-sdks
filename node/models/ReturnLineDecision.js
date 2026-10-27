import { d4965 as c0 } from '../descriptors/data/226.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4977 as c1, d4978 as c2 } from '../descriptors/data/228.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4965 as d4965 } from '../descriptors/data/226.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4965;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec1078"]:c1(),["SharedCodec1079"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
