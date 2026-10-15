import { d1950 as c0, d1955 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1950 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1950;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerApp"]:c0(),["PartnerAppPermissionManifestEntry"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerApp(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
