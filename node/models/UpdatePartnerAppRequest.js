import { d3793 as c0 } from '../descriptors/data/158.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3763 as c1, d3764 as c2, d3765 as c3 } from '../descriptors/data/157.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2466 as c4 } from '../descriptors/data/99.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2466 as d2466 } from '../descriptors/data/99.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2466;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppPermissionManifestEntry"]:c0(),["SharedCodec1212"]:c1(),["SharedCodec1213"]:c2(),["SharedCodec1214"]:c3(),["UpdatePartnerAppRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
