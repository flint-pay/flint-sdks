import { d5 as c0 } from '../descriptors/data/0.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3627 as c1 } from '../descriptors/data/149.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2999 as c2 } from '../descriptors/data/114.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3628 as c3, d3629 as c4, d3630 as c5, d3631 as c6, d3632 as c7, d3633 as c9, d3634 as c10, d3635 as c11, d3636 as c12, d3637 as c13, d3647 as c14, d3648 as c15, d3649 as c16, d3650 as c17, d3651 as c18, d3638 as c19, d3639 as c20, d3640 as c21, d3641 as c22, d3642 as c23, d3643 as c24, d3644 as c25, d3645 as c26, d3646 as c28 } from '../descriptors/data/150.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3013 as c8 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3198 as c27 } from '../descriptors/data/127.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3043 as c29, d3044 as c30 } from '../descriptors/data/118.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d5 as d5 } from '../descriptors/data/0.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["Dimensions"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequest"]:c6(),["LineItemFulfillmentRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequest"]:c10(),["OrderDraftLineItemTaxRequest"]:c11(),["OrderDraftTaxComponentRequest"]:c12(),["OrderDraftTaxJurisdictionRequest"]:c13(),["OrderLineItemModifierRequest"]:c14(),["SharedCodec168"]:c15(),["SharedCodec169"]:c16(),["SharedCodec170"]:c17(),["SharedCodec171"]:c18(),["SharedCodec172"]:c19(),["SharedCodec173"]:c20(),["SharedCodec174"]:c21(),["SharedCodec175"]:c22(),["SharedCodec176"]:c23(),["SharedCodec177"]:c24(),["SharedCodec178"]:c25(),["SharedCodec179"]:c26(),["SharedCodec369"]:c27(),["SubscribedLineRequest"]:c28(),["TextModifierRequest"]:c29(),["Weight"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
