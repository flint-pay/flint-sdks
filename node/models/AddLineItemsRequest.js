import { d8 as c0 } from '../descriptors/data/0.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6586 as c1, d6580 as c2, d6587 as c3, d6588 as c4, d6589 as c5, d6590 as c10, d6591 as c11, d6592 as c12, d6593 as c13, d6581 as c36 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6607 as c6, d6608 as c7, d6594 as c14, d6595 as c20, d6596 as c21, d6597 as c22, d6598 as c23, d6599 as c24, d6600 as c25, d6601 as c26, d6602 as c27, d6603 as c31, d6604 as c32, d6605 as c33, d6606 as c34 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c8 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c9 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6609 as c15, d6610 as c16, d6611 as c17, d6612 as c18, d6613 as c19, d6614 as c28, d6615 as c29, d6616 as c30 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c35 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec327"]:c15(),["SharedCodec328"]:c16(),["SharedCodec329"]:c17(),["SharedCodec330"]:c18(),["SharedCodec331"]:c19(),["SharedCodec333"]:c20(),["SharedCodec334"]:c21(),["SharedCodec335"]:c22(),["SharedCodec336"]:c23(),["SharedCodec338"]:c24(),["SharedCodec339"]:c25(),["SharedCodec341"]:c26(),["SharedCodec342"]:c27(),["SharedCodec343"]:c28(),["SharedCodec344"]:c29(),["SharedCodec345"]:c30(),["SharedCodec346"]:c31(),["SharedCodec347"]:c32(),["SharedCodec348"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
