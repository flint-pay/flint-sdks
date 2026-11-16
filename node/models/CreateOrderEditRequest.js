import { d329 as c0 } from '../descriptors/data/17.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8412 as c1, d8406 as c2, d8413 as c3, d8414 as c4, d8415 as c5, d8416 as c10, d8417 as c11, d8418 as c12, d8407 as c39 } from '../descriptors/data/371.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8433 as c6, d8419 as c13, d8420 as c14, d8421 as c23, d8422 as c24, d8423 as c25, d8424 as c26, d8425 as c27, d8426 as c28, d8427 as c29, d8428 as c30, d8429 as c34, d8430 as c35, d8431 as c36, d8432 as c37 } from '../descriptors/data/372.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8434 as c7, d8435 as c18, d8436 as c19, d8437 as c20, d8438 as c21, d8439 as c22, d8440 as c31, d8441 as c32, d8442 as c33 } from '../descriptors/data/373.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7767 as c8 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c9 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9553 as c15, d9554 as c16, d9555 as c17 } from '../descriptors/data/439.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7698 as c38 } from '../descriptors/data/331.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d329 as d329 } from '../descriptors/data/17.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderEditRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec474"]:c18(),["SharedCodec475"]:c19(),["SharedCodec476"]:c20(),["SharedCodec477"]:c21(),["SharedCodec478"]:c22(),["SharedCodec480"]:c23(),["SharedCodec481"]:c24(),["SharedCodec482"]:c25(),["SharedCodec483"]:c26(),["SharedCodec485"]:c27(),["SharedCodec486"]:c28(),["SharedCodec488"]:c29(),["SharedCodec489"]:c30(),["SharedCodec490"]:c31(),["SharedCodec491"]:c32(),["SharedCodec492"]:c33(),["SharedCodec493"]:c34(),["SharedCodec494"]:c35(),["SharedCodec495"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderEditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
