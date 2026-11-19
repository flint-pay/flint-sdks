import { d8717 as c0, d8718 as c1, d8719 as c4 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c2 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c3 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8720 as c5, d8721 as c6 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10711 as c7, d10710 as c33 } from '../descriptors/data/508.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1618 as c8 } from '../descriptors/data/81.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10718 as c9, d10719 as c10, d10720 as c11, d10721 as c12, d10722 as c13 } from '../descriptors/data/509.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10636 as c14, d10637 as c15, d10639 as c23, d10640 as c24, d10641 as c25, d10642 as c26, d10643 as c27, d10644 as c28, d10645 as c29, d10646 as c30, d10647 as c32 } from '../descriptors/data/503.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10569 as c16, d10572 as c18, d10573 as c19, d10574 as c20 } from '../descriptors/data/499.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8829 as c17 } from '../descriptors/data/395.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10727 as c21, d10728 as c22 } from '../descriptors/data/510.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9145 as c31 } from '../descriptors/data/413.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1618 as d1618 } from '../descriptors/data/81.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1618;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ProcessExistingReturnRequest"]:c8(),["ReturnProcessDecision"]:c9(),["ReturnProcessDispositionRequest"]:c10(),["ReturnProcessInspectionRequest"]:c11(),["ReturnProcessReceiptRequest"]:c12(),["ReturnProcessResolutionRequest"]:c13(),["ReturnReplacementLineItemRequest"]:c14(),["ReturnReplacementTaxRequest"]:c15(),["ReturnSourceSystemRequest"]:c16(),["SharedCodec190"]:c17(),["SharedCodec2679"]:c18(),["SharedCodec2680"]:c19(),["SharedCodec2681"]:c20(),["SharedCodec2702"]:c21(),["SharedCodec2703"]:c22(),["SharedCodec2776"]:c23(),["SharedCodec2777"]:c24(),["SharedCodec2778"]:c25(),["SharedCodec2779"]:c26(),["SharedCodec2780"]:c27(),["SharedCodec2782"]:c28(),["SharedCodec2783"]:c29(),["SharedCodec2784"]:c30(),["SharedCodec451"]:c31(),["SharedCodec554"]:c32(),["SharedCodec560"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
