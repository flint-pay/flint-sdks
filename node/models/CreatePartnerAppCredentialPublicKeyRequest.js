import { d260 as c0 } from '../descriptors/data/14.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6164 as c1 } from '../descriptors/data/285.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d260 as d260 } from '../descriptors/data/14.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialPublicKeyRequest"]:c0(),["PartnerAppCredentialPublicKeyRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialPublicKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
