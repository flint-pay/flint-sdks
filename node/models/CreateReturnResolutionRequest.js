import { d397 as c0 } from '../descriptors/data/24.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8717 as c1, d8718 as c2, d8719 as c5 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c3 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c4 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8720 as c6, d8721 as c7 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10636 as c8, d10637 as c9, d10632 as c10, d10639 as c13, d10640 as c14, d10641 as c15, d10642 as c16, d10643 as c17, d10644 as c18, d10645 as c19, d10646 as c20, d10647 as c21, d10633 as c22, d10634 as c23, d10635 as c24 } from '../descriptors/data/503.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9707 as c11, d9708 as c28 } from '../descriptors/data/448.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8829 as c12 } from '../descriptors/data/395.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10710 as c25 } from '../descriptors/data/508.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10702 as c26, d10703 as c27 } from '../descriptors/data/507.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d397 as d397 } from '../descriptors/data/24.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d397;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["OrderDraftLineItemTaxCalculationRequestModel"]:c5(),["OrderDraftTaxComponentRequestModel"]:c6(),["OrderDraftTaxJurisdictionRequestModel"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnReplacementTaxRequest"]:c9(),["ReturnResolutionAdjustmentRequest"]:c10(),["ReturnResolutionLineItemRequest"]:c11(),["SharedCodec190"]:c12(),["SharedCodec2776"]:c13(),["SharedCodec2777"]:c14(),["SharedCodec2778"]:c15(),["SharedCodec2779"]:c16(),["SharedCodec2780"]:c17(),["SharedCodec2782"]:c18(),["SharedCodec2783"]:c19(),["SharedCodec2784"]:c20(),["SharedCodec554"]:c21(),["SharedCodec556"]:c22(),["SharedCodec558"]:c23(),["SharedCodec559"]:c24(),["SharedCodec560"]:c25(),["SharedCodec561"]:c26(),["SharedCodec562"]:c27(),["SharedCodec98"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
