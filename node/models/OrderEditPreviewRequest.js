import { d8502 as c0, d8496 as c1, d8503 as c2, d8504 as c3, d8505 as c4, d8506 as c9, d8507 as c10, d8508 as c11, d8497 as c39 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8523 as c5, d8509 as c12, d8510 as c13, d8511 as c23, d8512 as c24, d8513 as c25, d8514 as c26, d8515 as c27, d8516 as c28, d8517 as c29, d8518 as c30, d8519 as c34, d8520 as c35, d8521 as c36, d8522 as c37 } from '../descriptors/data/375.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8524 as c6, d8525 as c18, d8526 as c19, d8527 as c20, d8528 as c21, d8529 as c22, d8530 as c31, d8531 as c32, d8532 as c33 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c7 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c8 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1284 as c14 } from '../descriptors/data/64.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9643 as c15, d9644 as c16, d9645 as c17 } from '../descriptors/data/442.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7788 as c38 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1284 as d1284 } from '../descriptors/data/64.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1284;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["OrderEditPreviewRequest"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec494"]:c18(),["SharedCodec495"]:c19(),["SharedCodec496"]:c20(),["SharedCodec497"]:c21(),["SharedCodec498"]:c22(),["SharedCodec500"]:c23(),["SharedCodec501"]:c24(),["SharedCodec502"]:c25(),["SharedCodec503"]:c26(),["SharedCodec505"]:c27(),["SharedCodec506"]:c28(),["SharedCodec508"]:c29(),["SharedCodec509"]:c30(),["SharedCodec510"]:c31(),["SharedCodec511"]:c32(),["SharedCodec512"]:c33(),["SharedCodec513"]:c34(),["SharedCodec514"]:c35(),["SharedCodec515"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
