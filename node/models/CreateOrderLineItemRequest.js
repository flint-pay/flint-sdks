import { d8663 as c0, d8657 as c1, d8658 as c35 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8664 as c2, d8665 as c3, d8666 as c4, d8667 as c9, d8668 as c11, d8669 as c19, d8670 as c20, d8671 as c21, d8672 as c22, d8673 as c23, d8674 as c24, d8675 as c25, d8676 as c26, d8677 as c30, d8678 as c31, d8679 as c32, d8680 as c33 } from '../descriptors/data/383.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8684 as c5, d8685 as c6, d8686 as c10, d8687 as c12, d8688 as c13, d8689 as c14, d8681 as c15, d8690 as c16, d8682 as c17, d8683 as c18, d8691 as c27, d8692 as c28, d8693 as c29 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c7 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c8 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7944 as c34 } from '../descriptors/data/342.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8663 as d8663 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8663;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec479"]:c14(),["SharedCodec480"]:c15(),["SharedCodec481"]:c16(),["SharedCodec482"]:c17(),["SharedCodec483"]:c18(),["SharedCodec485"]:c19(),["SharedCodec486"]:c20(),["SharedCodec487"]:c21(),["SharedCodec488"]:c22(),["SharedCodec490"]:c23(),["SharedCodec491"]:c24(),["SharedCodec493"]:c25(),["SharedCodec494"]:c26(),["SharedCodec495"]:c27(),["SharedCodec496"]:c28(),["SharedCodec497"]:c29(),["SharedCodec498"]:c30(),["SharedCodec499"]:c31(),["SharedCodec500"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
