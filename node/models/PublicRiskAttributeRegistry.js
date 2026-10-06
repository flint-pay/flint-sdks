import { d2092 as c0, d2093 as c1 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2093 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2093;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicRiskAttribute"]:c0(),["PublicRiskAttributeRegistry"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicRiskAttributeRegistry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
