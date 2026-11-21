import { d9130 as c0, d9135 as c1, d9136 as c2, d9137 as c3, d9138 as c4, d9139 as c5 } from '../descriptors/data/413.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9130 as d9130 } from '../descriptors/data/413.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9130;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1394"]:c1(),["SharedCodec1395"]:c2(),["SharedCodec1396"]:c3(),["SharedCodec1397"]:c4(),["SharedCodec1398"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
