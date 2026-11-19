import { d8696 as c0, d8689 as c1, d8697 as c2, d8698 as c3, d8699 as c4, d8700 as c9, d8701 as c11, d8702 as c19, d8703 as c20, d8690 as c35 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8717 as c5, d8718 as c6, d8719 as c10, d8714 as c15, d8715 as c17, d8716 as c18, d8704 as c21, d8705 as c22, d8706 as c23, d8707 as c24, d8708 as c25, d8709 as c26, d8710 as c30, d8711 as c31, d8712 as c32, d8713 as c33 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c7 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c8 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8720 as c12, d8721 as c13, d8722 as c14, d8723 as c16, d8724 as c27, d8725 as c28, d8726 as c29 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7976 as c34 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8696 as d8696 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8696;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec481"]:c14(),["SharedCodec482"]:c15(),["SharedCodec483"]:c16(),["SharedCodec484"]:c17(),["SharedCodec485"]:c18(),["SharedCodec487"]:c19(),["SharedCodec488"]:c20(),["SharedCodec489"]:c21(),["SharedCodec490"]:c22(),["SharedCodec492"]:c23(),["SharedCodec493"]:c24(),["SharedCodec495"]:c25(),["SharedCodec496"]:c26(),["SharedCodec497"]:c27(),["SharedCodec498"]:c28(),["SharedCodec499"]:c29(),["SharedCodec500"]:c30(),["SharedCodec501"]:c31(),["SharedCodec502"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
