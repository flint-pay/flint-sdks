import { d9645 as c0, d9647 as c9, d9649 as c10, d9664 as c14, d9653 as c16, d9655 as c17, d9656 as c18, d9657 as c19, d9662 as c34, d9665 as c35 } from '../descriptors/data/440.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d385 as c1 } from '../descriptors/data/23.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10568 as c2 } from '../descriptors/data/493.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8684 as c3, d8685 as c4, d8686 as c6, d8687 as c7, d8688 as c8 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c5 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10586 as c11, d10587 as c12, d10582 as c13, d10589 as c20, d10590 as c21, d10591 as c22, d10592 as c23, d10593 as c24, d10594 as c25, d10595 as c26, d10596 as c27, d10597 as c28, d10583 as c30, d10584 as c32, d10585 as c33 } from '../descriptors/data/495.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8794 as c15 } from '../descriptors/data/389.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10580 as c29, d10581 as c31 } from '../descriptors/data/494.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d385 as d385 } from '../descriptors/data/23.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d385;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestEligibility"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["OrderDraftLineItemTaxCalculationRequestModel"]:c6(),["OrderDraftTaxComponentRequestModel"]:c7(),["OrderDraftTaxJurisdictionRequestModel"]:c8(),["ReturnEligibilityLineItemRequestModel"]:c9(),["ReturnEligibilitySelectionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnReplacementTaxRequest"]:c12(),["ReturnResolutionAdjustmentRequest"]:c13(),["ReturnResolutionLineItemRequest"]:c14(),["SharedCodec190"]:c15(),["SharedCodec2669"]:c16(),["SharedCodec2671"]:c17(),["SharedCodec2672"]:c18(),["SharedCodec2673"]:c19(),["SharedCodec2777"]:c20(),["SharedCodec2778"]:c21(),["SharedCodec2779"]:c22(),["SharedCodec2780"]:c23(),["SharedCodec2781"]:c24(),["SharedCodec2783"]:c25(),["SharedCodec2784"]:c26(),["SharedCodec2785"]:c27(),["SharedCodec551"]:c28(),["SharedCodec552"]:c29(),["SharedCodec553"]:c30(),["SharedCodec554"]:c31(),["SharedCodec555"]:c32(),["SharedCodec556"]:c33(),["SharedCodec95"]:c34(),["SharedCodec98"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
