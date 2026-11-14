import { d314 as c0 } from '../descriptors/data/18.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7878 as c1 } from '../descriptors/data/378.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d314 as d314 } from '../descriptors/data/18.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialJWKSURLRequest"]:c0(),["PartnerAppCredentialJWKSURLRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialJWKSURLRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
