import { d9827 as c0, d9823 as c1, d9828 as c2, d9825 as c10 } from '../descriptors/data/454.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c3 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9830 as c4, d9840 as c6, d9841 as c7, d9842 as c8, d9843 as c9 } from '../descriptors/data/455.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c5 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9828 as d9828 } from '../descriptors/data/454.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9828;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["MetadataRequest"]:c3(),["ModifierOverrideRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec478"]:c6(),["SharedCodec479"]:c7(),["SharedCodec480"]:c8(),["SharedCodec481"]:c9(),["TextModifierConfigRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
