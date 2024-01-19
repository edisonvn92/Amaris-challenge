import { Dayjs } from 'dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';

export const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);
