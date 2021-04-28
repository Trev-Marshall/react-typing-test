import { useTyping } from '../state/context';

export const ResetBtn = (prop: any) => {
  const {
    onReset, updateQuote
  } = useTyping();

  return (
    <>
    <button onClick={
      () => {
      onReset();
      console.log(prop.inputRef);
      prop.inputRef.current?.focus();
    }
      }>Reset</button>
    <button onClick={() => {
      onReset();
      updateQuote();
      }}>Initialize quote</button>
    </>
  )
}