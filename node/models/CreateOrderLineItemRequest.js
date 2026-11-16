import { d8502 as c0, d8496 as c1, d8503 as c2, d8504 as c3, d8505 as c4, d8506 as c9, d8507 as c10, d8508 as c11, d8497 as c35 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8523 as c5, d8509 as c12, d8510 as c13, d8511 as c19, d8512 as c20, d8513 as c21, d8514 as c22, d8515 as c23, d8516 as c24, d8517 as c25, d8518 as c26, d8519 as c30, d8520 as c31, d8521 as c32, d8522 as c33 } from '../descriptors/data/375.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8524 as c6, d8525 as c14, d8526 as c15, d8527 as c16, d8528 as c17, d8529 as c18, d8530 as c27, d8531 as c28, d8532 as c29 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c7 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c8 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7788 as c34 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8502 as d8502 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8502;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec494"]:c14(),["SharedCodec495"]:c15(),["SharedCodec496"]:c16(),["SharedCodec497"]:c17(),["SharedCodec498"]:c18(),["SharedCodec500"]:c19(),["SharedCodec501"]:c20(),["SharedCodec502"]:c21(),["SharedCodec503"]:c22(),["SharedCodec505"]:c23(),["SharedCodec506"]:c24(),["SharedCodec508"]:c25(),["SharedCodec509"]:c26(),["SharedCodec510"]:c27(),["SharedCodec511"]:c28(),["SharedCodec512"]:c29(),["SharedCodec513"]:c30(),["SharedCodec514"]:c31(),["SharedCodec515"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
