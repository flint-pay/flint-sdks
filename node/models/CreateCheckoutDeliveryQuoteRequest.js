import { d6616 as c0, d6617 as c1 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d205 as c2 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6536 as c3, d6537 as c4, d6542 as c5, d6538 as c20, d6543 as c21, d6544 as c22, d6539 as c23, d6540 as c24 } from '../descriptors/data/302.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d476 as c6 } from '../descriptors/data/28.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6621 as c7, d6622 as c9, d6623 as c10, d6624 as c11, d6625 as c12, d6626 as c13, d6627 as c14, d6628 as c15, d6629 as c16, d6630 as c17, d6631 as c18, d6632 as c19 } from '../descriptors/data/307.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c8 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d205 as d205 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d205;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec127"]:c9(),["SharedCodec128"]:c10(),["SharedCodec129"]:c11(),["SharedCodec130"]:c12(),["SharedCodec131"]:c13(),["SharedCodec132"]:c14(),["SharedCodec133"]:c15(),["SharedCodec134"]:c16(),["SharedCodec135"]:c17(),["SharedCodec136"]:c18(),["SharedCodec137"]:c19(),["SharedCodec510"]:c20(),["SharedCodec511"]:c21(),["SharedCodec512"]:c22(),["SharedCodec513"]:c23(),["SharedCodec514"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
