import { d9283 as c0 } from '../descriptors/data/420.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8689 as c1, d8688 as c2, d8695 as c3, d8699 as c4, d8700 as c10, d8701 as c12, d8690 as c28 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8717 as c5, d8718 as c6, d8719 as c11, d8714 as c17, d8715 as c19, d8716 as c20, d8708 as c21, d8709 as c22, d8713 as c26 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7917 as c7, d7918 as c9 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c8 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8720 as c13, d8721 as c14, d8722 as c16, d8723 as c18, d8724 as c23, d8725 as c24, d8726 as c25 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8303 as c15 } from '../descriptors/data/366.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7976 as c27 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9283 as d9283 } from '../descriptors/data/420.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9283;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemCustomRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseRecipient"]:c2(),["GiftCardPurchaseRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataMap"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec129"]:c15(),["SharedCodec481"]:c16(),["SharedCodec482"]:c17(),["SharedCodec483"]:c18(),["SharedCodec484"]:c19(),["SharedCodec485"]:c20(),["SharedCodec495"]:c21(),["SharedCodec496"]:c22(),["SharedCodec497"]:c23(),["SharedCodec498"]:c24(),["SharedCodec499"]:c25(),["SubscribedLineRequestModel"]:c26(),["TextModifierRequest"]:c27(),["WeightRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemCustomRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
