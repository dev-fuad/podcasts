/**
 * podcasts
 * input.tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { TextInput, TextInputProps } from "react-native";
import { cn } from "@/lib/utils";

const Input = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      className={cn(
        "border border-gray-300 rounded-lg px-2 pb-1 text-base",
        props.className,
      )}
      cursorColorClassName="accent-blue-500"
      selectionColorClassName="accent-blue-200"
      placeholderTextColorClassName="accent-gray-400 dark:accent-gray-500"
      underlineColorAndroidClassName="accent-transparent"
    />
  );
};

export default Input;
