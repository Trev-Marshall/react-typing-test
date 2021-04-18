import { useTyping } from '../state/context';

export const ResetBtn = () => {
  const {
    onReset
  } = useTyping();
  return (
    <>
    <button onClick={onReset}>Reset</button>
    </>
  )
}