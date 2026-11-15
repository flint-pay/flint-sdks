import { d6618 as c0 } from '../descriptors/data/305.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6619 as c1, d6623 as c2, d6624 as c4, d6625 as c5, d6626 as c6, d6627 as c7, d6628 as c8, d6629 as c9, d6630 as c10, d6631 as c11, d6632 as c12 } from '../descriptors/data/306.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c3 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6633 as c13, d6634 as c14 } from '../descriptors/data/307.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6618 as d6618 } from '../descriptors/data/305.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6618;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec122"]:c4(),["SharedCodec123"]:c5(),["SharedCodec124"]:c6(),["SharedCodec125"]:c7(),["SharedCodec126"]:c8(),["SharedCodec127"]:c9(),["SharedCodec128"]:c10(),["SharedCodec129"]:c11(),["SharedCodec130"]:c12(),["SharedCodec131"]:c13(),["SharedCodec132"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
