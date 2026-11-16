import { d866 as c0 } from '../descriptors/data/47.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8773 as c1 } from '../descriptors/data/394.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8774 as c2, d8775 as c3, d8776 as c4, d8777 as c5, d8778 as c6, d8779 as c7, d8780 as c8, d8781 as c9, d8782 as c10, d8783 as c11, d8784 as c12, d8785 as c13, d8786 as c14, d8787 as c15, d8788 as c16, d8789 as c17 } from '../descriptors/data/395.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d866 as d866 } from '../descriptors/data/47.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d866;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec417"]:c1(),["SharedCodec418"]:c2(),["SharedCodec419"]:c3(),["SharedCodec420"]:c4(),["SharedCodec421"]:c5(),["SharedCodec422"]:c6(),["SharedCodec423"]:c7(),["SharedCodec424"]:c8(),["SharedCodec425"]:c9(),["SharedCodec426"]:c10(),["SharedCodec427"]:c11(),["SharedCodec428"]:c12(),["SharedCodec429"]:c13(),["SharedCodec430"]:c14(),["SharedCodec431"]:c15(),["SharedCodec432"]:c16(),["SharedCodec433"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
