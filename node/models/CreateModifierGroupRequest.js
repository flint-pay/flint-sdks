import { d333 as c0 } from '../descriptors/data/18.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9808 as c1 } from '../descriptors/data/453.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c2 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c3 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9810 as c4 } from '../descriptors/data/454.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d333 as d333 } from '../descriptors/data/18.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d333;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["TextModifierConfigRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
