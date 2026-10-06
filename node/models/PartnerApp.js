import { d1934 as c0, d1939 as c1 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1934 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1934;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerApp"]:c0(),["PartnerAppPermissionManifestEntry"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerApp(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
