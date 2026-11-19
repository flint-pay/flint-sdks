import { d341 as c0 } from '../descriptors/data/19.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8658 as c1, d8659 as c26 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8665 as c2, d8666 as c3, d8667 as c4, d8668 as c9, d8669 as c11, d8676 as c19, d8677 as c20, d8681 as c24 } from '../descriptors/data/383.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8685 as c5, d8686 as c6, d8687 as c10, d8688 as c12, d8689 as c13, d8690 as c14, d8682 as c15, d8691 as c16, d8683 as c17, d8684 as c18, d8692 as c21, d8693 as c22, d8694 as c23 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c7 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c8 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7944 as c25 } from '../descriptors/data/342.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d341 as d341 } from '../descriptors/data/19.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d341;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputCustom"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec481"]:c14(),["SharedCodec482"]:c15(),["SharedCodec483"]:c16(),["SharedCodec484"]:c17(),["SharedCodec485"]:c18(),["SharedCodec495"]:c19(),["SharedCodec496"]:c20(),["SharedCodec497"]:c21(),["SharedCodec498"]:c22(),["SharedCodec499"]:c23(),["SubscribedLineRequestModel"]:c24(),["TextModifierRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
