import { d7389 as c0, d7383 as c1, d7390 as c2, d7391 as c3, d7392 as c4, d7393 as c9, d7394 as c10, d7395 as c11, d7396 as c12, d7384 as c35 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7410 as c5, d7411 as c6, d7397 as c13, d7398 as c19, d7399 as c20, d7400 as c21, d7401 as c22, d7402 as c23, d7403 as c24, d7404 as c25, d7405 as c26, d7406 as c30, d7407 as c31, d7408 as c32, d7409 as c33 } from '../descriptors/data/336.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c7 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c8 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7412 as c14, d7413 as c15, d7414 as c16, d7415 as c17, d7416 as c18, d7417 as c27, d7418 as c28, d7419 as c29 } from '../descriptors/data/337.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6675 as c34 } from '../descriptors/data/295.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7389 as d7389 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7389;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec417"]:c14(),["SharedCodec418"]:c15(),["SharedCodec419"]:c16(),["SharedCodec420"]:c17(),["SharedCodec421"]:c18(),["SharedCodec423"]:c19(),["SharedCodec424"]:c20(),["SharedCodec425"]:c21(),["SharedCodec426"]:c22(),["SharedCodec428"]:c23(),["SharedCodec429"]:c24(),["SharedCodec431"]:c25(),["SharedCodec432"]:c26(),["SharedCodec433"]:c27(),["SharedCodec434"]:c28(),["SharedCodec435"]:c29(),["SharedCodec436"]:c30(),["SharedCodec437"]:c31(),["SharedCodec438"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
