import { d9688 as c0, d9690 as c9, d9692 as c10, d9696 as c16, d9698 as c17, d9699 as c18, d9700 as c19 } from '../descriptors/data/447.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d387 as c1 } from '../descriptors/data/23.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10618 as c2, d10630 as c29 } from '../descriptors/data/502.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8717 as c3, d8718 as c4, d8719 as c6 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c5 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8720 as c7, d8721 as c8 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10636 as c11, d10637 as c12, d10632 as c13, d10639 as c20, d10640 as c21, d10641 as c22, d10642 as c23, d10643 as c24, d10644 as c25, d10645 as c26, d10646 as c27, d10647 as c28, d10633 as c30, d10631 as c31, d10634 as c32, d10635 as c33 } from '../descriptors/data/503.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9707 as c14, d9705 as c34, d9708 as c35 } from '../descriptors/data/448.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8829 as c15 } from '../descriptors/data/395.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d387 as d387 } from '../descriptors/data/23.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestEligibility"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["OrderDraftLineItemTaxCalculationRequestModel"]:c6(),["OrderDraftTaxComponentRequestModel"]:c7(),["OrderDraftTaxJurisdictionRequestModel"]:c8(),["ReturnEligibilityLineItemRequestModel"]:c9(),["ReturnEligibilitySelectionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnReplacementTaxRequest"]:c12(),["ReturnResolutionAdjustmentRequest"]:c13(),["ReturnResolutionLineItemRequest"]:c14(),["SharedCodec190"]:c15(),["SharedCodec2668"]:c16(),["SharedCodec2670"]:c17(),["SharedCodec2671"]:c18(),["SharedCodec2672"]:c19(),["SharedCodec2776"]:c20(),["SharedCodec2777"]:c21(),["SharedCodec2778"]:c22(),["SharedCodec2779"]:c23(),["SharedCodec2780"]:c24(),["SharedCodec2782"]:c25(),["SharedCodec2783"]:c26(),["SharedCodec2784"]:c27(),["SharedCodec554"]:c28(),["SharedCodec555"]:c29(),["SharedCodec556"]:c30(),["SharedCodec557"]:c31(),["SharedCodec558"]:c32(),["SharedCodec559"]:c33(),["SharedCodec95"]:c34(),["SharedCodec98"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
