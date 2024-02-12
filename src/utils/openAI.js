import OpenAI from 'openai';
import { openAI_Key } from './Constant';

const openAI = new OpenAI({
  apiKey:openAI_Key,
  dangerouslyAllowBrowser: true , // This is the default and can be omitted
});

export default openAI; 