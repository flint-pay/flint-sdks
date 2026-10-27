import { d4084 as c0 } from '../descriptors/data/174.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d693 as c1 } from '../descriptors/data/30.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4012 as c2, d4013 as c3, d4014 as c4, d4015 as c5, d4011 as c6, d4008 as c7, d4009 as c8, d4010 as c9 } from '../descriptors/data/170.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4075 as c10, d4076 as c11, d4077 as c12, d4078 as c13, d4079 as c14, d4080 as c15, d4081 as c16, d4082 as c17, d4083 as c18 } from '../descriptors/data/173.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d693 as d693 } from '../descriptors/data/30.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d693;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventoryReservationTransitionRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec147"]:c3(),["SharedCodec148"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec837"]:c7(),["SharedCodec838"]:c8(),["SharedCodec839"]:c9(),["SharedCodec850"]:c10(),["SharedCodec851"]:c11(),["SharedCodec852"]:c12(),["SharedCodec853"]:c13(),["SharedCodec854"]:c14(),["SharedCodec855"]:c15(),["SharedCodec856"]:c16(),["SharedCodec857"]:c17(),["SharedCodec858"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
