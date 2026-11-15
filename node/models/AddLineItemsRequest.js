import { d8 as c0 } from '../descriptors/data/0.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6558 as c1, d6552 as c2, d6559 as c3, d6560 as c4, d6561 as c5, d6562 as c10, d6563 as c11, d6564 as c12, d6565 as c13, d6553 as c36 } from '../descriptors/data/302.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6579 as c6, d6580 as c7, d6566 as c14, d6567 as c20, d6568 as c21, d6569 as c22, d6570 as c23, d6571 as c24, d6572 as c25, d6573 as c26, d6574 as c27, d6575 as c31, d6576 as c32, d6577 as c33, d6578 as c34 } from '../descriptors/data/303.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c8 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c9 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6581 as c15, d6582 as c16, d6583 as c17, d6584 as c18, d6585 as c19, d6586 as c28, d6587 as c29, d6588 as c30 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5844 as c35 } from '../descriptors/data/262.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec327"]:c15(),["SharedCodec328"]:c16(),["SharedCodec329"]:c17(),["SharedCodec330"]:c18(),["SharedCodec331"]:c19(),["SharedCodec333"]:c20(),["SharedCodec334"]:c21(),["SharedCodec335"]:c22(),["SharedCodec336"]:c23(),["SharedCodec338"]:c24(),["SharedCodec339"]:c25(),["SharedCodec341"]:c26(),["SharedCodec342"]:c27(),["SharedCodec343"]:c28(),["SharedCodec344"]:c29(),["SharedCodec345"]:c30(),["SharedCodec346"]:c31(),["SharedCodec347"]:c32(),["SharedCodec348"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
