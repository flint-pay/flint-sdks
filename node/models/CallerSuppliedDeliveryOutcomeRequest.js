import { d6617 as c0 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6621 as c1, d6622 as c3, d6623 as c4, d6624 as c5, d6625 as c6, d6626 as c7, d6627 as c8, d6628 as c9, d6629 as c10, d6630 as c11, d6631 as c12, d6632 as c13 } from '../descriptors/data/307.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6617 as d6617 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6617;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec127"]:c3(),["SharedCodec128"]:c4(),["SharedCodec129"]:c5(),["SharedCodec130"]:c6(),["SharedCodec131"]:c7(),["SharedCodec132"]:c8(),["SharedCodec133"]:c9(),["SharedCodec134"]:c10(),["SharedCodec135"]:c11(),["SharedCodec136"]:c12(),["SharedCodec137"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
