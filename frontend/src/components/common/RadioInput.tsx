/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export interface RadioInputProps {
  disabled?: boolean;
  checked: boolean;
  onClick: () => void;
}

export const RadioInput: React.FC<
  RadioInputProps & React.HTMLProps<HTMLDivElement>
> = ({ onClick, checked, disabled, children, ...props }) => {
  return (
    <div
      css={css`
        text-align: left;
        display: flex;
        cursor: pointer;
        user-select: none;
        ${disabled &&
        css`
           {
            pointer-events: none;
            cursor: not-allowed;
          }
        `}
      `}
      onClick={onClick}
      {...props}
    >
      <div
        css={css`
          position: relative;
          display: flex;
          padding-left: 26px;
          align-self: center;
          cursor: pointer;
          &::before {
            width: 18px;
            height: 18px;
            border: 1px solid #c4c4c4;
            border-radius: 100%;
            content: "";
            background: ${disabled ? "#959da5" : "#c4c4c4"};
            box-sizing: border-box;
            display: block;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            transition: border 120ms ease-in-out;
          }
          &::after {
            width: 10px;
            height: 10px;
            box-sizing: border-box;
            background-color: ${disabled ? "#959da5" : "#627bff"};
            border-radius: 100%;
            display: block;
            position: absolute;
            top: 50%;
            left: 4px;
            content: "";
            opacity: 0;
            transform: translateY(-50%) scale(0, 0);
            transition: transform 120ms ease-in-out, opacity 120ms ease-in-out;
          }
          ${checked &&
          css`
            &::before {
              border-color: #627bff;
              background: white;
            }
            &::after {
              opacity: 1;
              transform: translateY(-50%) scale(1, 1);
            }
          `}
        `}
      >
        {children}
      </div>
    </div>
  );
};
