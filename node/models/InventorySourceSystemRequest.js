import { d9160 as c0, d9156 as c1, d9157 as c2, d9158 as c3, d9159 as c4 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9160 as d9160 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9160;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec1391"]:c1(),["SharedCodec1392"]:c2(),["SharedCodec1393"]:c3(),["SharedCodec455"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
