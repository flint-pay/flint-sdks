import { d56 as c0 } from '../descriptors/data/2.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9458 as c1 } from '../descriptors/data/430.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9494 as c2 } from '../descriptors/data/434.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9688 as c3, d9690 as c4, d9692 as c5, d9696 as c11, d9698 as c12, d9699 as c13, d9700 as c14 } from '../descriptors/data/447.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9707 as c6, d9705 as c16, d9706 as c18, d9708 as c19 } from '../descriptors/data/448.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9520 as c7, d9521 as c8, d9522 as c9, d9523 as c10 } from '../descriptors/data/437.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9622 as c15, d9623 as c17 } from '../descriptors/data/442.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d56 as d56 } from '../descriptors/data/2.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d56;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec163"]:c7(),["SharedCodec164"]:c8(),["SharedCodec165"]:c9(),["SharedCodec166"]:c10(),["SharedCodec2668"]:c11(),["SharedCodec2670"]:c12(),["SharedCodec2671"]:c13(),["SharedCodec2672"]:c14(),["SharedCodec94"]:c15(),["SharedCodec95"]:c16(),["SharedCodec96"]:c17(),["SharedCodec97"]:c18(),["SharedCodec98"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
