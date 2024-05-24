<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

const model = defineModel();

const editor = useEditor({
  content: model.value?.toString(),
  extensions: [StarterKit, Image, Link],
  onUpdate: ({ editor }) => {
    const html: string = editor.getHTML();
    model.value = html;
  },
});

Image.configure({
  inline: true,
});

Link.configure({
  openOnClick: false,
});

function addImage() {
  const url = window.prompt("URL");

  if (url && editor.value) {
    editor.value.chain().focus().setImage({ src: url }).run();
  }
}

// An alternative for dynamic Tailwind classes.
// Dyanmically created Tailwind classes will get purged by Tailwind's JIT.
const tiptapClasses: string[] = [
  "[&_pre]:p-2 [&_pre]:rounded [&_pre]:bg-black [&_pre]:text-white",
  "[&_.tiptap>:not(pre)_code]:bg-slate-200 [&_.tiptap>:not(pre)_code]:rounded [&_.tiptap>:not(pre)_code]:px-2 [&_.tiptap>:not(pre)_code]:py-1",
  "[&_code]:font-xs",
  "[&_img]:rounded-xl",
  "[&_a]:underline",
  "[&_strong]:font-bold",
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 p-2 bg-white rounded-md shadow">
      <BaseButton @click="addImage" size="sm"> Add image url &#43;</BaseButton>
    </div>

    <div :class="tiptapClasses" v-if="editor">
      <EditorContent :editor="editor" />
    </div>
  </div>
</template>
