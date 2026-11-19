import { d8685 as c0, d8686 as c1, d8687 as c3, d8688 as c4, d8689 as c5 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10589 as c6, d10590 as c7, d10592 as c9, d10593 as c10, d10594 as c11, d10595 as c12, d10596 as c13, d10597 as c14, d10598 as c15, d10599 as c16 } from '../descriptors/data/497.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8797 as c8 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10589 as d10589 } from '../descriptors/data/497.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10589;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnReplacementTaxRequest"]:c7(),["SharedCodec190"]:c8(),["SharedCodec2777"]:c9(),["SharedCodec2778"]:c10(),["SharedCodec2779"]:c11(),["SharedCodec2780"]:c12(),["SharedCodec2781"]:c13(),["SharedCodec2783"]:c14(),["SharedCodec2784"]:c15(),["SharedCodec2785"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
