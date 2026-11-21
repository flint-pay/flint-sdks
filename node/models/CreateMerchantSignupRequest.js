import { d333 as c0 } from '../descriptors/data/18.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9801 as c1 } from '../descriptors/data/453.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d333 as d333 } from '../descriptors/data/18.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d333;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMerchantSignupRequest"]:c0(),["MerchantSignupOwnerRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMerchantSignupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
