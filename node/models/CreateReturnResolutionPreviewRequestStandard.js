import { d394 as c0 } from '../descriptors/data/24.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8685 as c1, d8686 as c2, d8687 as c4, d8688 as c5, d8689 as c6 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c3 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10589 as c7, d10590 as c8, d10585 as c9, d10592 as c12, d10593 as c13, d10594 as c14, d10595 as c15, d10596 as c16, d10597 as c17, d10598 as c18, d10599 as c19, d10600 as c20, d10586 as c21 } from '../descriptors/data/497.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9666 as c10, d9667 as c22 } from '../descriptors/data/442.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8797 as c11 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d394 as d394 } from '../descriptors/data/24.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ReturnReplacementLineItemRequest"]:c7(),["ReturnReplacementTaxRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec190"]:c11(),["SharedCodec2777"]:c12(),["SharedCodec2778"]:c13(),["SharedCodec2779"]:c14(),["SharedCodec2780"]:c15(),["SharedCodec2781"]:c16(),["SharedCodec2783"]:c17(),["SharedCodec2784"]:c18(),["SharedCodec2785"]:c19(),["SharedCodec553"]:c20(),["SharedCodec555"]:c21(),["SharedCodec98"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
