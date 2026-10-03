import { d2135 as c0, d2230 as c1 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2135 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnHandoffRequirementLineItem"]:c0(),["ReturnShipmentLineItemAllocation"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnHandoffRequirementLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
