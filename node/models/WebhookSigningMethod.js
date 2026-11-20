import { d8802 as c0 } from '../descriptors/data/394.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8802 as d8802 } from '../descriptors/data/394.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8802;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WebhookSigningMethod"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookSigningMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
