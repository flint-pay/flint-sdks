import { d8717 as c0, d8718 as c1, d8719 as c3 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8720 as c4, d8721 as c5 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10637 as c6, d10639 as c8, d10640 as c9, d10641 as c10, d10642 as c11, d10643 as c12 } from '../descriptors/data/503.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8829 as c7 } from '../descriptors/data/395.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10679 as c13, d10680 as c14, d10681 as c15 } from '../descriptors/data/506.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10704 as c16 } from '../descriptors/data/507.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10704 as d10704 } from '../descriptors/data/507.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10704;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementTaxRequest"]:c6(),["SharedCodec190"]:c7(),["SharedCodec2776"]:c8(),["SharedCodec2777"]:c9(),["SharedCodec2778"]:c10(),["SharedCodec2779"]:c11(),["SharedCodec2780"]:c12(),["SharedCodec3176"]:c13(),["SharedCodec3177"]:c14(),["SharedCodec3178"]:c15(),["UpdateReturnReplacementLineItemRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
