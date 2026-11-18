import { d394 as c0 } from '../descriptors/data/24.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8684 as c1, d8685 as c2, d8686 as c4, d8687 as c5, d8688 as c6 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c3 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10586 as c7, d10587 as c8, d10582 as c9, d10589 as c12, d10590 as c13, d10591 as c14, d10592 as c15, d10593 as c16, d10594 as c17, d10595 as c18, d10596 as c19, d10597 as c20, d10583 as c21 } from '../descriptors/data/495.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9664 as c10, d9665 as c22 } from '../descriptors/data/440.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8794 as c11 } from '../descriptors/data/389.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d394 as d394 } from '../descriptors/data/24.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ReturnReplacementLineItemRequest"]:c7(),["ReturnReplacementTaxRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec190"]:c11(),["SharedCodec2777"]:c12(),["SharedCodec2778"]:c13(),["SharedCodec2779"]:c14(),["SharedCodec2780"]:c15(),["SharedCodec2781"]:c16(),["SharedCodec2783"]:c17(),["SharedCodec2784"]:c18(),["SharedCodec2785"]:c19(),["SharedCodec551"]:c20(),["SharedCodec553"]:c21(),["SharedCodec98"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
