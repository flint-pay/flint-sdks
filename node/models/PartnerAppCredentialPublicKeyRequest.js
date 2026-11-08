import { d6223 as c0 } from '../descriptors/data/288.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6223 as d6223 } from '../descriptors/data/288.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6223;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppCredentialPublicKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppCredentialPublicKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
