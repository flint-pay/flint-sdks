import { d57 as c0 } from '../descriptors/data/2.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9417 as c1 } from '../descriptors/data/424.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9453 as c2 } from '../descriptors/data/428.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9647 as c3, d9649 as c4, d9651 as c5, d9655 as c11, d9657 as c12, d9658 as c13, d9659 as c14 } from '../descriptors/data/441.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9666 as c6, d9665 as c15, d9667 as c16 } from '../descriptors/data/442.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9479 as c7, d9480 as c8, d9481 as c9, d9482 as c10 } from '../descriptors/data/431.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d57 as d57 } from '../descriptors/data/2.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d57;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec163"]:c7(),["SharedCodec164"]:c8(),["SharedCodec165"]:c9(),["SharedCodec166"]:c10(),["SharedCodec2669"]:c11(),["SharedCodec2671"]:c12(),["SharedCodec2672"]:c13(),["SharedCodec2673"]:c14(),["SharedCodec97"]:c15(),["SharedCodec98"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
