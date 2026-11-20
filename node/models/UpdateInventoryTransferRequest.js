import { d9257 as c0, d9258 as c1, d9259 as c2 } from '../descriptors/data/420.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7760 as c3 } from '../descriptors/data/326.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7760 as d7760 } from '../descriptors/data/326.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3102"]:c0(),["SharedCodec3103"]:c1(),["SharedCodec3104"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
