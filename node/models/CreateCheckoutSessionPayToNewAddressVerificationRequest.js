import { d211 as c0 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d211 as d211 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d211;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionPayToNewAddressVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionPayToNewAddressVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
