import { d8717 as c0, d8718 as c1, d8719 as c4 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c2 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c3 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8720 as c5, d8721 as c6 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10711 as c7, d10710 as c26 } from '../descriptors/data/508.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10718 as c8, d10719 as c9, d10720 as c10, d10722 as c11 } from '../descriptors/data/509.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10636 as c12, d10637 as c13, d10639 as c17, d10640 as c18, d10641 as c19, d10642 as c20, d10643 as c21, d10644 as c22, d10645 as c23, d10646 as c24, d10647 as c25 } from '../descriptors/data/503.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8829 as c14 } from '../descriptors/data/395.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10727 as c15, d10728 as c16 } from '../descriptors/data/510.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10711 as d10711 } from '../descriptors/data/508.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10711;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ReturnProcessDecision"]:c8(),["ReturnProcessDispositionRequest"]:c9(),["ReturnProcessInspectionRequest"]:c10(),["ReturnProcessResolutionRequest"]:c11(),["ReturnReplacementLineItemRequest"]:c12(),["ReturnReplacementTaxRequest"]:c13(),["SharedCodec190"]:c14(),["SharedCodec2702"]:c15(),["SharedCodec2703"]:c16(),["SharedCodec2776"]:c17(),["SharedCodec2777"]:c18(),["SharedCodec2778"]:c19(),["SharedCodec2779"]:c20(),["SharedCodec2780"]:c21(),["SharedCodec2782"]:c22(),["SharedCodec2783"]:c23(),["SharedCodec2784"]:c24(),["SharedCodec554"]:c25(),["SharedCodec560"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
