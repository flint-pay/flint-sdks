import { d6586 as c0, d6580 as c1, d6587 as c2, d6588 as c3, d6589 as c4, d6590 as c9, d6591 as c10, d6592 as c11, d6593 as c12, d6581 as c35 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6607 as c5, d6608 as c6, d6594 as c13, d6595 as c19, d6596 as c20, d6597 as c21, d6598 as c22, d6599 as c23, d6600 as c24, d6601 as c25, d6602 as c26, d6603 as c30, d6604 as c31, d6605 as c32, d6606 as c33 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c7 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c8 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6609 as c14, d6610 as c15, d6611 as c16, d6612 as c17, d6613 as c18, d6614 as c27, d6615 as c28, d6616 as c29 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c34 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6586 as d6586 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6586;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec327"]:c14(),["SharedCodec328"]:c15(),["SharedCodec329"]:c16(),["SharedCodec330"]:c17(),["SharedCodec331"]:c18(),["SharedCodec333"]:c19(),["SharedCodec334"]:c20(),["SharedCodec335"]:c21(),["SharedCodec336"]:c22(),["SharedCodec338"]:c23(),["SharedCodec339"]:c24(),["SharedCodec341"]:c25(),["SharedCodec342"]:c26(),["SharedCodec343"]:c27(),["SharedCodec344"]:c28(),["SharedCodec345"]:c29(),["SharedCodec346"]:c30(),["SharedCodec347"]:c31(),["SharedCodec348"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
