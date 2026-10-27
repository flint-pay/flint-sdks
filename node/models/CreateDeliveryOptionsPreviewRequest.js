import { d135 as c0 } from '../descriptors/data/5.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3612 as c1, d3603 as c5, d3613 as c7, d3614 as c8 } from '../descriptors/data/148.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3165 as c2, d3151 as c3, d3152 as c33, d3153 as c34 } from '../descriptors/data/124.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3179 as c4, d3180 as c31, d3181 as c32, d3184 as c35 } from '../descriptors/data/126.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2986 as c6 } from '../descriptors/data/112.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3615 as c9, d3616 as c10, d3617 as c11, d3618 as c13, d3619 as c14, d3620 as c15, d3621 as c16, d3622 as c17, d3632 as c18, d3633 as c19, d3634 as c20, d3635 as c21, d3636 as c22, d3623 as c23, d3624 as c24, d3625 as c25, d3626 as c26, d3627 as c27, d3628 as c28, d3629 as c29, d3630 as c30, d3631 as c36 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c12 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3030 as c37, d3031 as c38 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d135 as d135 } from '../descriptors/data/5.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryOptionsPreviewRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryBuyerLocationRequest"]:c3(),["DeliveryCoordinateRequest"]:c4(),["DeliveryPreviewRoutingSource"]:c5(),["Dimensions"]:c6(),["GiftCardPurchaseDetailsRequest"]:c7(),["GiftCardPurchaseRecipientRequest"]:c8(),["ImageReferenceRequest"]:c9(),["LineItemFulfillmentOriginRequest"]:c10(),["LineItemFulfillmentRequest"]:c11(),["MoneyValue"]:c12(),["OrderDraftLineItemInventoryDemandRequest"]:c13(),["OrderDraftLineItemTaxCalculationRequest"]:c14(),["OrderDraftLineItemTaxRequest"]:c15(),["OrderDraftTaxComponentRequest"]:c16(),["OrderDraftTaxJurisdictionRequest"]:c17(),["OrderLineItemModifierRequest"]:c18(),["SharedCodec163"]:c19(),["SharedCodec164"]:c20(),["SharedCodec165"]:c21(),["SharedCodec166"]:c22(),["SharedCodec167"]:c23(),["SharedCodec168"]:c24(),["SharedCodec169"]:c25(),["SharedCodec170"]:c26(),["SharedCodec171"]:c27(),["SharedCodec172"]:c28(),["SharedCodec173"]:c29(),["SharedCodec174"]:c30(),["SharedCodec241"]:c31(),["SharedCodec242"]:c32(),["SharedCodec243"]:c33(),["SharedCodec244"]:c34(),["SharedCodec364"]:c35(),["SubscribedLineRequest"]:c36(),["TextModifierRequest"]:c37(),["Weight"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryOptionsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
