import { d8719 as c0, d8720 as c1, d8721 as c4, d8722 as c5, d8723 as c6 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c2 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c3 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10716 as c7, d10715 as c33 } from '../descriptors/data/509.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1618 as c8 } from '../descriptors/data/81.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10723 as c9, d10724 as c10, d10725 as c11, d10726 as c12, d10727 as c13 } from '../descriptors/data/510.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10641 as c14, d10642 as c15, d10644 as c23, d10645 as c24 } from '../descriptors/data/504.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10574 as c16, d10577 as c18, d10578 as c19, d10579 as c20 } from '../descriptors/data/500.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8831 as c17 } from '../descriptors/data/396.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10732 as c21, d10733 as c22 } from '../descriptors/data/511.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10646 as c25, d10647 as c26, d10648 as c27, d10649 as c28, d10650 as c29, d10651 as c30, d10652 as c32 } from '../descriptors/data/505.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9147 as c31 } from '../descriptors/data/414.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1618 as d1618 } from '../descriptors/data/81.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1618;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ProcessExistingReturnRequest"]:c8(),["ReturnProcessDecision"]:c9(),["ReturnProcessDispositionRequest"]:c10(),["ReturnProcessInspectionRequest"]:c11(),["ReturnProcessReceiptRequest"]:c12(),["ReturnProcessResolutionRequest"]:c13(),["ReturnReplacementLineItemRequest"]:c14(),["ReturnReplacementTaxRequest"]:c15(),["ReturnSourceSystemRequest"]:c16(),["SharedCodec190"]:c17(),["SharedCodec2680"]:c18(),["SharedCodec2681"]:c19(),["SharedCodec2682"]:c20(),["SharedCodec2703"]:c21(),["SharedCodec2704"]:c22(),["SharedCodec2778"]:c23(),["SharedCodec2779"]:c24(),["SharedCodec2780"]:c25(),["SharedCodec2781"]:c26(),["SharedCodec2782"]:c27(),["SharedCodec2784"]:c28(),["SharedCodec2785"]:c29(),["SharedCodec2786"]:c30(),["SharedCodec451"]:c31(),["SharedCodec554"]:c32(),["SharedCodec560"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
