import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10060 as c1 } from '../descriptors/data/468.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10084 as c2, d10085 as c3, d10086 as c4, d10087 as c5, d10088 as c6, d10089 as c7, d10090 as c8, d10091 as c9, d10092 as c10, d10093 as c11, d10094 as c12, d10095 as c13 } from '../descriptors/data/469.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7775 as c14 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7775 as d7775 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7775;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3144"]:c2(),["SharedCodec3145"]:c3(),["SharedCodec3146"]:c4(),["SharedCodec3147"]:c5(),["SharedCodec3148"]:c6(),["SharedCodec3149"]:c7(),["SharedCodec3150"]:c8(),["SharedCodec3151"]:c9(),["SharedCodec3152"]:c10(),["SharedCodec3153"]:c11(),["SharedCodec3154"]:c12(),["SharedCodec3155"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
