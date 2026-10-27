import { d136 as c0 } from '../descriptors/data/5.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3627 as c1, d3618 as c5 } from '../descriptors/data/149.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3179 as c2 } from '../descriptors/data/126.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3165 as c3, d3166 as c33, d3167 as c34 } from '../descriptors/data/125.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3193 as c4, d3194 as c31, d3195 as c32, d3198 as c35 } from '../descriptors/data/127.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2999 as c6 } from '../descriptors/data/114.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3628 as c7, d3629 as c8, d3630 as c9, d3631 as c10, d3632 as c11, d3633 as c13, d3634 as c14, d3635 as c15, d3636 as c16, d3637 as c17, d3647 as c18, d3648 as c19, d3649 as c20, d3650 as c21, d3651 as c22, d3638 as c23, d3639 as c24, d3640 as c25, d3641 as c26, d3642 as c27, d3643 as c28, d3644 as c29, d3645 as c30, d3646 as c36 } from '../descriptors/data/150.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c12 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3043 as c37, d3044 as c38 } from '../descriptors/data/118.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d136 as d136 } from '../descriptors/data/5.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d136;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryOptionsPreviewRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryBuyerLocationRequest"]:c3(),["DeliveryCoordinateRequest"]:c4(),["DeliveryPreviewRoutingSource"]:c5(),["Dimensions"]:c6(),["GiftCardPurchaseDetailsRequest"]:c7(),["GiftCardPurchaseRecipientRequest"]:c8(),["ImageReferenceRequest"]:c9(),["LineItemFulfillmentOriginRequest"]:c10(),["LineItemFulfillmentRequest"]:c11(),["MoneyValue"]:c12(),["OrderDraftLineItemInventoryDemandRequest"]:c13(),["OrderDraftLineItemTaxCalculationRequest"]:c14(),["OrderDraftLineItemTaxRequest"]:c15(),["OrderDraftTaxComponentRequest"]:c16(),["OrderDraftTaxJurisdictionRequest"]:c17(),["OrderLineItemModifierRequest"]:c18(),["SharedCodec168"]:c19(),["SharedCodec169"]:c20(),["SharedCodec170"]:c21(),["SharedCodec171"]:c22(),["SharedCodec172"]:c23(),["SharedCodec173"]:c24(),["SharedCodec174"]:c25(),["SharedCodec175"]:c26(),["SharedCodec176"]:c27(),["SharedCodec177"]:c28(),["SharedCodec178"]:c29(),["SharedCodec179"]:c30(),["SharedCodec246"]:c31(),["SharedCodec247"]:c32(),["SharedCodec248"]:c33(),["SharedCodec249"]:c34(),["SharedCodec369"]:c35(),["SubscribedLineRequest"]:c36(),["TextModifierRequest"]:c37(),["Weight"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryOptionsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
