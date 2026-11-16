import { d8 as c0 } from '../descriptors/data/0.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7389 as c1, d7383 as c2, d7384 as c36 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7390 as c3, d7391 as c4, d7392 as c5, d7393 as c10, d7394 as c11, d7395 as c12, d7396 as c13, d7397 as c14, d7398 as c20, d7399 as c21, d7400 as c22, d7401 as c23, d7402 as c24, d7403 as c25, d7404 as c26, d7405 as c27, d7406 as c31, d7407 as c32, d7408 as c33 } from '../descriptors/data/339.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7410 as c6, d7411 as c7, d7412 as c15, d7413 as c16, d7414 as c17, d7415 as c18, d7416 as c19, d7417 as c28, d7418 as c29, d7419 as c30, d7409 as c34 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c8 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c9 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6675 as c35 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec417"]:c15(),["SharedCodec418"]:c16(),["SharedCodec419"]:c17(),["SharedCodec420"]:c18(),["SharedCodec421"]:c19(),["SharedCodec423"]:c20(),["SharedCodec424"]:c21(),["SharedCodec425"]:c22(),["SharedCodec426"]:c23(),["SharedCodec428"]:c24(),["SharedCodec429"]:c25(),["SharedCodec431"]:c26(),["SharedCodec432"]:c27(),["SharedCodec433"]:c28(),["SharedCodec434"]:c29(),["SharedCodec435"]:c30(),["SharedCodec436"]:c31(),["SharedCodec437"]:c32(),["SharedCodec438"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
