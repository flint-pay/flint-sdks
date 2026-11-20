import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10063 as c1 } from '../descriptors/data/469.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10087 as c2, d10088 as c3, d10089 as c4, d10090 as c5, d10091 as c6, d10092 as c7, d10093 as c8, d10094 as c9, d10095 as c10, d10096 as c11, d10097 as c12, d10098 as c13 } from '../descriptors/data/470.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7777 as c14 } from '../descriptors/data/328.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7777 as d7777 } from '../descriptors/data/328.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3146"]:c2(),["SharedCodec3147"]:c3(),["SharedCodec3148"]:c4(),["SharedCodec3149"]:c5(),["SharedCodec3150"]:c6(),["SharedCodec3151"]:c7(),["SharedCodec3152"]:c8(),["SharedCodec3153"]:c9(),["SharedCodec3154"]:c10(),["SharedCodec3155"]:c11(),["SharedCodec3156"]:c12(),["SharedCodec3157"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
