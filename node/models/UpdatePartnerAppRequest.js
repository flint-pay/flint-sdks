import { d6167 as c0 } from '../descriptors/data/285.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6170 as c1, d6171 as c2, d6172 as c3 } from '../descriptors/data/286.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4181 as c4 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4181 as d4181 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4181;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppPermissionManifestEntryRequest"]:c0(),["SharedCodec1407"]:c1(),["SharedCodec1408"]:c2(),["SharedCodec1409"]:c3(),["UpdatePartnerAppRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
