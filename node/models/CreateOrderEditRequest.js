import { d298 as c0 } from '../descriptors/data/16.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7389 as c1, d7383 as c2, d7384 as c39 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7390 as c3, d7391 as c4, d7392 as c5, d7393 as c10, d7394 as c11, d7395 as c12, d7396 as c13, d7397 as c14, d7398 as c23, d7399 as c24, d7400 as c25, d7401 as c26, d7402 as c27, d7403 as c28, d7404 as c29, d7405 as c30, d7406 as c34, d7407 as c35, d7408 as c36 } from '../descriptors/data/339.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7410 as c6, d7411 as c7, d7412 as c18, d7413 as c19, d7414 as c20, d7415 as c21, d7416 as c22, d7417 as c31, d7418 as c32, d7419 as c33, d7409 as c37 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c8 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c9 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8530 as c15, d8531 as c16, d8532 as c17 } from '../descriptors/data/406.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6675 as c38 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d298 as d298 } from '../descriptors/data/16.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d298;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderEditRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec417"]:c18(),["SharedCodec418"]:c19(),["SharedCodec419"]:c20(),["SharedCodec420"]:c21(),["SharedCodec421"]:c22(),["SharedCodec423"]:c23(),["SharedCodec424"]:c24(),["SharedCodec425"]:c25(),["SharedCodec426"]:c26(),["SharedCodec428"]:c27(),["SharedCodec429"]:c28(),["SharedCodec431"]:c29(),["SharedCodec432"]:c30(),["SharedCodec433"]:c31(),["SharedCodec434"]:c32(),["SharedCodec435"]:c33(),["SharedCodec436"]:c34(),["SharedCodec437"]:c35(),["SharedCodec438"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderEditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
