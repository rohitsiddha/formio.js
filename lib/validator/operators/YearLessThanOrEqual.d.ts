export class YearLessThanOrEqualOperator extends DateLessThanOrEqualOperator {
    static get presetArguments(): {
        granularity: {
            valueSource: string;
            stringInput: string;
        };
    };
    constructor(context?: {});
}
import { DateLessThanOrEqualOperator } from "./DateLessThanOrEqual";