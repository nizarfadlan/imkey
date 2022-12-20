import { useToggle } from './context';

const style = {
  overlay: `bg-black fixed h-screen left-0 opacity-60 top-0 w-screen z-30 md:hidden`,
}

export default function Overlay() {
  const { open } = useToggle();
  return <div className={open ? style.overlay : ''} />;
}
