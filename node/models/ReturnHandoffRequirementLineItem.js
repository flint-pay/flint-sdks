import { d2174 as c0, d2269 as c1 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2174 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnHandoffRequirementLineItem"]:c0(),["ReturnShipmentLineItemAllocation"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnHandoffRequirementLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
