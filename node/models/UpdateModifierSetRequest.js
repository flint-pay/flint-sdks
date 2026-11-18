import { d9769 as c0, d9770 as c2, d9764 as c3, d9765 as c14 } from '../descriptors/data/447.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c1, d8016 as c8, d8017 as c9, d8015 as c10 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9772 as c4, d9773 as c6, d9774 as c7, d9775 as c11, d9780 as c12, d9781 as c13 } from '../descriptors/data/448.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c5 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7760 as c15 } from '../descriptors/data/327.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7760 as d7760 } from '../descriptors/data/327.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["MetadataRequest"]:c1(),["ModifierOverrideRequest"]:c2(),["ModifierRequest"]:c3(),["ModifierSetGroupRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec1831"]:c6(),["SharedCodec1832"]:c7(),["SharedCodec3069"]:c8(),["SharedCodec3070"]:c9(),["SharedCodec3071"]:c10(),["SharedCodec3125"]:c11(),["SharedCodec472"]:c12(),["SharedCodec473"]:c13(),["TextModifierConfigRequest"]:c14(),["UpdateModifierSetRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
