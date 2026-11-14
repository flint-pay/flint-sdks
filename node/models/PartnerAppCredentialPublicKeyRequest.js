import { d7863 as c0 } from '../descriptors/data/380.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7863 as d7863 } from '../descriptors/data/380.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7863;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppCredentialPublicKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppCredentialPublicKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
