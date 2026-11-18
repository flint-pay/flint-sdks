import { d8 as c0 } from '../descriptors/data/0.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8663 as c1, d8657 as c2, d8658 as c36 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8664 as c3, d8665 as c4, d8666 as c5, d8667 as c10, d8668 as c12, d8669 as c20, d8670 as c21, d8671 as c22, d8672 as c23, d8673 as c24, d8674 as c25, d8675 as c26, d8676 as c27, d8677 as c31, d8678 as c32, d8679 as c33, d8680 as c34 } from '../descriptors/data/383.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8684 as c6, d8685 as c7, d8686 as c11, d8687 as c13, d8688 as c14, d8689 as c15, d8681 as c16, d8690 as c17, d8682 as c18, d8683 as c19, d8691 as c28, d8692 as c29, d8693 as c30 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c8 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c9 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7944 as c35 } from '../descriptors/data/342.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec479"]:c15(),["SharedCodec480"]:c16(),["SharedCodec481"]:c17(),["SharedCodec482"]:c18(),["SharedCodec483"]:c19(),["SharedCodec485"]:c20(),["SharedCodec486"]:c21(),["SharedCodec487"]:c22(),["SharedCodec488"]:c23(),["SharedCodec490"]:c24(),["SharedCodec491"]:c25(),["SharedCodec493"]:c26(),["SharedCodec494"]:c27(),["SharedCodec495"]:c28(),["SharedCodec496"]:c29(),["SharedCodec497"]:c30(),["SharedCodec498"]:c31(),["SharedCodec499"]:c32(),["SharedCodec500"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
