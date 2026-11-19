import { d8696 as c0, d8689 as c1, d8697 as c2, d8698 as c3, d8699 as c4, d8700 as c9, d8701 as c11, d8702 as c23, d8703 as c24, d8690 as c39 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8717 as c5, d8718 as c6, d8719 as c10, d8714 as c19, d8715 as c21, d8716 as c22, d8704 as c25, d8705 as c26, d8706 as c27, d8707 as c28, d8708 as c29, d8709 as c30, d8710 as c34, d8711 as c35, d8712 as c36, d8713 as c37 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c7 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c8 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8720 as c12, d8721 as c13, d8722 as c18, d8723 as c20, d8724 as c31, d8725 as c32, d8726 as c33 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1331 as c14 } from '../descriptors/data/66.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9893 as c15, d9894 as c16, d9895 as c17 } from '../descriptors/data/459.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7976 as c38 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1331 as d1331 } from '../descriptors/data/66.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["OrderEditPreviewRequest"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec481"]:c18(),["SharedCodec482"]:c19(),["SharedCodec483"]:c20(),["SharedCodec484"]:c21(),["SharedCodec485"]:c22(),["SharedCodec487"]:c23(),["SharedCodec488"]:c24(),["SharedCodec489"]:c25(),["SharedCodec490"]:c26(),["SharedCodec492"]:c27(),["SharedCodec493"]:c28(),["SharedCodec495"]:c29(),["SharedCodec496"]:c30(),["SharedCodec497"]:c31(),["SharedCodec498"]:c32(),["SharedCodec499"]:c33(),["SharedCodec500"]:c34(),["SharedCodec501"]:c35(),["SharedCodec502"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
