import { d407 as c0 } from '../descriptors/data/24.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8007 as c1, d8008 as c4, d8009 as c5 } from '../descriptors/data/348.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7983 as c2 } from '../descriptors/data/347.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10835 as c3, d10836 as c6, d10837 as c7 } from '../descriptors/data/514.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d407 as d407 } from '../descriptors/data/24.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d407;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec341"]:c1(),["SharedCodec5"]:c2(),["SharedCodec577"]:c3(),["SharedCodec578"]:c4(),["SharedCodec579"]:c5(),["SharedCodec580"]:c6(),["SharedCodec581"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
