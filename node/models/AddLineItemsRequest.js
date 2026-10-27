import { d5 as c0 } from '../descriptors/data/0.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3612 as c1, d3613 as c3, d3614 as c4 } from '../descriptors/data/148.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2986 as c2 } from '../descriptors/data/112.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3615 as c5, d3616 as c6, d3617 as c7, d3618 as c9, d3619 as c10, d3620 as c11, d3621 as c12, d3622 as c13, d3632 as c14, d3633 as c15, d3634 as c16, d3635 as c17, d3636 as c18, d3623 as c19, d3624 as c20, d3625 as c21, d3626 as c22, d3627 as c23, d3628 as c24, d3629 as c25, d3630 as c26, d3631 as c28 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c8 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3184 as c27 } from '../descriptors/data/126.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3030 as c29, d3031 as c30 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5 as d5 } from '../descriptors/data/0.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["Dimensions"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequest"]:c6(),["LineItemFulfillmentRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequest"]:c10(),["OrderDraftLineItemTaxRequest"]:c11(),["OrderDraftTaxComponentRequest"]:c12(),["OrderDraftTaxJurisdictionRequest"]:c13(),["OrderLineItemModifierRequest"]:c14(),["SharedCodec163"]:c15(),["SharedCodec164"]:c16(),["SharedCodec165"]:c17(),["SharedCodec166"]:c18(),["SharedCodec167"]:c19(),["SharedCodec168"]:c20(),["SharedCodec169"]:c21(),["SharedCodec170"]:c22(),["SharedCodec171"]:c23(),["SharedCodec172"]:c24(),["SharedCodec173"]:c25(),["SharedCodec174"]:c26(),["SharedCodec364"]:c27(),["SubscribedLineRequest"]:c28(),["TextModifierRequest"]:c29(),["Weight"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
