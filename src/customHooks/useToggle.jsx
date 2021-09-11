import { useState } from "react";

export default function useToggle() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((status) => !status);
  return [open, handleOpen];
}
