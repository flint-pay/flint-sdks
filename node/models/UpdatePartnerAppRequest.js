import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10075 as c1 } from '../descriptors/data/468.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10099 as c2, d10100 as c3, d10101 as c4, d10102 as c5, d10103 as c6, d10104 as c7, d10105 as c8, d10106 as c9, d10107 as c10, d10108 as c11, d10109 as c12, d10110 as c13 } from '../descriptors/data/469.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7786 as c14 } from '../descriptors/data/328.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7786 as d7786 } from '../descriptors/data/328.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7786;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3154"]:c2(),["SharedCodec3155"]:c3(),["SharedCodec3156"]:c4(),["SharedCodec3157"]:c5(),["SharedCodec3158"]:c6(),["SharedCodec3159"]:c7(),["SharedCodec3160"]:c8(),["SharedCodec3161"]:c9(),["SharedCodec3162"]:c10(),["SharedCodec3163"]:c11(),["SharedCodec3164"]:c12(),["SharedCodec3165"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
