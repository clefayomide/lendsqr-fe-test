import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../button/button";
import { ThreeDots } from "@/assets";
import style from "./drop-down.module.scss";
import { DropdownPropType } from "@/types";

const DropDown = ({ trigger, options }: DropdownPropType) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handler = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [handler]);
  return (
    <div ref={dropdownRef} className={style.dropdown}>
      <div className={style.dropdown_trigger_container}>
        <Button
          id="dropdown-button"
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls="dropdown-menu"
          onClick={handleOpen}
          className={style.trigger}
        >
          {trigger || <ThreeDots />}
        </Button>
      </div>

      {open && (
        <div className={style.dropdown_content_container}>
          <ul role="menu" id="dropdown-menu" aria-labelledby="dropdown-button">
            {options.map(({ id, label }) => (
              <li>
                <Button className={style.dropdown_action_btn} key={id}>
                  {label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const DropdownAction = ({ children }: { children: ReactNode }) => {
  return <div className={style.dropdown_action_content}>{children}</div>;
};

DropDown.DropdownAction = DropdownAction;

export default DropDown;
