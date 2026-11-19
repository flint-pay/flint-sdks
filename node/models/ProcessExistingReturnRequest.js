import { d8685 as c0, d8686 as c1, d8687 as c4, d8688 as c5, d8689 as c6 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c2 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c3 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10664 as c7, d10663 as c33 } from '../descriptors/data/502.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1617 as c8 } from '../descriptors/data/81.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10671 as c9, d10672 as c10, d10673 as c11, d10674 as c12, d10675 as c13 } from '../descriptors/data/503.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10589 as c14, d10590 as c15, d10592 as c23, d10593 as c24, d10594 as c25, d10595 as c26, d10596 as c27, d10597 as c28, d10598 as c29, d10599 as c30, d10600 as c32 } from '../descriptors/data/497.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10522 as c16, d10525 as c18, d10526 as c19, d10527 as c20 } from '../descriptors/data/493.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8797 as c17 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10680 as c21, d10681 as c22 } from '../descriptors/data/504.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9112 as c31 } from '../descriptors/data/408.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1617 as d1617 } from '../descriptors/data/81.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1617;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ProcessExistingReturnRequest"]:c8(),["ReturnProcessDecision"]:c9(),["ReturnProcessDispositionRequest"]:c10(),["ReturnProcessInspectionRequest"]:c11(),["ReturnProcessReceiptRequest"]:c12(),["ReturnProcessResolutionRequest"]:c13(),["ReturnReplacementLineItemRequest"]:c14(),["ReturnReplacementTaxRequest"]:c15(),["ReturnSourceSystemRequest"]:c16(),["SharedCodec190"]:c17(),["SharedCodec2680"]:c18(),["SharedCodec2681"]:c19(),["SharedCodec2682"]:c20(),["SharedCodec2703"]:c21(),["SharedCodec2704"]:c22(),["SharedCodec2777"]:c23(),["SharedCodec2778"]:c24(),["SharedCodec2779"]:c25(),["SharedCodec2780"]:c26(),["SharedCodec2781"]:c27(),["SharedCodec2783"]:c28(),["SharedCodec2784"]:c29(),["SharedCodec2785"]:c30(),["SharedCodec451"]:c31(),["SharedCodec553"]:c32(),["SharedCodec559"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
