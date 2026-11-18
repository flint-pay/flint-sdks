import { d8684 as c0, d8685 as c1, d8686 as c3, d8687 as c4, d8688 as c5 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c2 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10587 as c6, d10589 as c8, d10590 as c9, d10591 as c10, d10592 as c11, d10593 as c12 } from '../descriptors/data/495.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8794 as c7 } from '../descriptors/data/389.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8015 as c13 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8111 as c14 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8358 as c15 } from '../descriptors/data/365.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10629 as c16, d10630 as c17 } from '../descriptors/data/497.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10631 as c18, d10632 as c19, d10633 as c20 } from '../descriptors/data/498.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10654 as c21, d10655 as c22, d10656 as c23 } from '../descriptors/data/499.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7790 as c24 } from '../descriptors/data/328.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7790 as d7790 } from '../descriptors/data/328.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7790;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementTaxRequest"]:c6(),["SharedCodec190"]:c7(),["SharedCodec2777"]:c8(),["SharedCodec2778"]:c9(),["SharedCodec2779"]:c10(),["SharedCodec2780"]:c11(),["SharedCodec2781"]:c12(),["SharedCodec3072"]:c13(),["SharedCodec3075"]:c14(),["SharedCodec3076"]:c15(),["SharedCodec3170"]:c16(),["SharedCodec3171"]:c17(),["SharedCodec3172"]:c18(),["SharedCodec3173"]:c19(),["SharedCodec3174"]:c20(),["UpdateReturnReplacementLineItemRequest"]:c21(),["UpdateReturnResolutionAdjustmentRequest"]:c22(),["UpdateReturnResolutionLineItemRequest"]:c23(),["UpdateReturnResolutionRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
