import { d9240 as c0 } from '../descriptors/data/418.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9160 as c1, d9156 as c2, d9157 as c3, d9158 as c4, d9161 as c5, d9162 as c6, d9163 as c7, d9159 as c8 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9240 as d9240 } from '../descriptors/data/418.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec1391"]:c2(),["SharedCodec1392"]:c3(),["SharedCodec1393"]:c4(),["SharedCodec452"]:c5(),["SharedCodec453"]:c6(),["SharedCodec454"]:c7(),["SharedCodec455"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
