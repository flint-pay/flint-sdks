import { d6618 as c0 } from '../descriptors/data/305.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6619 as c1, d6623 as c7, d6624 as c9, d6625 as c10, d6626 as c11, d6627 as c12, d6628 as c13, d6629 as c14, d6630 as c15, d6631 as c16, d6632 as c17 } from '../descriptors/data/306.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d201 as c2 } from '../descriptors/data/9.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6538 as c3 } from '../descriptors/data/301.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6539 as c4, d6544 as c5, d6540 as c20, d6545 as c21, d6546 as c22, d6541 as c23, d6542 as c24 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d475 as c6 } from '../descriptors/data/28.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c8 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6633 as c18, d6634 as c19 } from '../descriptors/data/307.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d201 as d201 } from '../descriptors/data/9.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d201;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec122"]:c9(),["SharedCodec123"]:c10(),["SharedCodec124"]:c11(),["SharedCodec125"]:c12(),["SharedCodec126"]:c13(),["SharedCodec127"]:c14(),["SharedCodec128"]:c15(),["SharedCodec129"]:c16(),["SharedCodec130"]:c17(),["SharedCodec131"]:c18(),["SharedCodec132"]:c19(),["SharedCodec508"]:c20(),["SharedCodec509"]:c21(),["SharedCodec510"]:c22(),["SharedCodec511"]:c23(),["SharedCodec512"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
