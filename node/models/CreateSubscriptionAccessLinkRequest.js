import { d412 as c0 } from '../descriptors/data/25.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d412 as d412 } from '../descriptors/data/25.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d412;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionAccessLinkRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionAccessLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
