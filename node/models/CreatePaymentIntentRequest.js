import { d357 as c0 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10131 as c3, d10132 as c4 } from '../descriptors/data/470.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10018 as c5 } from '../descriptors/data/464.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8272 as c6, d8271 as c7 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9042 as c8 } from '../descriptors/data/409.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10173 as c9, d10174 as c10, d10175 as c11, d10176 as c12, d10177 as c13, d10178 as c14, d10179 as c15, d10180 as c16, d10181 as c17, d10182 as c18, d10183 as c19, d10184 as c20, d10185 as c21, d10186 as c22, d10187 as c23, d10188 as c24 } from '../descriptors/data/473.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d357 as d357 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d357;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeMoney"]:c6(),["PlatformFeeRequest"]:c7(),["SharedCodec217"]:c8(),["SharedCodec517"]:c9(),["SharedCodec518"]:c10(),["SharedCodec519"]:c11(),["SharedCodec520"]:c12(),["SharedCodec521"]:c13(),["SharedCodec522"]:c14(),["SharedCodec523"]:c15(),["SharedCodec524"]:c16(),["SharedCodec525"]:c17(),["SharedCodec526"]:c18(),["SharedCodec527"]:c19(),["SharedCodec528"]:c20(),["SharedCodec529"]:c21(),["SharedCodec530"]:c22(),["SharedCodec531"]:c23(),["SharedCodec532"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
