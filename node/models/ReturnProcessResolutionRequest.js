import { d8717 as c0, d8718 as c1, d8719 as c4 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c2 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c3 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8720 as c5, d8721 as c6 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10722 as c7 } from '../descriptors/data/509.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10636 as c8, d10637 as c9, d10639 as c11, d10640 as c12, d10641 as c13, d10642 as c14, d10643 as c15, d10644 as c16, d10645 as c17, d10646 as c18, d10647 as c19 } from '../descriptors/data/503.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8829 as c10 } from '../descriptors/data/395.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10710 as c20 } from '../descriptors/data/508.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10722 as d10722 } from '../descriptors/data/509.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10722;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ReturnProcessResolutionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnReplacementTaxRequest"]:c9(),["SharedCodec190"]:c10(),["SharedCodec2776"]:c11(),["SharedCodec2777"]:c12(),["SharedCodec2778"]:c13(),["SharedCodec2779"]:c14(),["SharedCodec2780"]:c15(),["SharedCodec2782"]:c16(),["SharedCodec2783"]:c17(),["SharedCodec2784"]:c18(),["SharedCodec554"]:c19(),["SharedCodec560"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
