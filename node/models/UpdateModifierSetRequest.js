import { d9814 as c0, d9815 as c2, d9817 as c4, d9818 as c6, d9819 as c7, d9820 as c11, d9810 as c14 } from '../descriptors/data/454.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c1, d8048 as c8, d8049 as c9, d8047 as c10 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9809 as c3 } from '../descriptors/data/453.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c5 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9825 as c12, d9826 as c13 } from '../descriptors/data/455.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7770 as c15 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7770 as d7770 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7770;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["MetadataRequest"]:c1(),["ModifierOverrideRequest"]:c2(),["ModifierRequest"]:c3(),["ModifierSetGroupRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec1833"]:c6(),["SharedCodec1834"]:c7(),["SharedCodec3069"]:c8(),["SharedCodec3070"]:c9(),["SharedCodec3071"]:c10(),["SharedCodec3131"]:c11(),["SharedCodec474"]:c12(),["SharedCodec475"]:c13(),["TextModifierConfigRequest"]:c14(),["UpdateModifierSetRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
