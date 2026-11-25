import { d8003 as c0 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10168 as c1 } from '../descriptors/data/473.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10168 as d10168 } from '../descriptors/data/473.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPlatformProfileRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppPlatformProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
