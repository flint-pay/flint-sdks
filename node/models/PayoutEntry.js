import { d2021 as c0, d40 as c1 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2021 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2021;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PayoutEntry"]:c0(),["SharedCodec5"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
