import { d10154 as c0 } from '../descriptors/data/467.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10154 as d10154 } from '../descriptors/data/467.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkResolvePrefillRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkResolvePrefillRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
