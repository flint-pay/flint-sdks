import { d9130 as c0, d9135 as c1, d9136 as c2, d9137 as c3, d9138 as c4, d9139 as c5 } from '../descriptors/data/413.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9130 as d9130 } from '../descriptors/data/413.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9130;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1394"]:c1(),["SharedCodec1395"]:c2(),["SharedCodec1396"]:c3(),["SharedCodec1397"]:c4(),["SharedCodec1398"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
