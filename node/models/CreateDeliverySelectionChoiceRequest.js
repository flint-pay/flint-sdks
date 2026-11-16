import { d6702 as c0, d6706 as c1 } from '../descriptors/data/310.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6702 as d6702 } from '../descriptors/data/310.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6702;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliverySelectionChoiceRequest"]:c0(),["DeliverySelectionInstructionsRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionChoiceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
