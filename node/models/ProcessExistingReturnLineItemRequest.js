import { d8685 as c0, d8686 as c1, d8687 as c4, d8688 as c5, d8689 as c6 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c2 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c3 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10664 as c7, d10663 as c26 } from '../descriptors/data/502.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10671 as c8, d10672 as c9, d10673 as c10, d10675 as c11 } from '../descriptors/data/503.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10589 as c12, d10590 as c13, d10592 as c17, d10593 as c18, d10594 as c19, d10595 as c20, d10596 as c21, d10597 as c22, d10598 as c23, d10599 as c24, d10600 as c25 } from '../descriptors/data/497.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8797 as c14 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10680 as c15, d10681 as c16 } from '../descriptors/data/504.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10664 as d10664 } from '../descriptors/data/502.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10664;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ReturnProcessDecision"]:c8(),["ReturnProcessDispositionRequest"]:c9(),["ReturnProcessInspectionRequest"]:c10(),["ReturnProcessResolutionRequest"]:c11(),["ReturnReplacementLineItemRequest"]:c12(),["ReturnReplacementTaxRequest"]:c13(),["SharedCodec190"]:c14(),["SharedCodec2703"]:c15(),["SharedCodec2704"]:c16(),["SharedCodec2777"]:c17(),["SharedCodec2778"]:c18(),["SharedCodec2779"]:c19(),["SharedCodec2780"]:c20(),["SharedCodec2781"]:c21(),["SharedCodec2783"]:c22(),["SharedCodec2784"]:c23(),["SharedCodec2785"]:c24(),["SharedCodec553"]:c25(),["SharedCodec559"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
