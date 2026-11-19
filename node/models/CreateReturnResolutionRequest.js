import { d395 as c0 } from '../descriptors/data/24.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8685 as c1, d8686 as c2, d8687 as c5, d8688 as c6, d8689 as c7 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c3 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c4 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10589 as c8, d10590 as c9, d10585 as c10, d10592 as c13, d10593 as c14, d10594 as c15, d10595 as c16, d10596 as c17, d10597 as c18, d10598 as c19, d10599 as c20, d10600 as c21, d10586 as c22, d10587 as c23, d10588 as c24 } from '../descriptors/data/497.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9666 as c11, d9667 as c28 } from '../descriptors/data/442.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8797 as c12 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10663 as c25 } from '../descriptors/data/502.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10655 as c26, d10656 as c27 } from '../descriptors/data/501.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d395 as d395 } from '../descriptors/data/24.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d395;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["OrderDraftLineItemTaxCalculationRequestModel"]:c5(),["OrderDraftTaxComponentRequestModel"]:c6(),["OrderDraftTaxJurisdictionRequestModel"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnReplacementTaxRequest"]:c9(),["ReturnResolutionAdjustmentRequest"]:c10(),["ReturnResolutionLineItemRequest"]:c11(),["SharedCodec190"]:c12(),["SharedCodec2777"]:c13(),["SharedCodec2778"]:c14(),["SharedCodec2779"]:c15(),["SharedCodec2780"]:c16(),["SharedCodec2781"]:c17(),["SharedCodec2783"]:c18(),["SharedCodec2784"]:c19(),["SharedCodec2785"]:c20(),["SharedCodec553"]:c21(),["SharedCodec555"]:c22(),["SharedCodec557"]:c23(),["SharedCodec558"]:c24(),["SharedCodec559"]:c25(),["SharedCodec560"]:c26(),["SharedCodec561"]:c27(),["SharedCodec98"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
