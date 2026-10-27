import { d936 as c0 } from '../descriptors/data/42.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3696 as c1, d3697 as c2 } from '../descriptors/data/153.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d936 as d936 } from '../descriptors/data/42.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d936;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetLocationGeography"]:c0(),["SharedCodec1115"]:c1(),["SharedCodec1116"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetLocationGeography(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
