import { d3778 as c0 } from '../descriptors/data/157.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3748 as c1, d3749 as c2, d3750 as c3 } from '../descriptors/data/156.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2456 as c4 } from '../descriptors/data/97.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2456 as d2456 } from '../descriptors/data/97.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2456;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppPermissionManifestEntry"]:c0(),["SharedCodec1201"]:c1(),["SharedCodec1202"]:c2(),["SharedCodec1203"]:c3(),["UpdatePartnerAppRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
