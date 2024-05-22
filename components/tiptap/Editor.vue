<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Code from "@tiptap/extension-code";

const editor = useEditor({
  content: `
  <p><strong>These are examples</strong></p>
  <p><i>Use keyboard shortcuts to style the post</i></p>
  <p></p>
  <code>This is a code.</code>
  <p></p>
  <pre><code>div {
 width: 12px
}</code></pre>
  <p></p>
  <p><a target="_blank" rel="noopener noreferrer nofollow" href="https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&amp;w=2976&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">A link</a></p>
  <p></p>
  <img src="https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&amp;w=2976&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" contenteditable="false" draggable="true" class="ProseMirror-selectednode">`,
  extensions: [StarterKit, Image, Link, Code],
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
const tiptapClasses = computed((): string[] => [
  "[&_pre]:p-2 [&_pre]:rounded [&_pre]:bg-black [&_pre]:text-white",
  "[&_.tiptap>:not(pre)_code]:bg-slate-200 [&_.tiptap>:not(pre)_code]:rounded [&_.tiptap>:not(pre)_code]:px-2 [&_.tiptap>:not(pre)_code]:py-1",
  "[&_code]:font-xs",
  "[&_img]:rounded-xl",
  "[&_a]:underline",
  "[&_strong]:font-bold",
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 p-2 bg-white rounded-md shadow">
      <BaseButton @click="addImage" size="sm"> Add image url &#43;</BaseButton>
    </div>

    <div :class="tiptapClasses">
      <EditorContent :editor="editor" v-if="editor" />
    </div>
  </div>
</template>
