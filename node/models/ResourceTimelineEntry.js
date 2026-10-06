import { d2154 as c0, d20 as c1, d937 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2154 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceTimelineEntry"]:c0(),["SharedCodec2"]:c1(),["SharedCodec287"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
