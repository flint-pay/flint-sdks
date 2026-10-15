import { d690 as c0, d691 as c1, d705 as c2, d694 as c3, d693 as c4, d696 as c5, d695 as c6, d698 as c7, d697 as c8, d700 as c9, d699 as c10, d702 as c11, d701 as c12, d704 as c13, d703 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d690 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationTarget"]:c2(),["SharedCodec209"]:c3(),["SharedCodec210"]:c4(),["SharedCodec211"]:c5(),["SharedCodec212"]:c6(),["SharedCodec213"]:c7(),["SharedCodec214"]:c8(),["SharedCodec215"]:c9(),["SharedCodec216"]:c10(),["SharedCodec217"]:c11(),["SharedCodec218"]:c12(),["SharedCodec219"]:c13(),["SharedCodec220"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
