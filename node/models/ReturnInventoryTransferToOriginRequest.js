import { d9240 as c0 } from '../descriptors/data/418.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9160 as c1, d9156 as c3, d9157 as c4, d9158 as c5, d9161 as c8, d9162 as c9, d9163 as c10, d9159 as c11 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1817 as c2 } from '../descriptors/data/89.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9267 as c6, d9268 as c7 } from '../descriptors/data/420.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1817 as d1817 } from '../descriptors/data/89.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1817;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReturnInventoryTransferToOriginRequest"]:c2(),["SharedCodec1391"]:c3(),["SharedCodec1392"]:c4(),["SharedCodec1393"]:c5(),["SharedCodec2709"]:c6(),["SharedCodec2710"]:c7(),["SharedCodec452"]:c8(),["SharedCodec453"]:c9(),["SharedCodec454"]:c10(),["SharedCodec455"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInventoryTransferToOriginRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
