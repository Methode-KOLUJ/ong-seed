'use client'

import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import { FontFamily } from '@/lib/tiptap/extensions/FontFamily'
import { FontSize } from '@/lib/tiptap/extensions/FontSize'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Image from '@tiptap/extension-image'
import CharacterCount from '@tiptap/extension-character-count'

import {
  Bold, Italic, Underline as UnderlineIcon, Link as LinkIcon,
  AlignLeft, AlignCenter, AlignRight, Highlighter,
  Minus, Paintbrush, Heading1, Heading2, Heading3
} from 'lucide-react'

// 🔘 Bouton icône réutilisable
const IconButton = ({ onClick, children, active }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded hover:bg-gray-200 transition ${active ? 'bg-black text-white' : 'text-gray-700'}`}
    type="button"
  >
    {children}
  </button>
)

// 🧰 Barre d'outils
const MenuBar = ({ editor }) => {
  if (!editor) return null

  return (
    <div className="flex flex-wrap gap-1 border px-3 py-2 bg-gray-100 rounded-t-md text-sm">
      <IconButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')}>
        <Bold size={16} />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')}>
        <Italic size={16} />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')}>
        <UnderlineIcon size={16} />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().toggleHighlight().run()} active={editor.isActive('highlight')}>
        <Highlighter size={16} />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })}>
        <AlignLeft size={16} />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })}>
        <AlignCenter size={16} />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })}>
        <AlignRight size={16} />
      </IconButton>

      <IconButton onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })}>
        <Heading1 size={16} />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })}>
        <Heading2 size={16} />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })}>
        <Heading3 size={16} />
      </IconButton>

      <IconButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Minus size={16} />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().setColor('#e11d48').run()}>
        <Paintbrush size={16} />
      </IconButton>

      <IconButton
        onClick={() => {
          let url = prompt('URL du lien (ex: https://example.com)')
          if (url) {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
              url = 'https://' + url
            }
            editor.chain().focus().setLink({ href: url }).run()
          }
        }}
      >
        <LinkIcon size={16} />
      </IconButton>
    </div>
  )
}

export default function TipTapEditor({ value, onChange, onEditorReady }) {
  const editor = useEditor({
  extensions: [
    StarterKit.configure({ blockquote: false }),
    Underline,
    Link,
    Highlight,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Color,
    TextStyle,
    FontFamily,
    FontSize,
    HorizontalRule,
    Image,
    CharacterCount,
  ],
  content: value,
  immediatelyRender: false, 
  onUpdate: ({ editor }) => onChange(editor.getHTML()),
  onCreate: ({ editor }) => {
    if (onEditorReady) onEditorReady(editor)
  },
})


  return (
    <div className="mt-4 w-full max-w-3xl">
      <MenuBar editor={editor} />
      <div className="border border-t-0 border-black rounded-b-md p-2 bg-white min-h-[200px] prose max-w-none">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
