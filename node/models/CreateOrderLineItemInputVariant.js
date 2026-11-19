import { d342 as c0 } from '../descriptors/data/19.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8658 as c1, d8659 as c28 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8665 as c2, d8666 as c3, d8667 as c4, d8668 as c9, d8669 as c11, d8670 as c19, d8671 as c20, d8672 as c21, d8673 as c22, d8681 as c26 } from '../descriptors/data/383.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8685 as c5, d8686 as c6, d8687 as c10, d8688 as c12, d8689 as c13, d8690 as c14, d8682 as c15, d8691 as c16, d8683 as c17, d8684 as c18, d8692 as c23, d8693 as c24, d8694 as c25 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c7 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c8 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7944 as c27 } from '../descriptors/data/342.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d342 as d342 } from '../descriptors/data/19.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d342;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputVariant"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec481"]:c14(),["SharedCodec482"]:c15(),["SharedCodec483"]:c16(),["SharedCodec484"]:c17(),["SharedCodec485"]:c18(),["SharedCodec487"]:c19(),["SharedCodec488"]:c20(),["SharedCodec489"]:c21(),["SharedCodec490"]:c22(),["SharedCodec497"]:c23(),["SharedCodec498"]:c24(),["SharedCodec499"]:c25(),["SubscribedLineRequestModel"]:c26(),["TextModifierRequest"]:c27(),["WeightRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
