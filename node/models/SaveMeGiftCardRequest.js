import { d1896 as c0 } from '../descriptors/data/94.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9552 as c1, d9553 as c2, d9554 as c3 } from '../descriptors/data/439.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9555 as c4, d9556 as c5 } from '../descriptors/data/440.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1896 as d1896 } from '../descriptors/data/94.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1896;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec2825"]:c1(),["SharedCodec2826"]:c2(),["SharedCodec2827"]:c3(),["SharedCodec2828"]:c4(),["SharedCodec2829"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
