import { d339 as c0 } from '../descriptors/data/18.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8710 as c1, d8704 as c2, d8705 as c39 } from '../descriptors/data/388.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8711 as c3, d8712 as c4, d8713 as c5, d8714 as c10, d8715 as c12, d8716 as c23, d8717 as c24, d8718 as c25, d8719 as c26, d8720 as c27, d8721 as c28, d8722 as c29, d8723 as c30, d8724 as c34, d8725 as c35, d8726 as c36, d8727 as c37 } from '../descriptors/data/389.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8731 as c6, d8732 as c7, d8733 as c11, d8734 as c13, d8735 as c14, d8736 as c18, d8728 as c19, d8737 as c20, d8729 as c21, d8730 as c22, d8738 as c31, d8739 as c32, d8740 as c33 } from '../descriptors/data/390.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c8 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c9 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9908 as c15, d9909 as c16, d9910 as c17 } from '../descriptors/data/459.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7986 as c38 } from '../descriptors/data/347.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d339 as d339 } from '../descriptors/data/18.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderEditRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec485"]:c18(),["SharedCodec486"]:c19(),["SharedCodec487"]:c20(),["SharedCodec488"]:c21(),["SharedCodec489"]:c22(),["SharedCodec491"]:c23(),["SharedCodec492"]:c24(),["SharedCodec493"]:c25(),["SharedCodec494"]:c26(),["SharedCodec496"]:c27(),["SharedCodec497"]:c28(),["SharedCodec499"]:c29(),["SharedCodec500"]:c30(),["SharedCodec501"]:c31(),["SharedCodec502"]:c32(),["SharedCodec503"]:c33(),["SharedCodec504"]:c34(),["SharedCodec505"]:c35(),["SharedCodec506"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderEditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
