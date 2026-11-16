import { d335 as c0 } from '../descriptors/data/18.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8406 as c1, d8413 as c2, d8414 as c3, d8415 as c4, d8416 as c9, d8417 as c10, d8418 as c11, d8407 as c28 } from '../descriptors/data/371.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8433 as c5, d8419 as c12, d8420 as c13, d8421 as c19, d8422 as c20, d8423 as c21, d8424 as c22, d8432 as c26 } from '../descriptors/data/372.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8434 as c6, d8435 as c14, d8436 as c15, d8437 as c16, d8438 as c17, d8439 as c18, d8440 as c23, d8441 as c24, d8442 as c25 } from '../descriptors/data/373.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7767 as c7 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c8 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7698 as c27 } from '../descriptors/data/331.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d335 as d335 } from '../descriptors/data/18.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d335;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputVariant"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec474"]:c14(),["SharedCodec475"]:c15(),["SharedCodec476"]:c16(),["SharedCodec477"]:c17(),["SharedCodec478"]:c18(),["SharedCodec480"]:c19(),["SharedCodec481"]:c20(),["SharedCodec482"]:c21(),["SharedCodec483"]:c22(),["SharedCodec490"]:c23(),["SharedCodec491"]:c24(),["SharedCodec492"]:c25(),["SubscribedLineRequestModel"]:c26(),["TextModifierRequest"]:c27(),["WeightRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
