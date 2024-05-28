// An alternative for dynamic Tailwind classes.
// Dyanmically created Tailwind classes will get purged by Tailwind's JIT.
export const tiptapClasses: string[] = [
  "[&_pre]:p-2 [&_pre]:rounded [&_pre]:bg-black [&_pre]:text-white",
  "[&_.tiptap>:not(pre)_code]:bg-slate-200 [&_.tiptap>:not(pre)_code]:rounded [&_.tiptap>:not(pre)_code]:px-2 [&_.tiptap>:not(pre)_code]:py-1",
  "[&_code]:font-xs",
  "[&_img]:rounded-xl",
  "[&_a]:underline",
  "[&_strong]:font-bold",
];
