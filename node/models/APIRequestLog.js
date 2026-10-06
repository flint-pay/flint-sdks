import { d21 as c0, d24 as c1, d28 as c2, d20 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d21 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d21;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLog"]:c0(),["ApiRequestLogExpansionShape"]:c1(),["ApiRequestLogResponseShapeMetadata"]:c2(),["SharedCodec2"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLog(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
