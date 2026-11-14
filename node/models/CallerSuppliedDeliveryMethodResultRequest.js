import { d6616 as c0, d6617 as c1 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6621 as c2, d6622 as c4, d6623 as c5, d6624 as c6, d6625 as c7, d6626 as c8, d6627 as c9, d6628 as c10, d6629 as c11, d6630 as c12, d6631 as c13, d6632 as c14 } from '../descriptors/data/307.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6616 as d6616 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6616;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec127"]:c4(),["SharedCodec128"]:c5(),["SharedCodec129"]:c6(),["SharedCodec130"]:c7(),["SharedCodec131"]:c8(),["SharedCodec132"]:c9(),["SharedCodec133"]:c10(),["SharedCodec134"]:c11(),["SharedCodec135"]:c12(),["SharedCodec136"]:c13(),["SharedCodec137"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
