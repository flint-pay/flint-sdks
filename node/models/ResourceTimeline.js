import { d2153 as c0, d2154 as c1, d20 as c2, d937 as c3, d2152 as c4 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2153 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceTimeline"]:c0(),["ResourceTimelineEntry"]:c1(),["SharedCodec2"]:c2(),["SharedCodec287"]:c3(),["SharedCodec544"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimeline(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
