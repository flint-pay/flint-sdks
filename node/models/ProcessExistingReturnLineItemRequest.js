import { d8719 as c0, d8720 as c1, d8721 as c4, d8722 as c5, d8723 as c6 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c2 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c3 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10716 as c7, d10715 as c26 } from '../descriptors/data/509.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10723 as c8, d10724 as c9, d10725 as c10, d10727 as c11 } from '../descriptors/data/510.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10641 as c12, d10642 as c13, d10644 as c17, d10645 as c18 } from '../descriptors/data/504.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8831 as c14 } from '../descriptors/data/396.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10732 as c15, d10733 as c16 } from '../descriptors/data/511.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10646 as c19, d10647 as c20, d10648 as c21, d10649 as c22, d10650 as c23, d10651 as c24, d10652 as c25 } from '../descriptors/data/505.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10716 as d10716 } from '../descriptors/data/509.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10716;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ReturnProcessDecision"]:c8(),["ReturnProcessDispositionRequest"]:c9(),["ReturnProcessInspectionRequest"]:c10(),["ReturnProcessResolutionRequest"]:c11(),["ReturnReplacementLineItemRequest"]:c12(),["ReturnReplacementTaxRequest"]:c13(),["SharedCodec190"]:c14(),["SharedCodec2703"]:c15(),["SharedCodec2704"]:c16(),["SharedCodec2778"]:c17(),["SharedCodec2779"]:c18(),["SharedCodec2780"]:c19(),["SharedCodec2781"]:c20(),["SharedCodec2782"]:c21(),["SharedCodec2784"]:c22(),["SharedCodec2785"]:c23(),["SharedCodec2786"]:c24(),["SharedCodec554"]:c25(),["SharedCodec560"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
