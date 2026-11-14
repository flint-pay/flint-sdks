import { d7998 as c0 } from '../descriptors/data/387.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7998 as d7998 } from '../descriptors/data/387.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7998;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkResolvePrefillRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkResolvePrefillRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
