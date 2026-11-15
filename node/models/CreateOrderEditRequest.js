import { d296 as c0 } from '../descriptors/data/16.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6558 as c1, d6552 as c2, d6559 as c3, d6560 as c4, d6561 as c5, d6562 as c10, d6563 as c11, d6564 as c12, d6565 as c13, d6553 as c39 } from '../descriptors/data/302.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6579 as c6, d6580 as c7, d6566 as c14, d6567 as c23, d6568 as c24, d6569 as c25, d6570 as c26, d6571 as c27, d6572 as c28, d6573 as c29, d6574 as c30, d6575 as c34, d6576 as c35, d6577 as c36, d6578 as c37 } from '../descriptors/data/303.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c8 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c9 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7699 as c15, d7700 as c16, d7701 as c17 } from '../descriptors/data/369.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6581 as c18, d6582 as c19, d6583 as c20, d6584 as c21, d6585 as c22, d6586 as c31, d6587 as c32, d6588 as c33 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5844 as c38 } from '../descriptors/data/262.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d296 as d296 } from '../descriptors/data/16.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderEditRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec327"]:c18(),["SharedCodec328"]:c19(),["SharedCodec329"]:c20(),["SharedCodec330"]:c21(),["SharedCodec331"]:c22(),["SharedCodec333"]:c23(),["SharedCodec334"]:c24(),["SharedCodec335"]:c25(),["SharedCodec336"]:c26(),["SharedCodec338"]:c27(),["SharedCodec339"]:c28(),["SharedCodec341"]:c29(),["SharedCodec342"]:c30(),["SharedCodec343"]:c31(),["SharedCodec344"]:c32(),["SharedCodec345"]:c33(),["SharedCodec346"]:c34(),["SharedCodec347"]:c35(),["SharedCodec348"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderEditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
