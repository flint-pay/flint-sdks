import { d7647 as c0, d7643 as c1, d7645 as c11 } from '../descriptors/data/365.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7648 as c2, d7650 as c5 } from '../descriptors/data/366.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d296 as c3 } from '../descriptors/data/16.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c4 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c6 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7660 as c7, d7661 as c8, d7662 as c9, d7663 as c10 } from '../descriptors/data/367.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d296 as d296 } from '../descriptors/data/16.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["CreateModifierSetRequest"]:c3(),["MetadataRequest"]:c4(),["ModifierOverrideRequest"]:c5(),["MoneyValue"]:c6(),["SharedCodec320"]:c7(),["SharedCodec321"]:c8(),["SharedCodec322"]:c9(),["SharedCodec323"]:c10(),["TextModifierConfigRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
