import { d164 as c0 } from '../descriptors/data/8.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3900 as c1 } from '../descriptors/data/164.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3955 as c2, d3942 as c5, d3943 as c6, d3944 as c7, d3941 as c25, d3945 as c26, d3946 as c27, d3947 as c28 } from '../descriptors/data/167.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3968 as c3, d3975 as c29 } from '../descriptors/data/168.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c4 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3909 as c8, d3910 as c9, d3911 as c10, d3912 as c11, d3913 as c12, d3914 as c13, d3915 as c14, d3916 as c15 } from '../descriptors/data/165.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3917 as c16, d3918 as c17, d3919 as c18, d3920 as c19, d3921 as c20, d3922 as c21, d3923 as c22, d3924 as c23, d3925 as c24 } from '../descriptors/data/166.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d164 as d164 } from '../descriptors/data/8.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d164;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardNotificationRecipient"]:c2(),["InitialGiftCardFunding"]:c3(),["MoneyValue"]:c4(),["SharedCodec119"]:c5(),["SharedCodec120"]:c6(),["SharedCodec121"]:c7(),["SharedCodec122"]:c8(),["SharedCodec123"]:c9(),["SharedCodec124"]:c10(),["SharedCodec125"]:c11(),["SharedCodec126"]:c12(),["SharedCodec127"]:c13(),["SharedCodec128"]:c14(),["SharedCodec129"]:c15(),["SharedCodec130"]:c16(),["SharedCodec131"]:c17(),["SharedCodec132"]:c18(),["SharedCodec133"]:c19(),["SharedCodec134"]:c20(),["SharedCodec135"]:c21(),["SharedCodec136"]:c22(),["SharedCodec137"]:c23(),["SharedCodec138"]:c24(),["SharedCodec139"]:c25(),["SharedCodec140"]:c26(),["SharedCodec141"]:c27(),["SharedCodec142"]:c28(),["SharedCodec146"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
