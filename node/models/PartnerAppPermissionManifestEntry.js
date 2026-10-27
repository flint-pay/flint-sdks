import { d3793 as c0 } from '../descriptors/data/158.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3793 as d3793 } from '../descriptors/data/158.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3793;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppPermissionManifestEntry"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppPermissionManifestEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
