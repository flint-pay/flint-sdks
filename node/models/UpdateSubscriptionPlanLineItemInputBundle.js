import { d8014 as c0 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c1 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8234 as c2 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10875 as c3, d10876 as c4 } from '../descriptors/data/512.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8689 as c5, d8681 as c6, d8690 as c7, d8682 as c8, d8683 as c9, d8691 as c10, d8692 as c11, d8693 as c12 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7944 as c13 } from '../descriptors/data/342.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7800 as c14 } from '../descriptors/data/330.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7800 as d7800 } from '../descriptors/data/330.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7800;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec2954"]:c3(),["SharedCodec2955"]:c4(),["SharedCodec479"]:c5(),["SharedCodec480"]:c6(),["SharedCodec481"]:c7(),["SharedCodec482"]:c8(),["SharedCodec483"]:c9(),["SharedCodec495"]:c10(),["SharedCodec496"]:c11(),["SharedCodec497"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemInputBundle"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
