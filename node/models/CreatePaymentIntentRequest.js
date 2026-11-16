import { d317 as c0 } from '../descriptors/data/18.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7948 as c3, d7949 as c4 } from '../descriptors/data/382.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7837 as c5 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6152 as c6 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c7 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7984 as c8, d7985 as c9, d7986 as c10, d7987 as c11, d7988 as c12, d7989 as c13, d7990 as c14, d7991 as c15, d7992 as c16, d7993 as c17, d7994 as c18, d7995 as c19, d7996 as c20, d7997 as c21 } from '../descriptors/data/384.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7998 as c22 } from '../descriptors/data/385.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d317 as d317 } from '../descriptors/data/18.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d317;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeRequest"]:c6(),["SharedCodec136"]:c7(),["SharedCodec359"]:c8(),["SharedCodec360"]:c9(),["SharedCodec361"]:c10(),["SharedCodec362"]:c11(),["SharedCodec363"]:c12(),["SharedCodec364"]:c13(),["SharedCodec365"]:c14(),["SharedCodec366"]:c15(),["SharedCodec367"]:c16(),["SharedCodec368"]:c17(),["SharedCodec369"]:c18(),["SharedCodec370"]:c19(),["SharedCodec371"]:c20(),["SharedCodec372"]:c21(),["SharedCodec373"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
