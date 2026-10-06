import { d16 as c0, d761 as c1, d15 as c2, d14 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d761 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIKey"]:c0(),["DeveloperSandboxWithAPIKey"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperSandboxWithAPIKey(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
