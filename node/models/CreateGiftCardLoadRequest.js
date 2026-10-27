import { d158 as c0 } from '../descriptors/data/8.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3900 as c1 } from '../descriptors/data/164.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3942 as c3, d3943 as c4, d3944 as c5, d3941 as c23, d3945 as c24, d3946 as c25, d3947 as c26 } from '../descriptors/data/167.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3909 as c6, d3910 as c7, d3911 as c8, d3912 as c9, d3913 as c10, d3914 as c11, d3915 as c12, d3916 as c13 } from '../descriptors/data/165.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3917 as c14, d3918 as c15, d3919 as c16, d3920 as c17, d3921 as c18, d3922 as c19, d3923 as c20, d3924 as c21, d3925 as c22 } from '../descriptors/data/166.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d158 as d158 } from '../descriptors/data/8.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d158;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["GiftCardFundingSource"]:c1(),["MoneyValue"]:c2(),["SharedCodec119"]:c3(),["SharedCodec120"]:c4(),["SharedCodec121"]:c5(),["SharedCodec122"]:c6(),["SharedCodec123"]:c7(),["SharedCodec124"]:c8(),["SharedCodec125"]:c9(),["SharedCodec126"]:c10(),["SharedCodec127"]:c11(),["SharedCodec128"]:c12(),["SharedCodec129"]:c13(),["SharedCodec130"]:c14(),["SharedCodec131"]:c15(),["SharedCodec132"]:c16(),["SharedCodec133"]:c17(),["SharedCodec134"]:c18(),["SharedCodec135"]:c19(),["SharedCodec136"]:c20(),["SharedCodec137"]:c21(),["SharedCodec138"]:c22(),["SharedCodec139"]:c23(),["SharedCodec140"]:c24(),["SharedCodec141"]:c25(),["SharedCodec142"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
