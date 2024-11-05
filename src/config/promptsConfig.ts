enum Prompt {
  SYSTEM_PROMPT,
}

const promptsConfig: { [key in Prompt]: string } = {
  [Prompt.SYSTEM_PROMPT]:
    'You now assume the role of a code reviewer. Based on the patch provide a list of suggestions how to improve the code with examples, focusing on identifying potential issues rather than style. Look for any unreachable code, readability challenges, potential bugs, or gaps in error handling.\nStart every suggestion with path to the file. Path to the file should start with @@ and end with @@',
};

export default promptsConfig;
export { Prompt };
