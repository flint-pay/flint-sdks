import { d8684 as c0, d8685 as c1, d8686 as c4, d8687 as c5, d8688 as c6 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c2 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c3 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10661 as c7, d10660 as c33 } from '../descriptors/data/500.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1619 as c8 } from '../descriptors/data/81.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10668 as c9, d10669 as c10, d10670 as c11, d10671 as c12, d10672 as c13 } from '../descriptors/data/501.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10586 as c14, d10587 as c15, d10589 as c23, d10590 as c24, d10591 as c25, d10592 as c26, d10593 as c27, d10594 as c28, d10595 as c29, d10596 as c30, d10597 as c32 } from '../descriptors/data/495.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10519 as c16, d10522 as c18, d10523 as c19 } from '../descriptors/data/490.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8794 as c17 } from '../descriptors/data/389.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10524 as c20 } from '../descriptors/data/491.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10677 as c21, d10678 as c22 } from '../descriptors/data/502.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9111 as c31 } from '../descriptors/data/407.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1619 as d1619 } from '../descriptors/data/81.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1619;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ProcessExistingReturnRequest"]:c8(),["ReturnProcessDecision"]:c9(),["ReturnProcessDispositionRequest"]:c10(),["ReturnProcessInspectionRequest"]:c11(),["ReturnProcessReceiptRequest"]:c12(),["ReturnProcessResolutionRequest"]:c13(),["ReturnReplacementLineItemRequest"]:c14(),["ReturnReplacementTaxRequest"]:c15(),["ReturnSourceSystemRequest"]:c16(),["SharedCodec190"]:c17(),["SharedCodec2680"]:c18(),["SharedCodec2681"]:c19(),["SharedCodec2682"]:c20(),["SharedCodec2703"]:c21(),["SharedCodec2704"]:c22(),["SharedCodec2777"]:c23(),["SharedCodec2778"]:c24(),["SharedCodec2779"]:c25(),["SharedCodec2780"]:c26(),["SharedCodec2781"]:c27(),["SharedCodec2783"]:c28(),["SharedCodec2784"]:c29(),["SharedCodec2785"]:c30(),["SharedCodec450"]:c31(),["SharedCodec551"]:c32(),["SharedCodec557"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
