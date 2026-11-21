import { d305 as c0 } from '../descriptors/data/15.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9130 as c1, d9135 as c6, d9136 as c7, d9137 as c8, d9138 as c9, d9139 as c10 } from '../descriptors/data/413.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9160 as c2, d9156 as c3, d9157 as c4, d9158 as c5, d9161 as c11, d9162 as c12, d9163 as c13, d9159 as c14 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d305 as d305 } from '../descriptors/data/15.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1391"]:c3(),["SharedCodec1392"]:c4(),["SharedCodec1393"]:c5(),["SharedCodec1394"]:c6(),["SharedCodec1395"]:c7(),["SharedCodec1396"]:c8(),["SharedCodec1397"]:c9(),["SharedCodec1398"]:c10(),["SharedCodec452"]:c11(),["SharedCodec453"]:c12(),["SharedCodec454"]:c13(),["SharedCodec455"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
