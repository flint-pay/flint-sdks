import { d8726 as c0, d8730 as c1, d8731 as c3, d8732 as c4, d8733 as c5, d8734 as c6 } from '../descriptors/data/386.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8735 as c7, d8736 as c8, d8737 as c9, d8738 as c10, d8739 as c11, d8740 as c12, d8741 as c13 } from '../descriptors/data/387.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8726 as d8726 } from '../descriptors/data/386.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8726;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec196"]:c3(),["SharedCodec197"]:c4(),["SharedCodec198"]:c5(),["SharedCodec199"]:c6(),["SharedCodec200"]:c7(),["SharedCodec201"]:c8(),["SharedCodec202"]:c9(),["SharedCodec203"]:c10(),["SharedCodec204"]:c11(),["SharedCodec205"]:c12(),["SharedCodec206"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
