import { d8 as c0 } from '../descriptors/data/0.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8412 as c1, d8406 as c2, d8413 as c3, d8414 as c4, d8415 as c5, d8416 as c10, d8417 as c11, d8418 as c12, d8407 as c36 } from '../descriptors/data/371.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8433 as c6, d8419 as c13, d8420 as c14, d8421 as c20, d8422 as c21, d8423 as c22, d8424 as c23, d8425 as c24, d8426 as c25, d8427 as c26, d8428 as c27, d8429 as c31, d8430 as c32, d8431 as c33, d8432 as c34 } from '../descriptors/data/372.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8434 as c7, d8435 as c15, d8436 as c16, d8437 as c17, d8438 as c18, d8439 as c19, d8440 as c28, d8441 as c29, d8442 as c30 } from '../descriptors/data/373.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c8 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c9 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7698 as c35 } from '../descriptors/data/331.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec474"]:c15(),["SharedCodec475"]:c16(),["SharedCodec476"]:c17(),["SharedCodec477"]:c18(),["SharedCodec478"]:c19(),["SharedCodec480"]:c20(),["SharedCodec481"]:c21(),["SharedCodec482"]:c22(),["SharedCodec483"]:c23(),["SharedCodec485"]:c24(),["SharedCodec486"]:c25(),["SharedCodec488"]:c26(),["SharedCodec489"]:c27(),["SharedCodec490"]:c28(),["SharedCodec491"]:c29(),["SharedCodec492"]:c30(),["SharedCodec493"]:c31(),["SharedCodec494"]:c32(),["SharedCodec495"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
