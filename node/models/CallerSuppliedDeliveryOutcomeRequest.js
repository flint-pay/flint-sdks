import { d8759 as c0, d8763 as c1, d8764 as c3, d8765 as c4, d8766 as c5, d8767 as c6, d8768 as c7, d8769 as c8 } from '../descriptors/data/391.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8770 as c9, d8771 as c10, d8772 as c11, d8773 as c12, d8774 as c13 } from '../descriptors/data/392.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8759 as d8759 } from '../descriptors/data/391.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8759;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec196"]:c3(),["SharedCodec197"]:c4(),["SharedCodec198"]:c5(),["SharedCodec199"]:c6(),["SharedCodec200"]:c7(),["SharedCodec201"]:c8(),["SharedCodec202"]:c9(),["SharedCodec203"]:c10(),["SharedCodec204"]:c11(),["SharedCodec205"]:c12(),["SharedCodec206"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
