import { d3987 as c0 } from '../descriptors/data/169.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3987 as d3987 } from '../descriptors/data/169.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3987;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentSetLineRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentSetLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
