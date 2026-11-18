import { d563 as c0 } from '../descriptors/data/32.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d563 as d563 } from '../descriptors/data/32.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d563;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInventoryAssignmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInventoryAssignmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
