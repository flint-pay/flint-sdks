import { d1740 as c0 } from '../descriptors/data/86.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9221 as c1, d9222 as c2 } from '../descriptors/data/418.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1740 as d1740 } from '../descriptors/data/86.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReleaseInventoryReservationRequest"]:c0(),["SharedCodec2583"]:c1(),["SharedCodec2584"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReleaseInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
