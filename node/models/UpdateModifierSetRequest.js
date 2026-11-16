import { d9565 as c0, d9566 as c2, d9560 as c3, d9568 as c4, d9569 as c6, d9561 as c14 } from '../descriptors/data/437.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c1, d7859 as c8, d7860 as c9, d7858 as c10 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c5 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9570 as c7, d9571 as c11, d9576 as c12, d9577 as c13 } from '../descriptors/data/438.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7607 as c15 } from '../descriptors/data/319.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7607 as d7607 } from '../descriptors/data/319.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7607;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["MetadataRequest"]:c1(),["ModifierOverrideRequest"]:c2(),["ModifierRequest"]:c3(),["ModifierSetGroupRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec1812"]:c6(),["SharedCodec1813"]:c7(),["SharedCodec3066"]:c8(),["SharedCodec3067"]:c9(),["SharedCodec3068"]:c10(),["SharedCodec3122"]:c11(),["SharedCodec487"]:c12(),["SharedCodec488"]:c13(),["TextModifierConfigRequest"]:c14(),["UpdateModifierSetRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
