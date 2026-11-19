import { d9647 as c0, d9649 as c1, d9651 as c2, d9655 as c3, d9657 as c4, d9658 as c5, d9659 as c6 } from '../descriptors/data/441.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9647 as d9647 } from '../descriptors/data/441.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9647;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["ReturnEligibilityLineItemRequestModel"]:c1(),["ReturnEligibilitySelectionRequest"]:c2(),["SharedCodec2669"]:c3(),["SharedCodec2671"]:c4(),["SharedCodec2672"]:c5(),["SharedCodec2673"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
