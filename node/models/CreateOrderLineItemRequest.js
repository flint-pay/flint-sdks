import { d3612 as c0, d3613 as c2, d3614 as c3 } from '../descriptors/data/148.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2986 as c1 } from '../descriptors/data/112.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3615 as c4, d3616 as c5, d3617 as c6, d3618 as c8, d3619 as c9, d3620 as c10, d3621 as c11, d3622 as c12, d3632 as c13, d3633 as c14, d3634 as c15, d3635 as c16, d3636 as c17, d3623 as c18, d3624 as c19, d3625 as c20, d3626 as c21, d3627 as c22, d3628 as c23, d3629 as c24, d3630 as c25, d3631 as c27 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c7 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3184 as c26 } from '../descriptors/data/126.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3030 as c28, d3031 as c29 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3612 as d3612 } from '../descriptors/data/148.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["Dimensions"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequest"]:c5(),["LineItemFulfillmentRequest"]:c6(),["MoneyValue"]:c7(),["OrderDraftLineItemInventoryDemandRequest"]:c8(),["OrderDraftLineItemTaxCalculationRequest"]:c9(),["OrderDraftLineItemTaxRequest"]:c10(),["OrderDraftTaxComponentRequest"]:c11(),["OrderDraftTaxJurisdictionRequest"]:c12(),["OrderLineItemModifierRequest"]:c13(),["SharedCodec163"]:c14(),["SharedCodec164"]:c15(),["SharedCodec165"]:c16(),["SharedCodec166"]:c17(),["SharedCodec167"]:c18(),["SharedCodec168"]:c19(),["SharedCodec169"]:c20(),["SharedCodec170"]:c21(),["SharedCodec171"]:c22(),["SharedCodec172"]:c23(),["SharedCodec173"]:c24(),["SharedCodec174"]:c25(),["SharedCodec364"]:c26(),["SubscribedLineRequest"]:c27(),["TextModifierRequest"]:c28(),["Weight"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
