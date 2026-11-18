import { d8014 as c0 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c1 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8234 as c2 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8798 as c3, d8794 as c4 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10875 as c5, d10876 as c6, d10877 as c7, d10878 as c8, d10879 as c9, d10880 as c10, d10881 as c11 } from '../descriptors/data/512.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8689 as c12, d8681 as c13, d8690 as c14, d8682 as c15, d8683 as c16, d8691 as c17, d8692 as c18, d8693 as c19 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10899 as c20 } from '../descriptors/data/514.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7944 as c21 } from '../descriptors/data/342.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10899 as d10899 } from '../descriptors/data/514.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10899;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec189"]:c3(),["SharedCodec190"]:c4(),["SharedCodec2954"]:c5(),["SharedCodec2955"]:c6(),["SharedCodec2956"]:c7(),["SharedCodec2957"]:c8(),["SharedCodec2959"]:c9(),["SharedCodec2960"]:c10(),["SharedCodec2961"]:c11(),["SharedCodec479"]:c12(),["SharedCodec480"]:c13(),["SharedCodec481"]:c14(),["SharedCodec482"]:c15(),["SharedCodec483"]:c16(),["SharedCodec495"]:c17(),["SharedCodec496"]:c18(),["SharedCodec497"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
