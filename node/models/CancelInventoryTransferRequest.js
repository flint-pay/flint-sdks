import { d141 as c0 } from '../descriptors/data/7.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9240 as c1 } from '../descriptors/data/418.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9160 as c2, d9156 as c3, d9157 as c4, d9158 as c5, d9161 as c8, d9162 as c9, d9163 as c10, d9159 as c11 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9257 as c6, d9258 as c7 } from '../descriptors/data/420.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d141 as d141 } from '../descriptors/data/7.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1391"]:c3(),["SharedCodec1392"]:c4(),["SharedCodec1393"]:c5(),["SharedCodec208"]:c6(),["SharedCodec209"]:c7(),["SharedCodec452"]:c8(),["SharedCodec453"]:c9(),["SharedCodec454"]:c10(),["SharedCodec455"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
