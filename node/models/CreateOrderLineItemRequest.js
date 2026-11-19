import { d8685 as c0, d8679 as c1, d8686 as c2, d8687 as c3, d8688 as c4, d8689 as c9, d8690 as c11, d8691 as c19, d8680 as c35 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8706 as c5, d8707 as c6, d8703 as c15, d8704 as c17, d8705 as c18, d8692 as c20, d8693 as c21, d8694 as c22, d8695 as c23, d8696 as c24, d8697 as c25, d8698 as c26, d8699 as c30, d8700 as c31, d8701 as c32, d8702 as c33 } from '../descriptors/data/389.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c7 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c8 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8708 as c10, d8709 as c12, d8710 as c13, d8711 as c14, d8712 as c16, d8713 as c27, d8714 as c28, d8715 as c29 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7965 as c34 } from '../descriptors/data/347.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8685 as d8685 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8685;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec481"]:c14(),["SharedCodec482"]:c15(),["SharedCodec483"]:c16(),["SharedCodec484"]:c17(),["SharedCodec485"]:c18(),["SharedCodec487"]:c19(),["SharedCodec488"]:c20(),["SharedCodec489"]:c21(),["SharedCodec490"]:c22(),["SharedCodec492"]:c23(),["SharedCodec493"]:c24(),["SharedCodec495"]:c25(),["SharedCodec496"]:c26(),["SharedCodec497"]:c27(),["SharedCodec498"]:c28(),["SharedCodec499"]:c29(),["SharedCodec500"]:c30(),["SharedCodec501"]:c31(),["SharedCodec502"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
