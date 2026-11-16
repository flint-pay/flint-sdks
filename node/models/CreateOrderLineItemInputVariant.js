import { d304 as c0 } from '../descriptors/data/17.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7383 as c1, d7384 as c28 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7390 as c2, d7391 as c3, d7392 as c4, d7393 as c9, d7394 as c10, d7395 as c11, d7396 as c12, d7397 as c13, d7398 as c19, d7399 as c20, d7400 as c21, d7401 as c22 } from '../descriptors/data/339.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7410 as c5, d7411 as c6, d7412 as c14, d7413 as c15, d7414 as c16, d7415 as c17, d7416 as c18, d7417 as c23, d7418 as c24, d7419 as c25, d7409 as c26 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c7 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c8 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6675 as c27 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d304 as d304 } from '../descriptors/data/17.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputVariant"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec417"]:c14(),["SharedCodec418"]:c15(),["SharedCodec419"]:c16(),["SharedCodec420"]:c17(),["SharedCodec421"]:c18(),["SharedCodec423"]:c19(),["SharedCodec424"]:c20(),["SharedCodec425"]:c21(),["SharedCodec426"]:c22(),["SharedCodec433"]:c23(),["SharedCodec434"]:c24(),["SharedCodec435"]:c25(),["SubscribedLineRequestModel"]:c26(),["TextModifierRequest"]:c27(),["WeightRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
