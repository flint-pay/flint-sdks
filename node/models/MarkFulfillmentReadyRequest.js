import { d1230 as c0 } from '../descriptors/data/61.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1230 as d1230 } from '../descriptors/data/61.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkFulfillmentReadyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkFulfillmentReadyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
