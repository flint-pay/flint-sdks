import { d3025 as c0 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3025 as d3025 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3025;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnShipmentLineItemAllocation"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnShipmentLineItemAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
