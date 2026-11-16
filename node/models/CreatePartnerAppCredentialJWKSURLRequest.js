import { d312 as c0 } from '../descriptors/data/18.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8690 as c1 } from '../descriptors/data/411.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d312 as d312 } from '../descriptors/data/18.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialJWKSURLRequest"]:c0(),["PartnerAppCredentialJWKSURLRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialJWKSURLRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
