import { d4084 as c0 } from '../descriptors/data/174.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4012 as c1, d4013 as c3, d4014 as c4, d4015 as c5, d4011 as c6, d4008 as c7, d4009 as c8, d4010 as c9 } from '../descriptors/data/170.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d708 as c2 } from '../descriptors/data/30.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4114 as c10, d4115 as c11, d4116 as c12, d4117 as c13, d4118 as c14, d4119 as c15 } from '../descriptors/data/175.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d708 as d708 } from '../descriptors/data/30.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d708;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequestReceive"]:c2(),["SharedCodec147"]:c3(),["SharedCodec148"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec837"]:c7(),["SharedCodec838"]:c8(),["SharedCodec839"]:c9(),["SharedCodec870"]:c10(),["SharedCodec871"]:c11(),["SharedCodec872"]:c12(),["SharedCodec873"]:c13(),["SharedCodec874"]:c14(),["SharedCodec875"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequestReceive(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
