import { d8684 as c0, d8685 as c1, d8686 as c4, d8687 as c5, d8688 as c6 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c2 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c3 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10661 as c7, d10660 as c26 } from '../descriptors/data/500.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10668 as c8, d10669 as c9, d10670 as c10, d10672 as c11 } from '../descriptors/data/501.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10586 as c12, d10587 as c13, d10589 as c17, d10590 as c18, d10591 as c19, d10592 as c20, d10593 as c21, d10594 as c22, d10595 as c23, d10596 as c24, d10597 as c25 } from '../descriptors/data/495.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8794 as c14 } from '../descriptors/data/389.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10677 as c15, d10678 as c16 } from '../descriptors/data/502.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10661 as d10661 } from '../descriptors/data/500.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10661;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ReturnProcessDecision"]:c8(),["ReturnProcessDispositionRequest"]:c9(),["ReturnProcessInspectionRequest"]:c10(),["ReturnProcessResolutionRequest"]:c11(),["ReturnReplacementLineItemRequest"]:c12(),["ReturnReplacementTaxRequest"]:c13(),["SharedCodec190"]:c14(),["SharedCodec2703"]:c15(),["SharedCodec2704"]:c16(),["SharedCodec2777"]:c17(),["SharedCodec2778"]:c18(),["SharedCodec2779"]:c19(),["SharedCodec2780"]:c20(),["SharedCodec2781"]:c21(),["SharedCodec2783"]:c22(),["SharedCodec2784"]:c23(),["SharedCodec2785"]:c24(),["SharedCodec551"]:c25(),["SharedCodec557"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
