import { d3627 as c0 } from '../descriptors/data/149.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2999 as c1 } from '../descriptors/data/114.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3628 as c2, d3629 as c3, d3630 as c4, d3631 as c5, d3632 as c6, d3633 as c8, d3634 as c9, d3635 as c10, d3636 as c11, d3637 as c12, d3647 as c13, d3648 as c14, d3649 as c15, d3650 as c16, d3651 as c17, d3638 as c18, d3639 as c19, d3640 as c20, d3641 as c21, d3642 as c22, d3643 as c23, d3644 as c24, d3645 as c25, d3646 as c27 } from '../descriptors/data/150.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c7 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3198 as c26 } from '../descriptors/data/127.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3043 as c28, d3044 as c29 } from '../descriptors/data/118.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3627 as d3627 } from '../descriptors/data/149.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3627;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["Dimensions"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequest"]:c5(),["LineItemFulfillmentRequest"]:c6(),["MoneyValue"]:c7(),["OrderDraftLineItemInventoryDemandRequest"]:c8(),["OrderDraftLineItemTaxCalculationRequest"]:c9(),["OrderDraftLineItemTaxRequest"]:c10(),["OrderDraftTaxComponentRequest"]:c11(),["OrderDraftTaxJurisdictionRequest"]:c12(),["OrderLineItemModifierRequest"]:c13(),["SharedCodec168"]:c14(),["SharedCodec169"]:c15(),["SharedCodec170"]:c16(),["SharedCodec171"]:c17(),["SharedCodec172"]:c18(),["SharedCodec173"]:c19(),["SharedCodec174"]:c20(),["SharedCodec175"]:c21(),["SharedCodec176"]:c22(),["SharedCodec177"]:c23(),["SharedCodec178"]:c24(),["SharedCodec179"]:c25(),["SharedCodec369"]:c26(),["SubscribedLineRequest"]:c27(),["TextModifierRequest"]:c28(),["Weight"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
