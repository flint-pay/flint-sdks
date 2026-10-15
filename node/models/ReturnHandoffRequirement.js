import { d66 as c0, d2193 as c1, d2194 as c2, d2289 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2194 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2194;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PostalAddress"]:c0(),["ReturnHandoffDestination"]:c1(),["ReturnHandoffRequirement"]:c2(),["ReturnShipmentLineItemAllocation"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnHandoffRequirement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
