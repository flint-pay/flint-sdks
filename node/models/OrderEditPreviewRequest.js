import { d8664 as c0, d8658 as c1, d8659 as c39 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8665 as c2, d8666 as c3, d8667 as c4, d8668 as c9, d8669 as c11, d8670 as c23, d8671 as c24, d8672 as c25, d8673 as c26, d8674 as c27, d8675 as c28, d8676 as c29, d8677 as c30, d8678 as c34, d8679 as c35, d8680 as c36, d8681 as c37 } from '../descriptors/data/383.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8685 as c5, d8686 as c6, d8687 as c10, d8688 as c12, d8689 as c13, d8690 as c18, d8682 as c19, d8691 as c20, d8683 as c21, d8684 as c22, d8692 as c31, d8693 as c32, d8694 as c33 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c7 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c8 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1329 as c14 } from '../descriptors/data/66.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9851 as c15 } from '../descriptors/data/452.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9852 as c16, d9853 as c17 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7944 as c38 } from '../descriptors/data/342.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1329 as d1329 } from '../descriptors/data/66.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["OrderEditPreviewRequest"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec481"]:c18(),["SharedCodec482"]:c19(),["SharedCodec483"]:c20(),["SharedCodec484"]:c21(),["SharedCodec485"]:c22(),["SharedCodec487"]:c23(),["SharedCodec488"]:c24(),["SharedCodec489"]:c25(),["SharedCodec490"]:c26(),["SharedCodec492"]:c27(),["SharedCodec493"]:c28(),["SharedCodec495"]:c29(),["SharedCodec496"]:c30(),["SharedCodec497"]:c31(),["SharedCodec498"]:c32(),["SharedCodec499"]:c33(),["SharedCodec500"]:c34(),["SharedCodec501"]:c35(),["SharedCodec502"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
