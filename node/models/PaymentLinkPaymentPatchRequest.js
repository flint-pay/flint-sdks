import { d10197 as c0 } from '../descriptors/data/476.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10197 as d10197 } from '../descriptors/data/476.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkPaymentPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkPaymentPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
