import { d306 as c0 } from '../descriptors/data/16.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9134 as c1, d9144 as c10, d9145 as c11 } from '../descriptors/data/413.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9160 as c2, d9156 as c3, d9157 as c4, d9158 as c5, d9161 as c6, d9162 as c7, d9163 as c8, d9159 as c9, d9146 as c12 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d306 as d306 } from '../descriptors/data/16.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCorrectionRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1391"]:c3(),["SharedCodec1392"]:c4(),["SharedCodec1393"]:c5(),["SharedCodec452"]:c6(),["SharedCodec453"]:c7(),["SharedCodec454"]:c8(),["SharedCodec455"]:c9(),["SharedCodec456"]:c10(),["SharedCodec457"]:c11(),["SharedCodec458"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
