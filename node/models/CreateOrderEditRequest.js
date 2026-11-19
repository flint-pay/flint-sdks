import { d336 as c0 } from '../descriptors/data/18.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8685 as c1, d8679 as c2, d8686 as c3, d8687 as c4, d8688 as c5, d8689 as c10, d8690 as c12, d8691 as c23, d8680 as c39 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8706 as c6, d8707 as c7, d8703 as c19, d8704 as c21, d8705 as c22, d8692 as c24, d8693 as c25, d8694 as c26, d8695 as c27, d8696 as c28, d8697 as c29, d8698 as c30, d8699 as c34, d8700 as c35, d8701 as c36, d8702 as c37 } from '../descriptors/data/389.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c8 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c9 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8708 as c11, d8709 as c13, d8710 as c14, d8711 as c18, d8712 as c20, d8713 as c31, d8714 as c32, d8715 as c33 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9872 as c15 } from '../descriptors/data/458.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9873 as c16, d9874 as c17 } from '../descriptors/data/459.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7965 as c38 } from '../descriptors/data/347.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d336 as d336 } from '../descriptors/data/18.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d336;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderEditRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec481"]:c18(),["SharedCodec482"]:c19(),["SharedCodec483"]:c20(),["SharedCodec484"]:c21(),["SharedCodec485"]:c22(),["SharedCodec487"]:c23(),["SharedCodec488"]:c24(),["SharedCodec489"]:c25(),["SharedCodec490"]:c26(),["SharedCodec492"]:c27(),["SharedCodec493"]:c28(),["SharedCodec495"]:c29(),["SharedCodec496"]:c30(),["SharedCodec497"]:c31(),["SharedCodec498"]:c32(),["SharedCodec499"]:c33(),["SharedCodec500"]:c34(),["SharedCodec501"]:c35(),["SharedCodec502"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderEditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
