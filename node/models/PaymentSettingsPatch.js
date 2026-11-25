import { d10932 as c0 } from '../descriptors/data/520.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10932 as d10932 } from '../descriptors/data/520.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10932;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSettingsPatch"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
