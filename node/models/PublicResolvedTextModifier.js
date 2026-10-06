import { d2090 as c0, d2379 as c1 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2090 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2090;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicResolvedTextModifier"]:c0(),["TextModifierConfigRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedTextModifier(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
