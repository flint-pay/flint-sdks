import { d9647 as c0, d9649 as c9, d9651 as c10, d9655 as c16, d9657 as c17, d9658 as c18, d9659 as c19 } from '../descriptors/data/441.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d386 as c1 } from '../descriptors/data/23.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10571 as c2, d10583 as c29 } from '../descriptors/data/496.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8685 as c3, d8686 as c4, d8687 as c6, d8688 as c7, d8689 as c8 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c5 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10589 as c11, d10590 as c12, d10585 as c13, d10592 as c20, d10593 as c21, d10594 as c22, d10595 as c23, d10596 as c24, d10597 as c25, d10598 as c26, d10599 as c27, d10600 as c28, d10586 as c30, d10584 as c31, d10587 as c32, d10588 as c33 } from '../descriptors/data/497.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9666 as c14, d9665 as c34, d9667 as c35 } from '../descriptors/data/442.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8797 as c15 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d386 as d386 } from '../descriptors/data/23.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d386;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestResolution"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["OrderDraftLineItemTaxCalculationRequestModel"]:c6(),["OrderDraftTaxComponentRequestModel"]:c7(),["OrderDraftTaxJurisdictionRequestModel"]:c8(),["ReturnEligibilityLineItemRequestModel"]:c9(),["ReturnEligibilitySelectionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnReplacementTaxRequest"]:c12(),["ReturnResolutionAdjustmentRequest"]:c13(),["ReturnResolutionLineItemRequest"]:c14(),["SharedCodec190"]:c15(),["SharedCodec2669"]:c16(),["SharedCodec2671"]:c17(),["SharedCodec2672"]:c18(),["SharedCodec2673"]:c19(),["SharedCodec2777"]:c20(),["SharedCodec2778"]:c21(),["SharedCodec2779"]:c22(),["SharedCodec2780"]:c23(),["SharedCodec2781"]:c24(),["SharedCodec2783"]:c25(),["SharedCodec2784"]:c26(),["SharedCodec2785"]:c27(),["SharedCodec553"]:c28(),["SharedCodec554"]:c29(),["SharedCodec555"]:c30(),["SharedCodec556"]:c31(),["SharedCodec557"]:c32(),["SharedCodec558"]:c33(),["SharedCodec97"]:c34(),["SharedCodec98"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
