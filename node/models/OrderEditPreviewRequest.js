import { d8663 as c0, d8657 as c1, d8658 as c39 } from '../descriptors/data/381.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8664 as c2, d8665 as c3, d8666 as c4, d8667 as c9, d8668 as c11, d8669 as c23, d8670 as c24, d8671 as c25, d8672 as c26, d8673 as c27, d8674 as c28, d8675 as c29, d8676 as c30, d8677 as c34, d8678 as c35, d8679 as c36, d8680 as c37 } from '../descriptors/data/382.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8684 as c5, d8685 as c6, d8686 as c10, d8687 as c12, d8688 as c13, d8689 as c18, d8681 as c19, d8690 as c20, d8682 as c21, d8683 as c22, d8691 as c31, d8692 as c32, d8693 as c33 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c7 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c8 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1330 as c14 } from '../descriptors/data/66.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9849 as c15, d9850 as c16, d9851 as c17 } from '../descriptors/data/451.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7944 as c38 } from '../descriptors/data/341.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1330 as d1330 } from '../descriptors/data/66.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["OrderEditPreviewRequest"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec479"]:c18(),["SharedCodec480"]:c19(),["SharedCodec481"]:c20(),["SharedCodec482"]:c21(),["SharedCodec483"]:c22(),["SharedCodec485"]:c23(),["SharedCodec486"]:c24(),["SharedCodec487"]:c25(),["SharedCodec488"]:c26(),["SharedCodec490"]:c27(),["SharedCodec491"]:c28(),["SharedCodec493"]:c29(),["SharedCodec494"]:c30(),["SharedCodec495"]:c31(),["SharedCodec496"]:c32(),["SharedCodec497"]:c33(),["SharedCodec498"]:c34(),["SharedCodec499"]:c35(),["SharedCodec500"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
