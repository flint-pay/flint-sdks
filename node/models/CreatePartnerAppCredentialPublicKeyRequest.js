import { d265 as c0 } from '../descriptors/data/14.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6223 as c1 } from '../descriptors/data/288.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d265 as d265 } from '../descriptors/data/14.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialPublicKeyRequest"]:c0(),["PartnerAppCredentialPublicKeyRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialPublicKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
