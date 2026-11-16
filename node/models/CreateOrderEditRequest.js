import { d298 as c0 } from '../descriptors/data/16.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6586 as c1, d6580 as c2, d6587 as c3, d6588 as c4, d6589 as c5, d6590 as c10, d6591 as c11, d6592 as c12, d6593 as c13, d6581 as c39 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6607 as c6, d6608 as c7, d6594 as c14, d6595 as c23, d6596 as c24, d6597 as c25, d6598 as c26, d6599 as c27, d6600 as c28, d6601 as c29, d6602 as c30, d6603 as c34, d6604 as c35, d6605 as c36, d6606 as c37 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c8 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c9 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7727 as c15, d7728 as c16, d7729 as c17 } from '../descriptors/data/370.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6609 as c18, d6610 as c19, d6611 as c20, d6612 as c21, d6613 as c22, d6614 as c31, d6615 as c32, d6616 as c33 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c38 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d298 as d298 } from '../descriptors/data/16.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d298;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderEditRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec327"]:c18(),["SharedCodec328"]:c19(),["SharedCodec329"]:c20(),["SharedCodec330"]:c21(),["SharedCodec331"]:c22(),["SharedCodec333"]:c23(),["SharedCodec334"]:c24(),["SharedCodec335"]:c25(),["SharedCodec336"]:c26(),["SharedCodec338"]:c27(),["SharedCodec339"]:c28(),["SharedCodec341"]:c29(),["SharedCodec342"]:c30(),["SharedCodec343"]:c31(),["SharedCodec344"]:c32(),["SharedCodec345"]:c33(),["SharedCodec346"]:c34(),["SharedCodec347"]:c35(),["SharedCodec348"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderEditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
