import { d372 as c0 } from '../descriptors/data/20.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3870 as c1, d3871 as c2, d3872 as c3, d3873 as c4, d3874 as c5, d3875 as c6, d3876 as c7, d3877 as c8, d3878 as c9, d3879 as c10, d3880 as c11, d3881 as c13, d3882 as c14 } from '../descriptors/data/163.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3890 as c12 } from '../descriptors/data/164.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d372 as d372 } from '../descriptors/data/20.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d372;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec355"]:c1(),["SharedCodec356"]:c2(),["SharedCodec357"]:c3(),["SharedCodec358"]:c4(),["SharedCodec359"]:c5(),["SharedCodec360"]:c6(),["SharedCodec361"]:c7(),["SharedCodec362"]:c8(),["SharedCodec363"]:c9(),["SharedCodec364"]:c10(),["SharedCodec365"]:c11(),["SharedCodec366"]:c12(),["SharedCodec367"]:c13(),["SharedCodec368"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
