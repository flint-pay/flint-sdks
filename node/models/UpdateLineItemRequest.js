import { d8046 as c0, d8047 as c4 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c1 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9902 as c2 } from '../descriptors/data/459.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9911 as c3 } from '../descriptors/data/460.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8143 as c5 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9949 as c6, d9950 as c7, d9951 as c8, d9952 as c9, d9953 as c10 } from '../descriptors/data/461.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9954 as c11, d9955 as c12, d9956 as c13, d9957 as c14, d9958 as c16 } from '../descriptors/data/462.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9811 as c15 } from '../descriptors/data/454.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8722 as c17, d8723 as c19 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8714 as c18, d8715 as c20, d8716 as c21 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9999 as c22, d10000 as c23, d10001 as c24 } from '../descriptors/data/464.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7976 as c25 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7763 as c26 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7763 as d7763 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7763;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec3071"]:c4(),["SharedCodec3074"]:c5(),["SharedCodec3112"]:c6(),["SharedCodec3113"]:c7(),["SharedCodec3114"]:c8(),["SharedCodec3115"]:c9(),["SharedCodec3116"]:c10(),["SharedCodec3117"]:c11(),["SharedCodec3118"]:c12(),["SharedCodec3119"]:c13(),["SharedCodec3120"]:c14(),["SharedCodec3121"]:c15(),["SharedCodec3122"]:c16(),["SharedCodec481"]:c17(),["SharedCodec482"]:c18(),["SharedCodec483"]:c19(),["SharedCodec484"]:c20(),["SharedCodec485"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
