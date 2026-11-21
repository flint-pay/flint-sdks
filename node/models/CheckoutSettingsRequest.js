import { d10840 as c0, d10841 as c1 } from '../descriptors/data/515.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d211 as c2 } from '../descriptors/data/9.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d211 as d211 } from '../descriptors/data/9.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d211;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettingsRequest"]:c0(),["CheckoutSavedPaymentDetailsSettingsRequest"]:c1(),["CheckoutSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
