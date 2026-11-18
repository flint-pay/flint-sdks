import { d8779 as c0, d8783 as c1 } from '../descriptors/data/389.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8779 as d8779 } from '../descriptors/data/389.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8779;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliverySelectionChoiceRequest"]:c0(),["DeliverySelectionInstructionsRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionChoiceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
