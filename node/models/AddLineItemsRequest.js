import { d8 as c0 } from '../descriptors/data/0.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8502 as c1, d8496 as c2, d8503 as c3, d8504 as c4, d8505 as c5, d8506 as c10, d8507 as c11, d8508 as c12, d8497 as c36 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8523 as c6, d8509 as c13, d8510 as c14, d8511 as c20, d8512 as c21, d8513 as c22, d8514 as c23, d8515 as c24, d8516 as c25, d8517 as c26, d8518 as c27, d8519 as c31, d8520 as c32, d8521 as c33, d8522 as c34 } from '../descriptors/data/375.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8524 as c7, d8525 as c15, d8526 as c16, d8527 as c17, d8528 as c18, d8529 as c19, d8530 as c28, d8531 as c29, d8532 as c30 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c8 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c9 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7788 as c35 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec494"]:c15(),["SharedCodec495"]:c16(),["SharedCodec496"]:c17(),["SharedCodec497"]:c18(),["SharedCodec498"]:c19(),["SharedCodec500"]:c20(),["SharedCodec501"]:c21(),["SharedCodec502"]:c22(),["SharedCodec503"]:c23(),["SharedCodec505"]:c24(),["SharedCodec506"]:c25(),["SharedCodec508"]:c26(),["SharedCodec509"]:c27(),["SharedCodec510"]:c28(),["SharedCodec511"]:c29(),["SharedCodec512"]:c30(),["SharedCodec513"]:c31(),["SharedCodec514"]:c32(),["SharedCodec515"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
