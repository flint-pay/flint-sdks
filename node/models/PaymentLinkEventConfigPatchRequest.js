import { d10201 as c0 } from '../descriptors/data/474.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10201 as d10201 } from '../descriptors/data/474.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10201;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkEventConfigPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkEventConfigPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
