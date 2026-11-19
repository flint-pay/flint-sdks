import { d8685 as c0, d8686 as c1, d8687 as c3, d8688 as c4, d8689 as c5 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10590 as c6, d10592 as c8, d10593 as c9, d10594 as c10, d10595 as c11, d10596 as c12 } from '../descriptors/data/497.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8797 as c7 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10632 as c13, d10633 as c14, d10634 as c15 } from '../descriptors/data/500.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10657 as c16 } from '../descriptors/data/501.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10657 as d10657 } from '../descriptors/data/501.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10657;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementTaxRequest"]:c6(),["SharedCodec190"]:c7(),["SharedCodec2777"]:c8(),["SharedCodec2778"]:c9(),["SharedCodec2779"]:c10(),["SharedCodec2780"]:c11(),["SharedCodec2781"]:c12(),["SharedCodec3170"]:c13(),["SharedCodec3171"]:c14(),["SharedCodec3172"]:c15(),["UpdateReturnReplacementLineItemRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
