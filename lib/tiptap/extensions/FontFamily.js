import { Mark, mergeAttributes } from '@tiptap/core'

export const FontFamily = Mark.create({
  name: 'fontFamily',

  addOptions() {
    return {
      types: ['textStyle'],
    }
  },

  parseHTML() {
    return [
      {
        style: 'font-family',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes, { style: `font-family: ${HTMLAttributes.style}` }), 0]
  },

  addCommands() {
    return {
      setFontFamily: font => ({ chain }) => {
        return chain().setMark('textStyle', { style: `font-family: ${font}` }).run()
      },
    }
  },
})
